# Baseline Tennis

A mobile-first website for Vittorio Zecca’s Miami tennis coaching business, using the approved **Club Modern** design. The site introduces the coach, explains services and prices, and prepares visitors for online booking.

**[Open the live preview](https://ronvillela.github.io/baseline-tennis-preview/)** · [Project status](BASELINE-STATUS.md) · [Coach request log](COACH-CHANGE-LOG.md)

## Current status

GitHub Pages is temporary preview hosting. The local working copy now embeds Acuity for real, unpaid test reservations; this connection has not been published. Sample hours and courts are not approved availability. Client email delivery and Stripe remain pending. Keep the test notice until the coach approves the setup and end-to-end testing passes. Email is for general questions, not booking.

The intended journey is: choose program → choose location → choose date/time → enter player details → pay → receive confirmation. Moving to the coach’s GoDaddy setup is a later, separately approved step.

## Local preview

This is a static HTML, CSS and JavaScript site. No build step, framework or package installation is required.

From the repository directory, run:

```sh
python3 -m http.server 8771 --bind 127.0.0.1
```

Open `http://127.0.0.1:8771/`. If that port is already in use, choose another. Browser responsive mode can approximate a phone; also review on a real iPhone before release. Refresh cached styles after changes.

## Link sharing

All pages declare the same 1200 × 630 PNG logo card through Open Graph and Twitter metadata. The card is `assets/social/baseline-link-preview.png`, rendered from the existing header SVG on the approved cream background. Update the absolute sharing URLs on all pages when moving to the production domain. Messaging services may cache older thumbnails.

## File guide

- `index.html`: homepage, session rates, programs, locations, coach, court gallery and Why Tennis.
- Service pages: `private-lessons.html`, `semi-private-lessons.html`, `sparring-sessions.html`, `group-clinics.html`, `tennis-101.html`, `tennis-201.html`.
- `about.html`: full coach profile. `contact.html`: general contact details. `policies.html`: policy/FAQ preview.
- `booking.html`: connected Acuity coach-test page. `assets/js/acuity-embed.js` maps the four approved services to public appointment IDs; `assets/css/acuity-embed.css` styles the surrounding Baseline layout. Acuity owns availability, intake, reservations and confirmation. Its official embed script handles frame resizing. No API secrets belong in this static repository.
- `booking-demo.html`: preserved four-step, sample-only prototype using `assets/css/scheduler-shell.css`, `assets/css/scheduler.css` and `assets/js/scheduler.js`. It cannot reserve or charge and does not pass player details to Acuity.
- Booking links remain routed through the local `booking.html?program=…` page. Leave the external URL configuration empty while reviewing this embedded approach.
- `confirmation.html`: confirmation placeholder; it does not verify payment.
- `assets/js/booking-config.js`: public booking URLs, keyed by service.
- `assets/js/booking.js`: booking routing.
- `assets/js/navigation.js`: shared header menu, Programs disclosure and FAQ behavior; loaded once per page after markup.
- `assets/css/base.css`: shared design tokens, component foundations and responsive layouts. Page-specific inline styles follow it; shared refinements then load in their existing order.
- `assets/js/page-jump.js`: homepage section-shortcut keyboard focus inside the hamburger menu.
- `assets/css/header.css`: shared floating header, centered hamburger navigation, tennis-ball accent, hover feedback and reduced-motion support.
- `assets/css/scheduler-shell.css`: shared booking-page layout; the live Acuity page does not load demo-only calendar/form styles.
- `assets/css/actions.css`: shared rounded action buttons and floating mobile booking bar.
- `assets/css/home-sections.css`: homepage layout refinements; `court-gallery.css`: shared photo/video presentation.
- `assets/photos`, `assets/video`, `assets/logos`: site media and approved branding.
- `scripts/check-site.py` and `tests/booking.test.cjs`: repeatable checks.
- `docs/coach-images`: screenshot evidence. `COACH-CHANGE-LOG.md`: numbered requests, implementation notes and pending items.

## Maintenance conventions

- Preserve the approved colors, typography and page content unless a change is approved.
- Review narrow phones (320–440 px), tablets (700–1049 px) and desktops (1050 px and wider). Check text wrapping, card alignment, menu behavior and the fixed mobile booking bar.
- Use semantic headings, descriptive image alternatives, keyboard-operable controls and visible focus. Keep relative links so GitHub’s project subdirectory works.
- Use comments to explain behavior and constraints. Keep edits scoped and reversible in Git; avoid broad formatting or architecture changes during visual refinements.
- Edit shared navigation in `navigation.js` and shared foundations in `base.css`. Keep page-specific styles scoped. Stylesheet order is intentional: base → page additions → gallery/home refinements (where applicable) → actions → header. Navigation loads after markup; booking configuration loads before booking routing.
- Unused legacy `main.css` and `main.js` were removed during the October 9 cleanup; they remain recoverable in Git history. Do not restore obsolete contact-form booking behavior.
- Update affected shared asset query versions on every consuming page when releasing changes; homepage-only assets need a version change in `index.html`.
- Keep credentials, Stripe secret keys and personal customer information out of this public repository. Use only tested public HTTPS provider URLs in booking configuration.

## Checks before publishing

Requires Python 3 and Node.js. From the repository root:

```sh
python3 scripts/check-site.py
node --test tests/booking.test.cjs
git diff --check
```

The static check covers all 14 HTML pages: local files and anchors, duplicate IDs/attributes, required shared asset order, sharing metadata, image alt attributes, accessibility references, language/viewport metadata, inline/external JavaScript syntax, structured JSON and sitemap XML. Booking tests cover every service, empty links, invalid URLs and unknown program keys.

These checks do not guarantee complete HTML/CSS standards compliance, accessibility or browser compatibility. Manually check mobile/desktop layouts, navigation, Explore links, phone/text actions and video playback. See [review notes](docs/CODE-REVIEW.md).

## Before accepting real bookings

The coach must confirm the provider, availability, court locations/fees, program details and final cancellation, no-show, weather, refund, package-expiration and junior-waiver terms. Confirm real testimonials and experience statistics before showing them as verified claims.

After selecting a provider, add its public HTTPS session URLs in `assets/js/booking-config.js`. Test payment success/failure, capacity and schedule conflicts, customer and coach emails, date/time/timezone/location, policies, rescheduling and calendar links. A visit to the static confirmation page is **not** proof of payment; the chosen service or secure backend must verify payment and create the booking.

## SEO and production launch

Miami is the main geographic focus, with neighborhood references, page titles/descriptions, semantic content and image alternatives. Search indexing is intentionally blocked on the temporary preview (`noindex, nofollow` and `robots.txt`). The production-domain references in canonical links, structured data and `sitemap.xml` still need verification.

At approved production launch, confirm the domain/hosting and HTTPS, resolve placeholders and policies, update canonical/sitemap URLs, and enable indexing for public content pages. Keep confirmation pages out of search results. Submit the final sitemap to Google Search Console.

## Publishing and documentation

Publish only an approved batch. Follow [upload instructions](UPLOAD-INSTRUCTIONS.md), confirm the GitHub Pages build succeeds, and check the live page after deployment. Preserve commit history; do not force-push. Use a reviewed revert commit if rollback is needed.

The coach’s previously exported PDF is a snapshot, not an automatically updated report. Regenerate it with current screenshots before presenting it as a report of the latest version.
