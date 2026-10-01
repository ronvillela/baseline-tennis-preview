(function () {
  'use strict';

  var BOOKING_URL = 'contact.html#lesson-request';
  var PHONE = '3059229122';
  var PHONE_DISPLAY = '(305) 922-9122';
  var EMAIL = 'info@baselinetennis.com';

  /* Mobile navigation is initialized inline in each page for reliable mobile loading. */

  /* Mobile submenu toggles */
  document.querySelectorAll('.nav-submenu-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      var submenu = btn.nextElementSibling;
      if (submenu) submenu.classList.toggle('is-open');
    });
  });

  /* FAQ accordion */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach(function (open) {
        open.classList.remove('is-open');
        open.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* Contact form — mailto fallback */
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('[name="name"]').value;
      var userEmail = form.querySelector('[name="email"]').value;
      var userPhone = form.querySelector('[name="phone"]').value;
      var subject = form.querySelector('[name="subject"]').value || 'Baseline Tennis Inquiry';
      var message = form.querySelector('[name="message"]').value;
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var body = 'Name: ' + name + '\nEmail: ' + userEmail + '\nPhone: ' + userPhone + '\n\n' + message;
      window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  /* Expose constants for inline use if needed */
  window.BaselineTennis = {
    bookingUrl: BOOKING_URL,
    phone: PHONE,
    phoneDisplay: PHONE_DISPLAY,
    email: EMAIL
  };
})();
