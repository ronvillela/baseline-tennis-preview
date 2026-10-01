# Baseline Tennis Coach Request Review

This running review connects Coach Vittorio's requests with the changes made to the Baseline Tennis website. The changes below are saved in the local preview and have not been published. The final email-ready PDF will include mobile screenshots demonstrating each completed item.

## Overall objective

Coach's request: “no solamente se vea premium, sino que esté diseñado principalmente para CONVERTIR visitantes en clientes que reserven y paguen.”

Desired journey: discover Baseline → understand the offering → trust the coach → see pricing → see availability → book → pay → receive confirmation.

Progress: the booking language and homepage explanation have been updated. Live availability, payments, and automatic confirmation still require a booking provider. They are not represented as completed by these design changes.

## Request 1 Make booking the main action

### What the coach requested

“Quiero cambiar el CTA principal de: ‘Request a Lesson’ a algo mucho más directo como: BOOK A LESSON o BOOK NOW.”

“La acción principal en prácticamente todo el website debería ser reservar, no pedir información.”

### What changed

- Homepage main and closing buttons now say BOOK A LESSON.
- Shared desktop header and footer booking links use Book a Lesson.
- Booking choices use direct wording such as Book a Private Lesson, Book a Sparring Session, and Book a Clinic.
- Compact mobile controls retain the short label Book.
- The approved colors, typography, and scrolling navigation remain intact.

The version inspected before this request already used Book a Session on the homepage and Book Online in the header. Those were standardized; Request wording was also present in the booking choices and was updated. This distinction preserves an accurate before-and-after record.

### Status and demonstration

Implemented in the local preview. Homepage visually reviewed; wording changes saved in version history.

Final PDF evidence: mobile homepage showing BOOK A LESSON, and booking-page choices showing the new action labels. Capture fresh screenshots from the final reviewed version before export.

Remaining dependency: the buttons currently lead through the existing booking/contact fallback. The site still explains that live scheduling and payment are pending. The contact form accurately retains Prepare Email Request.

## Request 2 Explain the service location and player levels immediately

### What the coach requested

“Quiero que el hero explique inmediatamente qué ofrece Baseline y dónde.”

Requested wording:

PRIVATE TENNIS LESSONS IN MIAMI

Personalized coaching for beginners, intermediate and advanced players.

Brickell • Coconut Grove • Coral Gables • Key Biscayne • South Miami

The visitor should immediately understand the offering, service area, intended players, and how to book.

### What changed

- Replaced Build a Better Game, One Clear Step at a Time with Private Tennis Lessons in Miami.
- Added the requested beginner, intermediate, and advanced player description.
- Added all five requested neighborhoods directly below the description.
- Positioned BOOK A LESSON below this information, with View Rates as the secondary action.
- Retained the Ages 3+ information and approved brand styling.

### Status and demonstration

Implemented and visually checked at phone width in the local preview. The headline, player description, neighborhood list, and booking action are visible together in the reviewed mobile hero.

Final PDF evidence: one mobile hero screenshot with annotations identifying what, where, who, and booking action. Capture from the final reviewed version before export.

## Additional approved usability improvement

Before the coach's numbered requests, Ron approved a persistent homepage bar linking to Programs, Rates, Locations, and Book. It supports quick navigation while retaining the existing mobile Book, Call, Text, and Email controls. This is a separately approved improvement, not a numbered coach request.

## Remaining requests and final delivery

Request 3 was subsequently supplied and implemented below. Request 4 has not yet been supplied.

Continue this record as each request arrives. For each item, preserve the original wording, describe the actual change, record verification, and identify any pending dependency. Do not mark local implementation as published or treat a button label as proof of completed booking functionality.

When the coach's requirements are complete, produce an email-ready PDF with the requests, concise English explanations, and current mobile screenshots. Mark any outstanding work and publication status explicitly. Supply the PDF for Ron to email; do not send it automatically.


## Request 3 Show prices directly on the homepage

### What the coach requested

“MOSTRAR LOS PRECIOS DIRECTAMENTE EN EL HOME” and “No quiero que alguien tenga que entrar en varias páginas para descubrir cuánto cuesta una clase.”

Directly after the hero: CHOOSE YOUR SESSION with Private Lesson (1 player, 60 minutes, $95, Book Now), Semi-Private (2 players, 60 minutes, $85 total, $42.50/player, Book Now), Group Clinics (up to 4 players, 60 minutes, $42.50/player, View Clinics), and Sparring / Hitting Session (60 minutes, $120, Book Now).

### What changed

Moved session pricing from below the program overview to directly after the hero. Created the four requested cards in the requested order with prominent prices and full-width mobile buttons. Private, semi-private and sparring buttons lead to the booking page; View Clinics leads to the clinic page. Existing lesson packages remain unchanged farther down the homepage.

Updated the semi-private rate from $90 total/$45 per player to $85 total/$42.50 per player, and clinics from $45/90 minutes to $42.50/60 minutes. Updated corresponding detail pages, booking choices, homepage summaries, and relevant search metadata to avoid conflicting prices.

### Status and demonstration

Implemented locally. All four options and prices verified in the mobile page structure. Final PDF evidence: mobile pricing cards showing player count, duration, price and action. Actual scheduling and payment still await provider integration.


## Online booking and payment request awaiting provider decision

Coach's desired flow: Choose Program → Choose Location → Choose Date / Time → Enter Player Information → Pay → Confirmation. Replace the request, waiting, messaging and separate-payment process with BOOK → PAY → DONE.

Status: researched, not implemented. Stripe processes payments; a scheduling system must manage availability, capacity and confirmations. Current candidates are Setmore with Stripe for a low-cost pilot and Acuity with Stripe as a paid alternative. Setmore's current pricing page lists free Stripe integration, although older FAQ material differs; verify account entitlements during setup. Court availability and cross-location coach scheduling must be resolved before enabling automatic paid confirmation. No account, subscription or payment connection has been created.

Sources for provider selection: https://www.setmore.com/pricing ; https://www.setmore.com/features/class-booking ; https://www.setmore.com/features/multiple-locations ; https://www.acuityscheduling.com/pricing ; https://stripe.com/pricing . Recheck rates at activation. Final report should keep this request marked pending until booking, capacity, payment and confirmation have been tested end to end.
