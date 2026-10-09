## Local code-quality checkpoint — October 9, 2026

Reviewed fetched GitHub main `822cecc`. Local cleanup consolidates repeated CSS/navigation, removes unused legacy code, improves FAQ accessibility connections and extends validation checks. Tests and scoped mobile/tablet/desktop browser checks pass; see `docs/CODE-REVIEW.md`. **These cleanup changes have not been uploaded to GitHub.** Await release approval. Acuity/Stripe setup is still the next business milestone, followed by booking/payment testing and then customer profiles.

## Resume here — October 4, 2026 end-of-day checkpoint

- Latest published website commit: `822cecc` (Baseline logo sharing preview), following `26eac9c` (rounded navigation and action buttons). GitHub Pages deployment and live sharing image were verified.
- The user is waiting for the coach to create the **Acuity and Stripe accounts**. No account connection or live booking/payment setup has been completed yet.
- Next, once account access is available: configure and connect scheduling and payments, then test the complete guest journey: program → location → available date/time and player capacity → player information → payment → confirmation.
- Validate availability and capacity rules, successful/failed payments, customer and coach notifications, session date/time/location, and approved cancellation/weather terms before treating booking as ready. Obtain any still-missing coach decisions; do not invent policies or availability.
- **Only after booking and payment pass testing**, proceed with customer account profiles. Confirm the provider’s supported profile features before implementation.
- Continue local-first changes and review; obtain approval before the next website publication. GitHub Pages remains temporary hosting; GoDaddy migration is later.
- The coach PDF still needs refreshed screenshots before being presented as the latest report.

## Link preview update — October 4, 2026

Added explicit Open Graph and Twitter sharing metadata to all 13 pages. Shared links now request the blue Baseline logo on cream (`assets/social/baseline-link-preview.png`, 1200 × 630), rather than letting apps select a lesson photo. Existing messages may retain cached thumbnails. Absolute sharing URLs use GitHub Pages and must be updated during the production-domain migration.

## Current checkpoint — October 4, 2026 release

The user explicitly approved uploading the current work to GitHub and documenting it. This checkpoint supersedes prior local-only notes for the modernization batch below.

- Approved release: rounded floating header and hamburger across all 13 pages; centered menu links; homepage section shortcuts integrated into the menu; subtle tennis-ball color and decorative seams on the hamburger; hover/press feedback with reduced-motion support.
- Shared rounded action buttons, symmetric button groups and floating mobile Book Now / Call / Text bar across all pages. Homepage lesson cards have rounded corners and consistent button widths.
- Removed the separate homepage On this page row and its Book Now button. Desktop uses a two-column hamburger panel; phone menu scrolls when needed.
- Validation: all-page static checks, booking tests, mobile/desktop menu interactions, narrow-phone overflow and reduced-motion checks. Corrected focus timing after section navigation.
- Booking planning: use an existing scheduling/payment provider rather than build the entire system. Acuity + Stripe is the leading candidate, not a finalized coach decision. No provider account, paid subscription, live scheduling, payment connection, chat system or account-creation system has been created.
- Next: confirm provider/trial choice with the coach; obtain exact courts, availability, travel buffers, group rules and final policies. A labelled local prototype can be prepared once requested. Booking should work for guests; optional customer accounts come later.
- Preview stays on GitHub Pages with indexing disabled. GoDaddy migration remains pending. Future edits require separate release approval.
- Repository documentation is current for this batch; the previously exported coach PDF still needs updated labelled screenshots before being sent as the latest report.

## Session checkpoint — October 2, 2026 (end of day)

The user reviewed the result and approved it: “looks good.” Resume from this state tomorrow.

