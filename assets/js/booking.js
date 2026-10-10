(function () {
  'use strict';
  const config = window.BaselineBookingConfig || { bookingLinks: {} };
  const labels = {
    private: 'Private Lesson', sparring: 'Sparring Session',
    'semi-private': 'Semi-Private Lesson', clinics: 'Group Clinic',
    'tennis-101': 'Tennis 101', 'tennis-201': 'Tennis 201'
  };
  function validUrl(value) {
    try { return new URL(value).protocol === 'https:'; }
    catch (error) { return false; }
  }
  document.querySelectorAll('[data-booking]').forEach(function (link) {
    const key = link.getAttribute('data-booking');
    if (!Object.prototype.hasOwnProperty.call(labels, key)) return;
    const destination = (config.bookingLinks || {})[key];
    // Continue in the same tab for a simpler mobile booking journey.
    link.href = validUrl(destination) ? destination :
      'booking.html?program=' + encodeURIComponent(key) + '#booking-pending';
  });
})();
