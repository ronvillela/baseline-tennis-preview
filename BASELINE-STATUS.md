# Baseline Tennis development checkpoint

Reviewed September 30, 2026 (America/New_York).

## Source of truth and approval boundary

- Repository: https://github.com/ronvillela/baseline-tennis-preview
- Live preview: https://ronvillela.github.io/baseline-tennis-preview/
- Inspected main commit: 46351e1c987560474db2a37e310eb6ed44107601, July 27, 2026.
- Preserve the user-approved Club Modern design: electric blue, cream, charcoal, Playfair Display headings, DM Sans body, current logos and layout.
- Do not push, merge, deploy, or publish without explicit user approval. Work locally and provide a reviewable preview first.
- The initial inspection changed no website implementation. Subsequent approved local changes are recorded below.

## Current implementation

Static site with 12 HTML pages (including 404), five SVG logos, robots.txt and sitemap.xml. No package manager, build pipeline, application backend, or automated test suite is present.

Pages: home, about, contact, booking, policies, private lessons, semi-private lessons, sparring sessions, group clinics, Tennis 101, Tennis 201, and 404.

Current pages embed CSS and JavaScript directly. The files assets/css/main.css and assets/js/main.js remain in the repository but are older and are not loaded by the current HTML pages. Editing them alone will not update the current site.

Published offerings: private $95/60 minutes; sparring $120/60 minutes; semi-private $90 total for two players/60 minutes; clinics $45 per player/90 minutes with four-player maximum and ages 10+. Packages: five lessons $450; ten lessons $850. Tennis 101: 4–6 weeks; Tennis 201: six weeks. General coaching ages 3+. These are existing site claims, not independently verified business approvals.

Contact: Vittorio Zecca, (305) 922-9122, vittozecca19@gmail.com. Hours by appointment; ten Miami neighborhoods listed. Contact requests use the visitor's email application; no server submission or storage.

## History and media findings

- July 18, 8476a37: initial preview including five SVG logos and placeholders.
- July 18, f132c44: mobile hamburger fix.
- July 18, 0f19a3a: mobile navigation and desktop header layout changes, including logo reference changes.
- July 27, 2f08d93: Miami programs, rates, ages, packages, policies, sparring and booking pages, plus text describing video feedback and progress tracking.
- July 27, 46351e1: inline styling and behavior across all 12 HTML pages to restore navigation/layout.

No photo or video asset files occur anywhere in the fetched five-commit history. Current HTML has no video, source, or iframe elements; image elements are logos only. Homepage uses a CSS court graphic placeholder. About page says "Coach Photo" in a placeholder. "Video Feedback" describes a coaching service; it is not playable media. If newer photographic/video work exists elsewhere, recover that version/assets before replacing placeholders or assuming the repository contains it.

## Remaining issues and priorities

1. Recover approved photos/video and their intended placement. Coach portrait, real tennis imagery, video sources/posters, and detailed approved biography/credentials are not supplied in this repository. Do not invent credentials or testimonials.
2. Fix program preselection. Inline code matches URL keys against option text using substring matching. `clinics` does not match `Group Clinic`; `tennis-101` and `tennis-201` do not match the space-separated labels. Also `private` matches both Private Lesson and Semi-Private Lesson, causing the later option to win. Use explicit stable values for all six program keys. Clinics failure confirmed on the live form; other cases established from code, not individually browser-tested.
3. Connect an approved scheduling/payment service. All six bookingLinks values are blank in every page. Calendar, secure payments, reminders, capacity, accounts, and package management are not implemented. The site currently discloses this and offers contact fallbacks.
4. Correct README and upload guidance: they instruct editing bookingLinks in assets/js/main.js, but the active settings are duplicated inline. Consolidate active styling/scripts/configuration carefully, preserving the existing appearance and working mobile navigation; update docs to match.
5. Before production: confirm final domain (currently baselinetennis.com in canonical URLs, structured data and sitemap), business rates/policies, court arrangements, and booking provider. Remove preview noindex/nofollow and change robots rules only with launch approval. Current indexing block is intentional.

## Verification completed

- Downloaded full repository and inspected all five commits.
- Compared live bytes with local files: all 12 HTML pages, five SVG logos, robots.txt and sitemap.xml matched exactly.
- Parsed links and media references across all HTML pages: no missing local file targets or fragment anchors.
- Visually inspected desktop homepage and mobile menu at 390×844; mobile menu and Programs expansion worked. Browser viewport restored afterward.
- Live clinic contact handoff reproduced incorrect Private Lesson selection.
- No email was sent and no booking/payment was attempted. No exhaustive accessibility or cross-browser audit was performed.

## Resume workflow

Fetch remote changes before new implementation and compare with this commit. Keep local edits isolated from publication, preserve Club Modern visual styling, resolve program selection and documentation drift, then integrate recovered approved media and booking configuration. Preview locally and review changes before any push that could trigger GitHub Pages deployment.


## Local scrolling-navigation preview

A subsequent local preview adds a sticky homepage section bar for Programs, Rates, Locations, and Book. Only index.html implementation changed; detailed program pages retain their existing design. No remote push or deployment occurred.

