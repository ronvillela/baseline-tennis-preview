/* Connected coach-test flow. Acuity owns availability, intake and confirmations.
   Public appointment IDs only. Do not add secret keys or client data here.
   Keep production activation separate from this non-payment testing integration. */
(function () {
  'use strict';
  const frame = document.getElementById('acuity-frame');
  if (!frame) return;
  const types = {
    private: '99198328', 'semi-private': '99267380',
    sparring: '99267389', clinics: '99267402'
  };
  const buttons = Array.from(document.querySelectorAll('[data-acuity-program]'));
  const status = document.getElementById('acuity-status');
  // Cache the surrounding controls; Acuity alone owns the cross-origin form.
  const panel = document.getElementById('acuity-panel');
  const title = document.getElementById('acuity-title');
  const directLink = document.getElementById('acuity-direct');
  let selected = '';
  function selectProgram(key, focus) {
    if (!Object.prototype.hasOwnProperty.call(types, key) || selected === key) return;
    selected = key;
    const url = new URL('https://app.acuityscheduling.com/schedule.php');
    url.searchParams.set('owner', '40585921');
    url.searchParams.set('appointmentType', types[key]);
    directLink.href = url.href;
    url.searchParams.set('ref', 'embedded_csp');
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.acuityProgram === key)));
    panel.hidden = false;
    status.textContent = 'Loading Acuity… If it does not appear, use the separate-tab link below.';
    frame.src = url.href;
    if (focus) title.focus();
  }
  // A frame load is not evidence of a booking, payment, or successful confirmation.
  frame.addEventListener('load', () => {
    if (selected) status.textContent = 'Complete your booking below. Changing session type restarts that booking flow.';
  });
  buttons.forEach(button => button.addEventListener('click', () => selectProgram(button.dataset.acuityProgram, true)));
  const requested = new URLSearchParams(window.location.search).get('program');
  if (Object.prototype.hasOwnProperty.call(types, requested)) selectProgram(requested, false);
  else if (requested === 'tennis-101' || requested === 'tennis-201') {
    const notice = document.getElementById('acuity-program-notice');
    notice.hidden = false;
    notice.textContent = 'Tennis 101 and Tennis 201 are not connected yet; their dates and prices await coach confirmation.';
  }
})();
