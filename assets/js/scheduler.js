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
  // Preview age labels approved by the user; adjust here if coach policy changes.
  const ageLabels = { Adult: 'Adult (18+)', Junior: 'Junior (ages 3–17)' };
  const state = { step: 0, program: '', date: '', time: '', seats: 0, players: 1 };
  const byId = id => document.getElementById(id);
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const money = value => currency.format(value);
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
  const firstMonth = new Date(start);
  let monthOffset = 0;
  const fullDate = value => new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York', weekday: 'long', month: 'short', day: 'numeric', year: 'numeric'
  }).format(new Date(value + 'T12:00:00Z'));

  function showStep(number) {
    if (number === 2) syncPlayers();
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
    byId('clinic-roster').hidden = true;
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
          renderRoster(seats);
        }
        byId('session-capacity').textContent = state.program === 'semi-private'
          ? 'Sample booking: one person reserves for two players at $85 total. Final booking arrangement needs coach approval.'
          : 'Sample selection only — this time is not held or reserved.';
      });
      container.append(button);
    });
    byId('time-fieldset').hidden = false;
  }
  // Use UTC calendar arithmetic for month boundaries, including December/January.
  // The preview horizon is intentionally finite; these are not coach-approved dates.
  function renderCalendar() {
    const month = new Date(Date.UTC(firstMonth.getUTCFullYear(), firstMonth.getUTCMonth() + monthOffset, 1, 12));
    byId('calendar-month').textContent = new Intl.DateTimeFormat('en-US', {
      timeZone: 'UTC', month: 'long', year: 'numeric'
    }).format(month);
    byId('calendar-previous').disabled = monthOffset === 0;
    byId('calendar-next').disabled = monthOffset === 2;
    const container = byId('sample-dates');
    container.replaceChildren();
    for (let blank = 0; blank < month.getUTCDay(); blank++) {
      const spacer = document.createElement('span');
      spacer.setAttribute('aria-hidden', 'true');
      container.append(spacer);
    }
    const days = new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth() + 1, 0)).getUTCDate();
    for (let day = 1; day <= days; day++) {
      const date = new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth(), day, 12));
      const value = date.toISOString().slice(0, 10);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'scheduler-choice calendar-day';
      button.textContent = String(day);
      button.disabled = date.getTime() <= start;
      button.setAttribute('aria-label', fullDate(value) + (button.disabled ? ', unavailable' : ', sample times available'));
      button.setAttribute('aria-pressed', String(state.date === value));
      if (date.getTime() === start) button.setAttribute('aria-current', 'date');
      button.addEventListener('click', () => {
        state.date = value;
        error.hidden = true;
        markChoice(container, button);
        byId('selected-date').textContent = fullDate(value);
        renderTimes();
      });
      container.append(button);
    }
  }
  function changeMonth(offset) {
    monthOffset = Math.max(0, Math.min(2, monthOffset + offset));
    state.date = '';
    resetTime();
    byId('time-fieldset').hidden = true;
    renderCalendar();
  }
  byId('calendar-previous').addEventListener('click', () => changeMonth(-1));
  byId('calendar-next').addEventListener('click', () => changeMonth(1));
  renderCalendar();
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
  // Keep player fields in the DOM so Back/Edit preserves entered details.
  // Inactive players are disabled and excluded from validation and the review.
  const playerCards = [];
  for (let index = 1; index <= 4; index++) {
    const card = document.createElement('fieldset');
    card.className = 'player-card';
    const legend = document.createElement('legend');
    legend.textContent = 'Player ' + index;
    card.append(legend);
    const fields = document.createElement('div');
    fields.className = 'player-fields';
    function addField(key, title, options) {
      const wrapper = document.createElement('div');
      const label = document.createElement('label');
      const field = document.createElement(options ? 'select' : 'input');
      field.id = 'player-' + index + '-' + key;
      label.htmlFor = field.id;
      label.textContent = title;
      if (options) options.forEach(text => {
        const option = document.createElement('option');
        option.value = text;
        option.textContent = key === 'age' ? ageLabels[text] : text;
        field.append(option);
      });
      else {
        field.type = 'text';
        field.placeholder = 'Player ' + index + ' name';
        field.maxLength = 100;
        field.required = true;
        field.autocomplete = 'off';
      }
      wrapper.append(label, field);
      fields.append(wrapper);
      return field;
    }
    const name = addField('name', 'Full name');
    const level = addField('level', 'Playing level', ['Beginner', 'Intermediate', 'Advanced']);
    const age = addField('age', 'Age group', ['Adult', 'Junior']);
    const privacy = document.createElement('p');
    privacy.className = 'scheduler-note';
    privacy.textContent = 'Attendee names stay private unless each adult chooses to share through their own future account. Junior identities are never shown.';
    card.append(fields, privacy);
    byId('player-forms').append(card);
    playerCards.push({ card, name, level, age });
    age.addEventListener('change', updateJuniorNote);
  }
  function updateJuniorNote() {
    byId('junior-note').hidden = !playerCards.slice(0, state.players).some(player => player.age.value === 'Junior');
  }
  function syncPlayers() {
    playerCards.forEach((player, index) => {
      player.card.hidden = index >= state.players;
      player.card.disabled = index >= state.players;
    });
    updateJuniorNote();
  }
  function renderRoster(seats) {
    // Fictional, opted-in adult examples only; no real booking records are read.
    const booked = 4 - seats;
    byId('roster-count').textContent = booked + ' of 4 spots booked · ' + seats + ' available (sample)';
    const list = byId('roster-names');
    list.replaceChildren();
    ['Alex M.', 'Sam R.', 'Private attendee'].slice(0, booked).forEach(name => {
      const item = document.createElement('li');
      item.textContent = name;
      list.append(item);
    });
    if (!booked) {
      const item = document.createElement('li');
      item.textContent = 'Be the first to join this sample session.';
      list.append(item);
    }
    byId('clinic-roster').hidden = false;
  }
  function renderReview() {
    const program = programs[state.program];
    const root = byId('session-review');
    root.replaceChildren();
    function section(title, rows, editStep) {
      const block = document.createElement('section');
      block.className = 'review-section';
      const header = document.createElement('div');
      header.className = 'review-heading';
      const heading = document.createElement('h3');
      heading.textContent = title;
      header.append(heading);
      if (editStep !== undefined) {
        const edit = document.createElement('button');
        edit.type = 'button';
        edit.className = 'review-edit';
        edit.textContent = 'Edit';
        edit.setAttribute('aria-label', 'Edit ' + title.toLowerCase());
        edit.addEventListener('click', () => showStep(editStep));
        header.append(edit);
      }
      const list = document.createElement('dl');
      list.className = 'session-review';
      rows.forEach(([label, value]) => {
        const row = document.createElement('div');
        const term = document.createElement('dt');
        const detail = document.createElement('dd');
        term.textContent = label;
        detail.textContent = value; // Player input is always text, never HTML.
        row.append(term, detail);
        list.append(row);
      });
      block.append(header, list);
      root.append(block);
    }
    section('Session details', [
      ['Session', program.name], ['Duration', '60 minutes'],
      ['Area', byId('session-location').value + ' · exact court pending'],
      ['Sample date', fullDate(state.date)], ['Sample time', state.time],
      ['Players in your booking', String(state.players)], ['Coach', 'Vittorio Zecca']
    ], 0);
    section('Players', playerCards.slice(0, state.players).map((player, index) => [
      'Player ' + (index + 1), player.name.value.trim() + ' · ' + player.level.value + ' · ' + ageLabels[player.age.value]
    ]).concat([['Booking contact', byId('player-email').value.trim()]]), 2);
    section('Total', [
      ['Session total', money(program.price * (state.program === 'clinics' ? state.players : 1))],
      ['Payment', 'Preview only · no charge']
    ]);
    root.lastElementChild.classList.add('review-total');
  }
  form.addEventListener('submit', event => {
    event.preventDefault(); // Preview must never submit personal data or a reservation.
    if (state.step === 0 && !state.program) return fail('Choose a session to continue.');
    if (state.step === 1 && (!byId('session-location').value || !state.date || !state.time)) return fail('Choose an area, sample date and sample time.');
    if (state.step === 1 && state.program === 'clinics' && (state.players < 1 || state.players > state.seats)) return fail('Choose a player count within the sample available places.');
    if (state.step === 2) {
      const missing = playerCards.slice(0, state.players).findIndex(player => !player.name.value.trim());
      if (missing !== -1) return fail('Enter a name for Player ' + (missing + 1) + '.');
      if (!byId('player-email').validity.valid) return fail('Enter a valid sample booking contact email.');
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