- Published GitHub main revision: `243ec8493d56c7880fffbd233ca2819a5975291e` (documentation and checks), following visual revision `290491f`.
- Live preview: https://ronvillela.github.io/baseline-tennis-preview/?release=243ec84
- Today’s approved visual changes are published: centered coach introduction/actions and statistics layout; balanced Miami locations; removed the photo section’s Train With Vittorio button; simplified Programs & Packages to Tennis 101, Tennis 201 and the lesson package; centered Why Tennis benefits and closing actions.
- README, upload instructions, docs/CODE-REVIEW.md and scripts/check-site.py are published. All 13 pages passed the documented static checks; booking tests passed; GitHub Pages build succeeded.
- The local browser was still showing http://127.0.0.1:8771/site/index.html?closing=centered#why-tennis. Distinguish that local preview from the published site when resuming.
- Coach PDF has NOT been refreshed with today’s visual changes. Update it with labelled screenshots before sending it as the latest report.
- Pending: coach’s scheduling/payment provider decision, actual availability and checkout integration, verified confirmations/emails/calendar links, final policies, Tennis 101/201 details, genuine reviews and supported coaching statistics. Do not invent these.
- GitHub Pages remains temporary hosting with indexing disabled. Production/GoDaddy migration remains a later approved step.
- Continue preserving Club Modern design and mobile/desktop symmetry. Explain proposed changes before editing; keep future changes local until the user approves publishing that batch.
- No next design task was selected. Resume by reviewing this checkpoint and asking what the user wants to tackle next. No reminder or automatic work was requested.

## Approved homepage refinements — October 2, 2026

User approved publishing this batch to the temporary GitHub Pages site.
- Centered coach introduction, actions and pending statistics layout.
- Balanced Miami location cards and supporting content on mobile and desktop.
- Removed the Train With Vittorio button from the court photo section.
- Simplified Programs & Packages to Tennis 101, Tennis 201 and the lesson package; individual lessons remain in Lessons & Rates.
- Centered Why Tennis benefits, closing message and actions with responsive columns.
- Added a stylesheet version to refresh the updated styling in returning browsers.
- Existing coach PDF has not been regenerated for this refinement batch. Payment, scheduling and final business decisions remain pending.

# Baseline Tennis development checkpoint

## Mobile cleanup review — October 2, 2026

- User approved publishing this batch to GitHub on October 2. Includes hero CTA removal, centered responsive cards, reordered sections/dropdown, hidden pending reviews, integrated package card and Explore links on session cards.

- Homepage regrouped: hero → sessions/programs/packages → locations → coach → hidden reviews → photos/video → value/support/Why Tennis. Dropdown follows the five visible groups. Reviews retained hidden until real testimonials arrive.
- Current session order approved by Ron: Private → Semi-Private → Sparring → Group Clinics (supersedes original coach ordering). Centered cards, section styling and dropdown are local pending final upload approval.

- This batch is approved for GitHub upload. Future changes still require approval before publication.
- Removed the homepage hero Book Now and View Rates buttons at user request. Header, sticky mobile booking bar and session buttons remain available.
- Review preview: http://127.0.0.1:8770/index.html (440px phone frame).

## Latest handoff — ready for Vittorio’s review

- User approved GitHub upload. Published commit `cd377c5c41486766a642d226ab373171881035bd` to `origin/main`; GitHub Pages build returned `built`, no error. Live gallery verified (seven photos).
- Temporary live site: https://ronvillela.github.io/baseline-tennis-preview/
- Final coach review PDF: `../output/pdf/Baseline-Revision-del-Coach.pdf` (31 pages, Spanish, requests 1–23, labeled screenshots, supplemental media, pending decisions and GoDaddy plan). Shared with user for emailing; no email was sent by the assistant.
- Running source notes: COACH-CHANGE-LOG.md. Image evidence: docs/coach-images/. PDF builder: ../tmp/pdfs/build_report.py.
- Current work is ready for coach feedback. Next step: incorporate Vittorio’s feedback and confirmed policies/program details; choose scheduling/payment provider, connect Stripe and test the complete booking → payment → confirmation flow.
- Pending: real reviews, verified experience/player statistics, approval of personal bio, final Tennis 101/201 details, final policies (no-show, fees, refunds, package expiry, junior waiver), court availability/travel buffers and email delivery verification.
- Booking by email was explicitly removed. Program buttons retain selection and lead to honest booking placeholders until provider activation. Confirmation page remains a clearly labeled design preview; no payments or bookings are processed.
- Real portrait, action photos, seven-photo gallery and short playable video are included. Preserve Club Modern styling, mobile-first review, reversible changes, and the coach’s original session order.
- GitHub is temporary review hosting. After scheduling/payment decisions and final testing, prepare move to the coach’s GoDaddy account. Final domain/hosting details and production SEO/indexing still need confirmation.
- This upload was authorized; future pushes/publication still require user approval. Existing local recovery branch and bundle remain available.


