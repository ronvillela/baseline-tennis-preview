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


## Solicitud 4 Reservar y pagar en línea

### Lo que pediste

Elegir programa → elegir lugar → elegir fecha y hora → datos del jugador → pagar → recibir confirmación. La meta es: BOOK → PAY → DONE.

### Lo que ya está listo

- Los botones están preparados para conectar el sistema que elijas.
- Al elegir una clase, el formulario conserva la opción correcta.
- Por ahora, el cliente envía un correo. La página explica que todavía no hay pago ni reserva automática.
- El diseño de Baseline sigue igual. Los cambios están guardados, pero no publicados.

### Mi recomendación

Primero probar Setmore con Stripe. La página actual de Setmore ofrece un plan gratis con pagos por Stripe. Algunas páginas antiguas dicen otra cosa; confirmaremos las funciones al crear la cuenta. Setmore permite clases con cupos, útil para clínicas de cuatro jugadores.

Stripe cobra normalmente 2.9% + $0.30 por pago con tarjeta nacional de EE. UU. Ejemplo: una clase de $95 tiene una comisión aproximada de $3.06. Pueden aplicar otros cargos según la tarjeta o el servicio. Gratis significa sin mensualidad del plan básico, no sin comisión de tarjeta.

Si Setmore no maneja bien tus horarios y lugares, probar Acuity con Stripe. Acuity empieza en $20 al mes, o $16 al mes pagando un año. El plan con hasta seis calendarios cuesta $34 al mes, o $27 al mes pagando un año. Estos importes no incluyen las comisiones por pago ni impuestos aplicables.

No contrataría un plan anual antes de probar una reserva completa desde el celular. Para un solo entrenador que se mueve entre canchas, debemos evitar reservas al mismo tiempo y dejar tiempo para viajar. Setmore maneja sus ubicaciones separadas con cuentas distintas; hay que comprobar que esa organización te sirva.

### Lo que necesitamos de ti

1. ¿Tienes canchas y horarios garantizados, o debes confirmar la cancha después de cada solicitud?
2. ¿Qué lugares y horarios quieres ofrecer? ¿Cuánto tiempo necesitas entre clases para trasladarte?
3. ¿Ya tienes Stripe, Square u otro sistema de reservas?
4. Para semi-private, proponemos un pago de $85 por los dos jugadores. Para clínicas, cada jugador paga $42.50 y hay cuatro cupos. ¿Está bien?

### Lo que falta

Elegir el sistema, abrir o conectar la cuenta, configurar horarios y canchas, y probar pago y confirmación. También debemos probar que no haya doble reserva y que la clínica cierre al llegar a cuatro jugadores. El calendario del entrenador no garantiza por sí solo la disponibilidad de una cancha.

Estado: preparación técnica terminada; reservas y pagos en línea pendientes. No se ha creado ninguna cuenta, contratado ningún plan ni conectado pagos.

### English summary

Booking links are prepared and program selection is fixed. Live booking and payment are not active. Test Setmore + Stripe first for low cost; consider Acuity + Stripe if scheduling needs require it. Confirm court access, working hours, travel time and existing accounts before activation.

### Fuentes de precios y funciones

- Setmore: https://www.setmore.com/pricing
- Clases y cupos: https://www.setmore.com/features/class-booking
- Ubicaciones: https://www.setmore.com/features/multiple-locations
- Acuity: https://www.acuityscheduling.com/pricing
- Stripe: https://stripe.com/pricing

Confirmar precios y funciones al activar el servicio. En el PDF final, mostrar la pantalla móvil de reserva y mantener este paso marcado como pendiente hasta probar el proceso completo.
