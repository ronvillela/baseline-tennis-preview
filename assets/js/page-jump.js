/* Homepage shortcuts live inside the main menu. The page navigation handler
   closes the menu; move keyboard focus to the destination heading as well. */
(() => {
  const links = document.querySelector('.header-section-links');
  if (!links) return;
  links.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.getElementById(link.hash.slice(1));
    const heading = target && target.querySelector('h2');
    if (!heading) return;
    // Wait for native fragment navigation and menu closure before moving focus.
    requestAnimationFrame(() => {
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
      heading.addEventListener('blur', () => heading.removeAttribute('tabindex'), { once: true });
    });
  });
})();
