/* Local booking prototype: sample slots only. No network requests, persistence,
   reservation, checkout or payment. Replace this demo with Acuity's live flow
   after calendars, court rules, Stripe and notifications pass end-to-end testing. */
(function () {
  'use strict';
  const form = document.querySelector('#scheduler-form');
  if (!form) return;
  const programs = {
    private: { name: 'Private Lesson', price: 95, players: 1 },
    'semi-private': { name: 'Semi-Private', price: 85, players: 2 },
    sparring: { name: 'Sparring / Hitting', price: 120, players: 1 },
    clinics: { name: 'Group Clinics', price: 42.50, players: 1 }
  };
  const state = { step: 0, program: '', date: '', time: '', seats: 0, players: 1 };
  const byId = id => document.getElementById(id);
  const money = value => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  const steps = Array.from(form.querySelectorAll('[data-step]'));
  const error = byId('scheduler-error');
  const next = byId('scheduler-next');
  const back = byId('scheduler-back');

  // Start dates from Miami's civil date, not the visitor's time zone. Noon UTC
  // keeps date-only labels stable across Eastern daylight-saving transitions.
  const miamiDate = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(new Date());
  const part = type => miamiDate.find(item => item.type === type).value;
  const start = Date.UTC(Number(part('year')), Number(part('month')) - 1, Number(part('day')), 12);
  const dates = Array.from({ length: 6 }, (_, index) => new Date(start + (index + 1) * 86400000));
  const fullDate = value => new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York', weekday: 'long', month: 'short', day: 'numeric', year: 'numeric'
  }).format(new Date(value + 'T12:00:00Z'));

  function showStep(number) {
    state.step = number;
    error.hidden = true;
    steps.forEach((section, index) => { section.hidden = index !== number; });
    document.querySelectorAll('.scheduler-progress li').forEach((item, index) => {
      if (index === number) item.setAttribute('aria-current', 'step');
      else item.removeAttribute('aria-current');
    });
    back.hidden = number === 0;
    next.hidden = number === 3;
    next.textContent = ['Choose location & time', 'Continue to player details', 'Review sample session'][number] || '';
    steps[number].querySelector('h2').focus({ preventScroll: true });
    byId('booking-pending').scrollIntoView({ behavior: 'auto', block: 'start' });
  }
  function fail(message) {
    error.textContent = message;
    error.hidden = false;
    error.scrollIntoView({ behavior: 'auto', block: 'center' });
  }
  function resetTime() {
    state.time = '';
    state.seats = 0;
    state.players = programs[state.program]?.players || 1;
    byId('clinic-players').hidden = true;
    byId('session-capacity').textContent = '';
  }
  function markChoice(container, chosen) {
    container.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button === chosen)));
  }
  function renderTimes() {
    resetTime();
    const container = byId('sample-times');
    container.replaceChildren();
    // Deterministic samples demonstrate per-session capacity, never real inventory.
    ['8:00 AM', '10:00 AM', '4:00 PM'].forEach((time, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'scheduler-choice';
      button.setAttribute('aria-pressed', 'false');
      button.textContent = time;
      const seats = [2, 4, 1][index];
      if (state.program === 'clinics') {
        const label = document.createElement('small');
        label.textContent = seats + ' sample ' + (seats === 1 ? 'spot' : 'spots');
        button.append(label);
      }
      button.addEventListener('click', () => {
        state.time = time;
        state.seats = seats;
        markChoice(container, button);
        if (state.program === 'clinics') {
          state.players = 1;
          const quantity = byId('player-count');
          quantity.replaceChildren();
          for (let count = 1; count <= seats; count++) {
            const option = document.createElement('option');
            option.value = String(count);
            option.textContent = count + (count === 1 ? ' player' : ' players') + ' · ' + money(count * programs.clinics.price);
            quantity.append(option);
          }
          byId('clinic-players').hidden = false;
        }
        byId('session-capacity').textContent = state.program === 'semi-private'
          ? 'Sample booking: one person reserves for two players at $85 total. Final booking arrangement needs coach approval.'
          : 'Sample selection only — this time is not held or reserved.';
      });
      container.append(button);
    });
    byId('time-fieldset').hidden = false;
  }
  dates.forEach(date => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'scheduler-choice';
    button.setAttribute('aria-pressed', 'false');
    const value = date.toISOString().slice(0, 10);
    button.textContent = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', weekday: 'short', month: 'short', day: 'numeric' }).format(date);
    button.addEventListener('click', () => {
      state.date = value;
      markChoice(byId('sample-dates'), button);
      renderTimes();
    });
    byId('sample-dates').append(button);
  });
  form.querySelectorAll('input[name="session"]').forEach(radio => {
    radio.addEventListener('change', () => {
      state.program = radio.value;
      resetTime();
      if (state.date) renderTimes();
    });
  });
  byId('session-location').addEventListener('change', () => {
    state.date = '';
    resetTime();
    markChoice(byId('sample-dates'), null);
    byId('time-fieldset').hidden = true;
    byId('sample-schedule').hidden = !byId('session-location').value;
  });
  byId('player-count').addEventListener('change', event => { state.players = Number(event.target.value); });
  byId('player-age').addEventListener('change', event => { byId('junior-note').hidden = event.target.value !== 'junior'; });
  function renderReview() {
    const program = programs[state.program];
    const rows = [
      ['Session', program.name], ['Duration', '60 minutes'],
      ['Area', byId('session-location').value + ' · exact court pending'],
      ['Sample date', fullDate(state.date)], ['Sample time', state.time + ' · Miami / Eastern'],
      ['Players', String(state.players)], ['Coach', 'Vittorio Zecca'],
      ['Player', byId('player-name').value.trim()], ['Email', byId('player-email').value.trim()],
      ['Level', byId('player-level').value], ['Session price', money(program.price * (state.program === 'clinics' ? state.players : 1))]
    ];
    const list = byId('session-review');
    list.replaceChildren();
    rows.forEach(([label, value], index) => {
      const row = document.createElement('div');
      if (index === rows.length - 1) row.className = 'review-total';
      const term = document.createElement('dt');
      const detail = document.createElement('dd');
      term.textContent = label;
      detail.textContent = value; // Never interpolate player input as HTML.
      row.append(term, detail);
      list.append(row);
    });
  }
  form.addEventListener('submit', event => {
    event.preventDefault(); // Preview must never submit personal data or a reservation.
    if (state.step === 0 && !state.program) return fail('Choose a session to continue.');
    if (state.step === 1 && (!byId('session-location').value || !state.date || !state.time)) return fail('Choose an area, sample date and sample time.');
    if (state.step === 1 && state.program === 'clinics' && (state.players < 1 || state.players > state.seats)) return fail('Choose a player count within the sample available places.');
    if (state.step === 2) {
      if (!byId('player-name').value.trim() || !byId('player-email').validity.valid) return fail('Enter a sample player name and a valid sample email.');
      renderReview();
    }
    if (state.step < 3) showStep(state.step + 1);
  });
  back.addEventListener('click', () => showStep(Math.max(0, state.step - 1)));
  const requested = new URLSearchParams(location.search).get('program');
  if (Object.prototype.hasOwnProperty.call(programs, requested)) {
    state.program = requested;
    state.players = programs[requested].players;
    form.querySelector('input[value="' + requested + '"]').checked = true;
  } else if (requested === 'tennis-101' || requested === 'tennis-201') {
    const notice = byId('program-notice');
    notice.hidden = false;
    notice.textContent = 'This program’s dates and price are awaiting coach confirmation. You can explore the sample single-session flow below.';
  }
})();
