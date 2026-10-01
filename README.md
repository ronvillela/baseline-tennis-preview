# Baseline Tennis Website Update

Updated July 27, 2026 with:

- Miami neighborhoods served
- Current lesson, sparring, semi-private, clinic, and package rates
- Tennis 101 and Tennis 201 program details
- Ages 3+ and ball-stage information
- Loaner racquets
- Video feedback and progress tracking
- Dedicated group clinics page and live-calendar placeholder
- Booking page prepared for future scheduling/payment links
- Cancellation, rain, and refund policies
- New sparring sessions page
- Mobile-friendly navigation and action bar
- Updated Miami-focused SEO content and structured data

## Important booking setup

The static GitHub Pages site cannot independently provide secure payments, real-time appointment availability, automatic reminders, clinic capacity, or student accounts. Those functions require a booking service such as Square Appointments.

When booking links are ready, open `assets/js/booking-config.js` and paste them into the empty `bookingLinks` values near the top. Buttons throughout the site will automatically use the correct links.

## Preview SEO status

The preview intentionally contains `noindex, nofollow`, and `robots.txt` blocks search engines. Before the production launch:

1. Remove the robots meta tag from every HTML file.
2. Change `robots.txt` to allow indexing.
3. Confirm the final domain in canonical links and `sitemap.xml`.
4. Submit the sitemap through Google Search Console.

## Existing logo folder

This update references the existing files in `assets/logos`. Keep that folder in the repository when uploading this update.
