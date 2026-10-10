"""Dependency-free static-site checks. Run from any directory with Python 3 and Node.js."""
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import subprocess
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
errors = []

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path, self.elements, self.scripts = path, [], []
        self.script = None
        self.feed(path.read_text())
        self.ids = Counter(a['id'] for _, a in self.elements if 'id' in a)

    def handle_starttag(self, tag, attrs):
        # Preserve duplicate-attribute evidence before converting to a mapping.
        names = [name for name, _ in attrs]
        if len(names) != len(set(names)):
            errors.append(f'{self.path.name}: duplicate attribute on <{tag}>')
        attrs = dict(attrs)
        self.elements.append((tag, attrs))
        if tag == 'script':
            self.script = [attrs, '']

    def handle_data(self, data):
        if self.script is not None:
            self.script[1] += data

    def handle_endtag(self, tag):
        if tag == 'script' and self.script is not None:
            self.scripts.append(self.script)
            self.script = None


def check(condition, message):
    if not condition:
        errors.append(message)


def syntax(code, label):
    result = subprocess.run(['node', '--check'], input=code, text=True, capture_output=True)
    check(result.returncode == 0, f'{label}: {result.stderr.strip()}')


pages = {p.resolve(): Page(p) for p in ROOT.glob('*.html')}
for path, page in pages.items():
    label = path.name
    check(all(n == 1 for n in page.ids.values()), f'{label}: duplicate IDs')
    check(sum(tag == 'h1' for tag, _ in page.elements) == 1, f'{label}: expected one h1')
    check(any(tag == 'html' and a.get('lang') for tag, a in page.elements), f'{label}: missing language')
    check(any(tag == 'meta' and a.get('name') == 'viewport' for tag, a in page.elements), f'{label}: missing viewport')
    # Shared behavior must initialize once; stylesheet order preserves the cascade.
    scripts = [urlsplit(a['src']).path for tag, a in page.elements if tag == 'script' and a.get('src')]
    styles = [urlsplit(a['href']).path for tag, a in page.elements
              if tag == 'link' and a.get('rel') == 'stylesheet' and a.get('href')]
    for shared in ('booking-config.js', 'booking.js', 'navigation.js'):
        check(scripts.count('assets/js/' + shared) == 1, f'{label}: load {shared} exactly once')
    required = ['assets/js/booking-config.js', 'assets/js/booking.js']
    if all(item in scripts for item in required):
        check(scripts.index(required[0]) < scripts.index(required[1]), f'{label}: booking config must load first')
    required = ['assets/css/base.css', 'assets/css/actions.css', 'assets/css/header.css']
    for shared in required:
        check(styles.count(shared) == 1, f'{label}: load {shared} exactly once')
    if all(item in styles for item in required):
        check([styles.index(item) for item in required] == sorted(styles.index(item) for item in required),
              f'{label}: incorrect base/actions/header cascade order')
    # Keep the live provider page independent of sample-only controls.
    if label in ('booking.html', 'booking-demo.html'):
        check(styles.count('assets/css/scheduler-shell.css') == 1,
              f'{label}: load the shared scheduler shell exactly once')
    if label == 'booking.html':
        check('assets/css/scheduler.css' not in styles and 'assets/js/scheduler.js' not in scripts,
              f'{label}: demo-only assets must not load in the connected scheduler')
    for key in ('og:title', 'og:description', 'og:image', 'twitter:image'):
        matches = [a.get('content') for tag, a in page.elements
                   if tag == 'meta' and (a.get('property') == key or a.get('name') == key)]
        check(len(matches) == 1 and bool(matches[0]), f'{label}: expected one nonempty {key}')
    for tag, attrs in page.elements:
        if tag == 'img':
            check('alt' in attrs, f'{label}: image missing alt text')
        for attr in ('aria-controls', 'aria-labelledby', 'aria-describedby'):
            for target in attrs.get(attr, '').split():
                check(target in page.ids, f'{label}: missing {attr} target {target}')
        for attr in ('href', 'src', 'poster'):
            value = attrs.get(attr)
            if not value:
                continue
            url = urlsplit(value)
            if url.scheme or url.netloc:
                continue
            target = (path.parent / unquote(url.path)).resolve() if url.path else path
            if target.is_dir():
                target /= 'index.html'
            check(target.is_file(), f'{label}: missing local file {value}')
            if url.fragment and target in pages:
                check(unquote(url.fragment) in pages[target].ids, f'{label}: missing anchor {value}')
        for name, code in attrs.items():
            if name.startswith('on') and code:
                syntax('function handler(event) {\n' + code + '\n}', f'{label}: {name}')
    for number, (attrs, code) in enumerate(page.scripts, 1):
        if attrs.get('src'):
            continue
        if attrs.get('type') == 'application/ld+json':
            try:
                json.loads(code)
            except ValueError as error:
                errors.append(f'{label}: invalid structured JSON: {error}')
        else:
            syntax(code, f'{label}: inline script {number}')
for path in (ROOT / 'assets/js').glob('*.js'):
    syntax(path.read_text(), str(path.relative_to(ROOT)))
try:
    ET.parse(ROOT / 'sitemap.xml')
except ET.ParseError as error:
    errors.append(f'sitemap.xml: {error}')
if errors:
    print('\n'.join(errors))
    sys.exit(1)
print(f'PASS: {len(pages)} pages; local assets/anchors, unique IDs/attributes, shared asset order, sharing metadata, image alt attributes, accessibility references, language/viewport, JavaScript syntax, structured JSON and sitemap XML.')
print('Scope: static checks only; not a full HTML/CSS standards, accessibility or browser compatibility audit.')
