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


## SEO Cómo ayudamos a que encuentren Baseline en Google

SEO significa preparar la web para que Google entienda qué ofreces y pueda mostrarla a las personas que buscan clases de tenis.

### Lo que ya estamos haciendo

- El inicio dice claramente Private Tennis Lessons in Miami y menciona las zonas donde trabajas.
- Cada página tiene su propio título y una descripción del servicio. Revisamos las 12 páginas.
- Cada programa tiene una página propia: clases privadas, semi-private, clínicas, sparring, Tennis 101 y Tennis 201.
- Los enlaces del inicio describen el destino, por ejemplo Explore Private Lessons, en lugar de decir solamente Details.
- Los precios y duraciones actualizados coinciden entre las páginas relacionadas.
- El contenido principal está escrito en la página y puede leerse sin depender de un sistema de reservas externo.
- Revisamos primero la experiencia móvil: texto legible, navegación y botones fáciles de usar.
- Ya existe un mapa de las 11 páginas principales para buscadores. La página de error no está incluida.

### Lo que falta antes del lanzamiento

- Confirmar el dominio definitivo. Las direcciones para buscadores usan por ahora baselinetennis.com; todavía debemos confirmar que sea el dominio correcto.
- Activar la indexación solamente al publicar la versión final aprobada. La versión de prueba contiene instrucciones para no aparecer en buscadores; esto no funciona como una contraseña ni garantiza privacidad.
- Configurar Google Search Console y enviar el mapa del sitio con el dominio confirmado.
- Revisar los datos estructurados del negocio según los lugares reales donde trabajas. No agregaremos direcciones, reseñas ni credenciales inventadas.
- Si corresponde, crear o revisar Google Business Profile con tus datos reales y zonas de servicio. No presentar cada barrio como si fuera una sede propia.
- Cuando tengamos fotos y videos: usar archivos livianos, descripciones útiles y revisar la velocidad desde el celular.
- Medir visitas desde Google y reservas después del lanzamiento. Todavía no hemos medido resultados, posiciones en Google ni velocidad en condiciones reales.

La meta es que más personas adecuadas encuentren Baseline y puedan reservar. Nadie puede garantizar el primer lugar en Google.

### English summary

SEO is a standing priority. Current foundations include service-and-location copy, unique titles and descriptions, descriptive internal links, separate service pages, consistent rates, mobile-first review and a sitemap. Production indexing, Search Console, verified business details and media performance checks remain launch tasks. No ranking or traffic improvement is claimed yet.

Sources: https://developers.google.com/search/docs/fundamentals/seo-starter-guide ; https://developers.google.com/search/docs/crawling-indexing/block-indexing ; https://support.google.com/business/answer/3038177 .


## Solicitud 5 Elegir sesión después del hero

Esta solicitud confirma lo pedido en el punto 3. Ya está hecha: Choose Your Session aparece justo después del hero con los cuatro servicios, precios y botones. No duplicamos la sección.

## Solicitud 6 Reseñas y testimonios reales

### Lo que pediste

“PLAYERS LOVE BASELINE” con Google Reviews reales y testimonios para que los nuevos visitantes tengan más confianza antes de pagar.

### Lo que preparamos

Agregamos una sección después de los precios llamada Players Love Baseline, con el mismo diseño de la marca y adaptada al celular. Por ahora muestra claramente que las reseñas están pendientes. No inventamos testimonios, nombres, estrellas ni cantidad de reseñas.

### Lo que necesitamos de ti

- El enlace de Google Reviews de Baseline, si ya existe.
- Dos o tres testimonios reales que podamos mostrar, con el texto exacto y el nombre que el cliente permite publicar.
- Para testimonios enviados en privado, confirmar que el cliente autoriza publicarlos. No incluir datos personales innecesarios.

### Estado

Diseño preparado; contenido real pendiente. No hay integración automática con Google ni valoración verificada. Antes de publicar, reemplazar el aviso por testimonios reales aprobados, o retirar temporalmente esta sección. El título es una propuesta de diseño, no una medición de satisfacción.

