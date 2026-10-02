(() => {
  const menu = document.querySelector('.page-jump');
  if (!menu) return;
  const toggle = menu.querySelector('summary');
  menu.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    menu.open = false;
    const target = document.getElementById(link.hash.slice(1));
    const heading = target && target.querySelector('h2');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
      heading.addEventListener('blur', () => heading.removeAttribute('tabindex'), { once: true });
    }
  });
  document.addEventListener('click', event => {
    if (!menu.contains(event.target)) menu.open = false;
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      toggle.focus();
    }
  });
})();