- Working branch: preview/scroll-navigation.
- Original branch: backup/club-modern-before-scroll-nav at 46351e1.
- Recovery bundle: ../baseline-before-scroll-nav.bundle (complete history, verified).
- Local preview: http://127.0.0.1:8765/ while the local server is running.
- To undo this homepage experiment, restore index.html from backup/club-modern-before-scroll-nav. Preserve any later user edits before restoration. Restore only the homepage when reverting the experiment; preserve this checkpoint.
- Checked desktop rate navigation, mobile location navigation at 390×844, mobile menu opening, anchor spacing, and diff whitespace. Reduced-motion users receive immediate anchor navigation.


## Approved changes awaiting publication

The user reviewed the local navigation preview and approved keeping it for a later GitHub upload. The homepage section bar and anchor navigation are approved and saved in local version history on preview/scroll-navigation, together with this checkpoint. Continue building on this version rather than the original homepage.

Publication is still pending explicit user approval. Do not push or deploy yet. The next input expected is the coach's English/Spanish instructions and any approved media; keep conversation and updates in English.


## Coach instruction: booking-first calls to action

Implemented locally: use "Book a Lesson" for the homepage hero, closing action, and shared desktop header/footer booking links. Session-specific choices use direct Book wording. Compact mobile/section navigation retains "Book". Keep the approved Club Modern design and scrolling navigation.

The coach's conversion goal is discover → understand → trust → price → availability → reserve → pay → confirmation. This update addresses CTA wording only. Booking still routes through the existing preview/contact fallback; provider integration is required for actual availability, payment and confirmation. Keep that limitation visible, and keep "Prepare Email Request" accurate on the contact form. No publication authorized.


## User preference: mobile-first review

Prioritize mobile layout and usability for every subsequent change. After each completed update, verify the mobile preview and show it to the user in the browser panel. Keep the preview at a phone-sized viewport for review unless the user requests another size. Check desktop compatibility as appropriate. Preserve local version history and require explicit approval before publishing.


## Coach instruction 2: clear homepage hero

Updated the homepage headline to "Private Tennis Lessons in Miami", with beginner/intermediate/advanced coaching copy and Brickell, Coconut Grove, Coral Gables, Key Biscayne, South Miami directly beneath. Retained Ages 3+, Book a Lesson, View Rates, existing styling and mobile section navigation. Items 3 and 4 in the supplied message were blank. This change remains local and reversible.


## Coach review deliverable

Maintain COACH-CHANGE-LOG.md after every coach-request implementation. User requested a running document that will become an email-ready PDF or image report when all coach requirements are finished. Preserve original Spanish/English requests, explain changes in English, and include final mobile screenshot evidence. Distinguish implemented locally, approved, published, and pending integrations. Current record covers requests 1 and 2; items 3 and 4 were blank. The fixed mobile review wrapper is at http://127.0.0.1:8766/ (local utility in /tmp/baseline-mobile-preview) and embeds the site server at port 8765.


## Coach request 3 current pricing overrides

Choose Your Session now immediately follows the hero. Current semi-private: $85 total for two players, $42.50 each, 60 minutes. Current clinics: $42.50 per player, up to four players, 60 minutes. These supersede the initial inspection's $90 semi-private and $45/90-minute clinic figures. Private $95 and sparring $120 remain 60 minutes. Packages unchanged. Updated related booking/detail pages and metadata. COACH-CHANGE-LOG.md includes request 3.


## Step 4 provider-neutral preparation

Shared public booking URLs now live in assets/js/booking-config.js; all pages load that file and assets/js/booking.js. Specific program buttons go directly to the correctly selected contact fallback while URLs are empty, or to a tested HTTPS provider link in the same tab when configured. Generic Book links still open the session chooser. Six exact program mappings replace ambiguous substring selection. Tests: node tests/booking.test.cjs. No provider selected, account opened, or payment activated. Booking-page copy explains the current fallback and planned process without claiming live availability. Step 4 advice in COACH-CHANGE-LOG.md is Spanish-first with a brief English summary, as requested. Update this report after each subsequent coach request.


## Standing SEO priority

Treat SEO as a requirement for every future update. Maintain unique page titles/descriptions, clear service/location copy, crawlable descriptive links, accurate prices and structured data, and mobile usability. Verify final domain before changing canonicals or sitemap; preserve preview restrictions until launch approval. Before production, review current SportsActivityLocation schema against actual service-area business operations (no fixed court/address yet verified), confirm indexing/robots configuration, set up Search Console, submit sitemap, and evaluate real mobile performance after media is added. robots.txt blocking can prevent crawlers from seeing noindex, so preview directives are not a privacy guarantee. Do not claim ranking gains or measured performance without evidence. Spanish-first SEO explanation is recorded in COACH-CHANGE-LOG.md.


## Requests 5 and 6

Request 5 confirms the already implemented Choose Your Session placement; no duplicate section. Request 6 adds a local review-section layout after pricing with proposed Players Love Baseline heading and an explicit pending-reviews notice. No actual reviews, stars, counts, review schema, or Google integration exist yet. Await Google review link or approved customer testimonials. Before production, populate with verified/approved content or remove the pending section. Requests 7 and 8 were blank. Spanish report updated.


