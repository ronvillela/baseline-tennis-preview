(function () {
  'use strict';
  var config = window.BaselineBookingConfig || { bookingLinks: {} };
  var labels = {
    private: 'Private Lesson', sparring: 'Sparring Session',
    'semi-private': 'Semi-Private Lesson', clinics: 'Group Clinic',
    'tennis-101': 'Tennis 101', 'tennis-201': 'Tennis 201'
  };
  function validUrl(value) {
    try { return new URL(value).protocol === 'https:'; }
    catch (error) { return false; }
  }
  document.querySelectorAll('[data-booking]').forEach(function (link) {
    var key = link.getAttribute('data-booking');
    if (!Object.prototype.hasOwnProperty.call(labels, key)) return;
    var destination = (config.bookingLinks || {})[key];
    // Continue in the same tab for a simpler mobile booking journey.
    link.href = validUrl(destination) ? destination :
      'booking.html?program=' + encodeURIComponent(key) + '#booking-pending';
  });
  var key = new URLSearchParams(window.location.search).get('program');
  var selection = document.querySelector('#booking-selection');
  if (selection && Object.prototype.hasOwnProperty.call(labels, key)) {
    selection.textContent = labels[key] + ' selected. Availability and secure payment will appear here once booking opens.';
  }
})();