En el PDF final, incluir una captura móvil y distinguir claramente entre diseño preparado y reseñas publicadas. Los puntos 7 y 8 llegaron vacíos; todavía no se han implementado.


## Solicitud 7 La propuesta de valor de Baseline

### Lo que pediste

“YOUR COURT. YOUR SCHEDULE. YOUR GAME.” con cuatro puntos: Private coaching, Small groups, Convenient Miami locations y All levels welcome. Comunicar comodidad y experiencia con poco texto.

### Lo que hicimos

Creamos una sección azul con el título en tres líneas y los cuatro puntos exactos. Reemplaza la pequeña franja de beneficios anterior, después de la sección de reseñas y antes de los programas. Así mantenemos la página clara, sin repetir otra franja. Los precios siguen directamente después del hero.

### Estado

Implementado en la versión local y revisado en vista móvil. El estilo, los colores y las letras de Baseline se conservan. La frase comunica la propuesta de la marca; no significa que cualquier cancha u horario esté disponible. La disponibilidad real sigue pendiente de configurar en el sistema de reservas.

Para el PDF final: incluir una captura móvil con el título y los cuatro beneficios juntos. Solicitud 8 todavía pendiente de recibir.


## Solicitud 8 Miami como enfoque principal de SEO

### Lo que pediste

Dar prioridad a Miami sobre South Florida. Enfocar la web en clases privadas, entrenador de tenis y clases de tenis en Miami, Brickell, Coconut Grove, Coral Gables, Key Biscayne y South Miami.

### Lo que hicimos

- Revisamos la versión actual: ya no tenía menciones de South Florida en las páginas del sitio.
- Reforzamos Miami en los títulos principales de clases privadas, semi-private, clínicas, sparring y reservas.
- La página del entrenador ahora dice Your Tennis Coach in Miami y su título de búsqueda identifica a Vittorio Zecca.
- El inicio mantiene Private Tennis Lessons in Miami y su título de búsqueda dice Tennis Lessons in Miami.
- La sección de zonas destaca las cinco áreas solicitadas con enlaces claros para reservar o conocer las clases privadas. Conservamos las otras zonas atendidas como información secundaria.
- No creamos páginas repetidas por barrio ni direcciones de canchas sin confirmar. Cada página mantiene su título y descripción propios.

### Estado

Implementado en la versión local. Revisado en móvil y comprobados los títulos y enlaces. Es preparación para SEO; no significa que ya estemos apareciendo en Google ni garantiza posiciones. La indexación de la versión final sigue pendiente de la aprobación de lanzamiento.

Para el PDF final: captura de la sección móvil Tennis Lessons Across Miami, mostrando las cinco zonas prioritarias.


## Solicitud 9 Correo de la marca

### Lo que pediste

Cambiar el Gmail personal por info@baselinetennis.com para que la comunicación del sitio use la marca Baseline.

### Lo que hicimos

Actualizamos el correo visible, los enlaces Email del pie de página y del menú móvil, el destino del formulario que prepara correos y los datos del negocio para buscadores. El cambio se aplica a todas las páginas.

### Estado

Implementado localmente y revisado en la vista móvil. Falta confirmar que info@baselinetennis.com exista y pueda recibir mensajes antes de publicar. Cambiar la web no crea la casilla de correo. No enviamos mensajes de prueba ni modificamos el proveedor de correo.

Para el PDF final: captura de la página de contacto con el correo de Baseline.


## Solicitud 10 Botón fijo para reservar en el celular

### Lo que pediste

Un botón BOOK NOW siempre visible abajo de la pantalla. Call o Text como opciones secundarias. Reservar debe ser la acción principal.

### Lo que hicimos

La barra inferior ahora dedica la mitad de su ancho a BOOK NOW, en azul. Call y Text ocupan espacios más pequeños a su lado. Quitamos Email de esta barra para mantener el foco; el correo sigue en Contact y en el pie de página.