Reviewed September 30, 2026 (America/New_York).

## Source of truth and approval boundary

- Repository: https://github.com/ronvillela/baseline-tennis-preview
- Live preview: https://ronvillela.github.io/baseline-tennis-preview/
- Inspected main commit: 46351e1c987560474db2a37e310eb6ed44107601, July 27, 2026.
- Preserve the user-approved Club Modern design: electric blue, cream, charcoal, Playfair Display headings, DM Sans body, current logos and layout.
- Do not push, merge, deploy, or publish without explicit user approval. Work locally and provide a reviewable preview first.
- The initial inspection changed no website implementation. Subsequent approved local changes are recorded below.


## Launch gate — request 23
Do not publish until coach approves final policy decisions (24-hour window, late/no-show charges, weather handling, court/reservation fees and payer, refunds, package expiry, junior consent), real booking/payment/confirmation flow is tested, and unfinished content is replaced or hidden. Never remove inactive-payment warnings merely to imply readiness. Existing policy wording remains a draft, not newly approved terms. Full decision list and conversion readiness are in COACH-CHANGE-LOG.md request 23.

## Current booking behavior — supersedes earlier email fallback notes
Email booking is removed. All program CTAs default to booking.html?program=KEY#booking-pending; selection is displayed as text, no reservation/payment is created. HTTPS provider links still activate per program. General contact email remains. Removed contact request form and unused inline handlers. Audit: 13 pages, local links/anchors, IDs/H1, JSON and JS syntax passed; routing tests and desktop browser check passed.

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


### Request 19 — authentic trust evidence
- Home: Meet Your Coach after reviews, with portrait/action-photo placeholders and pending years/unique-player figures; link to About.
- Repository assets contain no real coach photos. No synthetic photos, testimonials, stars or numbers added.
- Need approved imagery, publication consent, real review source, coaching-start date and unique-player records. Replace or hide pending blocks before launch.


### Request 20 — homepage coach introduction
- Existing coach section now identifies Vittorio Zecca as Founder & Head Coach, Baseline Tennis.
- Concise bio covers adults/juniors, beginner–advanced, private/semi-private/clinics/hitting/sparring, technique/movement/strategy/match play.
- Train With Vittorio → booking options. Real imagery still pending; no duplicate coach section.


### Request 21 — full coach profile
- Expanded about.html: identity, first-person intro/philosophy draft, background placeholder, four coaching pillars, audiences/services, value proposition, photo placeholders, Ready to Train CTAs.
- Coach must approve personal voice and supply factual biography/credentials/photos. No invented background or numbers.
- View Availability currently points to honest pending booking page; provider activation pending. Existing About URL/title retained.


### Request 22 — booking trust messages
- Compact trust block before booking choices: Stripe and instant confirmation clearly Coming soon; reschedule at least 24h ahead via coach, rain/unsafe weather rescheduled.
- FAQ/policies link included. No insurance, automatic refund or live payment claims. Provider checkout placement pending integration.


### Why Tennis supplied campaign artwork
- Adapted supplied four-panel messaging into final homepage Why Tennis section, replacing generic closing CTA; blue/white with existing display typography.
- Live HTML text, responsive columns, no large raster assets. Heart slogan adapted to You get moving. Booking/contact actions retained; price-first order unchanged.


### Real coach photos received
- Supplied IMG_0180.jpeg → assets/photos/vittorio-portrait.jpeg; IMG_7014.jpg → assets/photos/vittorio-on-court.jpg.
- Home and About photo placeholders replaced; original source files untouched, website copies preserved without image alterations. CSS cropping, lazy loading and descriptive alt text added.
- Prior photo-pending notes superseded; actual student/lesson imagery, reviews and verified credentials still not supplied.


### Seven-photo court gallery and supplied video
- All seven supplied IMG_66xx/65xx JPEGs added as oriented/resized WebP derivatives; originals untouched.
- Shared court-gallery.css for Home/About gallery. Horizontal scroll-snap, keyboard-focusable gallery, descriptive alt, lazy images.
- IMG_6632.MOV is ~2.418s AVC clip; native playback verified to end, readyState 4. Manual controls, playsinline, preload none, poster. Video displayed uncropped; no autoplay.