## Request 7 value proposition

Replaced the compact trust strip with a blue value section (#why-baseline) after reviews, before programs. Headline: Your Court. Your Schedule. Your Game. Four exact benefits supplied by coach. Pricing remains immediately after hero. No new availability guarantees or booking functionality added. Spanish coach log updated; capture final mobile evidence for PDF.


## Request 8 Miami positioning

Miami is the primary geographic focus. No South Florida wording was present in active HTML at audit. Updated homepage title, about title/description/H1, service H1s and booking H1 to emphasize Miami naturally. Homepage locations highlights Brickell, Coconut Grove, Coral Gables, Key Biscayne and South Miami, with other existing neighborhoods secondary; includes booking/service links and court-confirmation wording. Do not create thin duplicate neighborhood pages, fabricate addresses or imply guaranteed courts. Preserve preview noindex until production approval. Spanish coach report updated.


## Request 9 branded email

Current website email is info@baselinetennis.com, replacing the personal Gmail in all HTML, mailto links, inline fallback configuration, shared booking configuration, legacy main.js and homepage structured data. Earlier inspection notes retain historical context. Mailbox existence/delivery not verified; confirm before publication. No mailbox provisioning, DNS modification or email sending performed. Coach report updated in Spanish.


## Request 10 fixed mobile CTA

All 12 HTML pages now show a fixed mobile BOOK NOW button occupying half the action bar, with Call/Text secondary. Email remains in contact/footer. Safe-area padding added to the bar, footer clearance and open menu height. Desktop breakpoint unchanged. Booking button opens booking.html until provider selection; no payment activation. Coach report updated. Await specific instructions under PROGRAM / SERVICE PAGES.


### Request 11 — program purchase summaries
- Private, Semi-Private, Clinics, Tennis 101 and Tennis 201 now lead with name, price, duration, players, Miami areas and a program-specific BOOK NOW link. Original introductions follow the offer.
- Mobile summary uses compact typography and full-width CTA; Club Modern colors retained. One H1 per page; Tennis 101/201 H1 now includes Miami.
- Pending coach input: Tennis 101/201 prices, session lengths and player limits. Explicit unconfirmed labels used; existing 4–6 week / 6 week course durations retained.
- Verified five summary structures, booking routing tests, mobile Private preview. No publishing.


### Request 12 — CTA consistency
- Standardized booking action links across all 12 pages to Book Now, preserving routes and program selection.
- Homepage clinic card now View Availability → group-clinics.html#clinic-availability, an explicitly pending schedule; original card order retained.
- Ask a Question remains secondary. Informational links retain descriptive labels; final mailto form button remains Prepare Email Request to accurately describe behavior.
- Real availability/payment integration remains pending. Local changes only.


### Request 13 — remove five-lesson package
- Removed $450 five-lesson offer from Private, homepage and policy FAQ.
- Existing $95 single and $850 ten-lesson options retained; ten-lesson savings clarified as $100 versus ten singles.
- Adjusted remaining card grids. Future package sales require coach terms and provider setup. No publishing.


### Request 14 — clinic capacity selling point
- Prominent Maximum 4 Players / 60 Minutes across clinic hero, homepage cards, booking options and clinic details.
- Added small-group / individual-attention benefit; $42.50 per-player price retained.
- Provider must enforce capacity 4 when configured. Local preview only.


### Request 15 — Tennis 101/201 program offers
- Added full-program pricing placeholders and Next Session / dates pending to both hero offers.
- Program-specific CTAs use Join Program (including booking page); generic fixed CTA stays Book Now.
- Existing 101 4–6 weeks and 201 6 weeks explicitly provisional, pending separately supplied final details. No invented dates/prices.
- Join Program uses program-selected contact fallback, not enrollment/payment. BOOKING / STRIPE is next section heading only.


### Requests 16–17 — scheduling plus Stripe
- Recommended managed scheduler with Stripe and mandatory full upfront payment; not a standalone payment link disconnected from availability.
- Booking page planned flow now includes policy review, confirmation details and calendar option, explicitly inactive.
- Existing per-program public URL configuration is the integration seam. No credentials/provider links supplied; no actual integration or payment/email test performed.
- Pending: provider choice/account connection, guaranteed court inventory, coach schedule/travel buffers, cross-location conflict prevention, notification inbox verification, policy approval, 101/201 details.
- Activation checks: paid booking with both notifications, timezone/location/policy/calendar, failed/abandoned payment, concurrent bookings, four-player capacity, reschedule/cancel/refund behavior. Provider's Stripe integration need not use standalone Stripe Checkout.


### Request 18 — confirmation page preview
- confirmation.html: branded mobile thank-you layout, session fields, payment status/reference placeholders, cancellation/weather policy, contact link.
- Clearly marked design preview. No URL parameter can mark a booking paid; no customer data handled. Noindex and excluded from sitemap.
- Real success state requires provider-verified paid booking; emails/calendar/provider return flow remain unimplemented pending selection and access.