Aplicamos el cambio a las 12 páginas, incluidas todas las páginas de programas y servicios. La barra sigue fija al desplazarse y deja espacio para la zona inferior de los teléfonos compatibles. En pantallas grandes se mantiene la navegación de escritorio.

### Estado

Implementado localmente y revisado en móvil. BOOK NOW abre la página de opciones de sesión; las reservas y pagos automáticos siguen pendientes del proveedor. Guardado de forma reversible, sin publicar.

Para el PDF final: captura móvil con BOOK NOW como botón principal y Call/Text como secundarios. El texto PROGRAM / SERVICE PAGES parece ser el encabezado del siguiente grupo de instrucciones; todavía no contiene una solicitud adicional.


## Solicitud 11 Precio y reserva al inicio de cada programa

### Lo que pediste

Mostrar primero nombre, precio, duración, cantidad de jugadores, zonas y BOOK NOW en Private, Semi-Private, Clinics, Tennis 101 y Tennis 201. Dejar los beneficios y explicaciones debajo.

### Lo que hicimos

Las cinco páginas ahora empiezan con un resumen claro y un botón grande BOOK NOW. Conservamos el diseño de Baseline y movimos la introducción debajo. Private muestra $95, 60 minutos y 1 jugador. Semi-Private muestra $85 total ($42.50 por jugador), 60 minutos y 2 jugadores. Clinics muestra $42.50 por jugador, 60 minutos y hasta 4 jugadores. Las cinco zonas principales de Miami aparecen arriba; cancha y horario se confirman con el coach.

### Falta confirmar

Tennis 101 conserva la duración publicada de 4–6 semanas y Tennis 201 la de 6 semanas. No encontramos precios, duración de cada clase ni cantidad de jugadores confirmados para estos programas. Mostramos esos datos como pendientes, sin inventar precios ni aplicar tarifas de otros servicios. Necesitamos los datos del coach para finalizar estas dos ofertas.

### Estado

Preparado localmente, con revisión móvil y enlaces de reserva por programa comprobados. Los botones usan la conexión preparada en la solicitud 4; los pagos automáticos todavía no están activos. Cambios reversibles, sin publicar. Cada página conserva un solo título principal y texto accesible para buscadores; añadimos Miami al título visible de Tennis 101 y 201.

English summary: All five service pages now lead with purchase essentials and a program-specific Book Now button. Tennis 101/201 pricing, session length and player limits still need coach confirmation.

Para el PDF final: captura móvil del resumen de Private y de Tennis 101/201 una vez confirmados los datos pendientes.


## Solicitud 12 CTAs simples y consistentes

### Lo que pediste

Simplificar las llamadas a la acción a BOOK NOW, VIEW AVAILABILITY y, como opción secundaria, ASK A QUESTION.

### Lo que hicimos

Unificamos los botones de reserva de todas las páginas, encabezados, pies y programas con BOOK NOW. Los enlaces mantienen el programa seleccionado. La tarjeta de clínicas del inicio ahora dice VIEW AVAILABILITY y lleva a Upcoming Clinics, donde se explica que el calendario sigue pendiente. ASK A QUESTION se mantiene como opción secundaria de contacto.

Conservamos el orden original del coach: Private, Semi-Private, Group Clinics y Sparring. Los enlaces informativos (por ejemplo View Rates y los nombres del menú) conservan etiquetas que describen su destino. El botón final del formulario sigue diciendo Prepare Email Request porque actualmente prepara un correo; no confirma ni cobra una reserva.

### Estado

Implementado localmente y revisado en móvil. No hay disponibilidad en tiempo real ni pago activo hasta conectar el proveedor. Guardado de forma reversible, sin publicar.

English summary: Booking CTAs now use Book Now throughout. The homepage clinic CTA uses View Availability and leads to the pending clinic schedule. Ask a Question remains the secondary contact action. Original session order retained.

Para el PDF final: captura móvil de Choose Your Session y del botón de reserva de un programa.
