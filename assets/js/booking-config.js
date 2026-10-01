/* Public booking URLs only. Never put Stripe secret keys in website files.
   Activate each link only after its availability, capacity, payment and
   confirmation flow has been tested. Empty links retain the contact fallback. */
window.BaselineBookingConfig = {
  email: 'info@baselinetennis.com',
  bookingLinks: {
    private: '',
    sparring: '',
    'semi-private': '',
    clinics: '',
    'tennis-101': '',
    'tennis-201': ''
  }
};
