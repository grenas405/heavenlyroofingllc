## [2026-03-11] - Dark Red + Black Rebrand + Anime.js UI Upgrade

### Color Scheme
- Restored dark red + black brand identity: near-black backgrounds (`#0a0505`, `#120808`), crimson accent (`#c0392b`), brand deep red (`#8b0000`)
- All navy/amber values replaced with dark red and warm near-black equivalents

### CSS Visual Effects (8 additions)
- **Atmospheric hero glow:** Crimson radial gradients (`rgba(139, 0, 0, 0.55)`) replace navy; storm clouds changed to dark red wisps
- **Custom scrollbar:** Red gradient thumb on dark track (Webkit + Firefox)
- **Button shine sweep:** White shimmer slides across `.btn-primary` on hover; added red glow box-shadow; text changed to `#fff` for accessibility
- **Red glow card hover:** All cards (service, stat, testimonial) emit dark red box-shadow on hover
- **Gradient border on service cards:** `::after` pseudo-element with crimson→deep-red gradient border, fades in on hover
- **Section label accent line:** 32px red underline via `::after` on `.section-label`
- **Form refinements:** Red-tinted placeholders, red focus glow, red select arrow, red-tinted disclaimer text
- **Initial hidden states:** `.trust-item`, `.service-card`, `.stat-card`, `.testimonial-card` set to `opacity: 0` for Anime.js

### Anime.js v3.2.2 (6 animations)
- **Hero entrance timeline:** Badge → word-by-word title → subtitle → dual CTAs with staggered `easeOutExpo` timing
- **Trust bar sequential slide-in:** Items enter from left on IntersectionObserver trigger
- **Service cards spring entrance:** `spring(1, 80, 12, 0)` easing for organic overshoot feel
- **Stat counter:** `100%` counts up from 0 when stats section enters viewport
- **Magnetic button:** `.btn-primary` elements pull toward cursor (`x*0.18, y*0.18`), elastic snap on leave
- **Testimonial rotateX entrance:** Subtle 3D perspective tilt-in with stagger

### Technical
- Added Anime.js CDN script tag before module script in `index.html`
- Hero title words wrapped in `<span class="word">` for word-by-word animation
- Stat numbers get `data-target`/`data-suffix` attributes for counter animation
- CSS `.anime-ready` gate suppresses CSS fallback hero animations when JS is active
- `will-change: transform` on `.btn`, transition scoped to `box-shadow, background` (Anime.js owns `transform`)

---

## [2026-03-11] - Professional Redesign: Trust, Engagement & Credibility Overhaul

### Visual Rebranding
- **New Color Palette:** Replaced aggressive black/red with a professional deep navy + amber/gold scheme (`#1e3a5f` primary, `#f59e0b` accent). Conveys trust, stability, and quality.
- **Typography:** Added Inter font (Google Fonts) for a clean, modern, professional look.
- **Buttons:** Replaced blocky uppercase buttons with refined inline-flex buttons with icon support and subtle hover lift effects.
- **Cards:** Updated to navy-dark surface with amber accent borders and hover animations.

### New Sections Added
- **Trust Bar:** Immediately below hero — Licensed & Insured, Fully Bonded, Same-Day Response, 5-Star Rated, Free Inspections.
- **Stats Section:** 4-column grid showcasing 100% Satisfaction, 24/7 Emergency, OKC Local, $0 Inspection.
- **Testimonials Section:** 3 realistic customer reviews with star ratings and author avatars.
- **Contact Form:** Full estimate request form (name, phone, address, service selector, message) with UX feedback on submit.
- **Multi-column Footer:** Brand column, quick links, and contact details.

### Content Improvements
- **Hero:** New badge pill, updated headline ("Your Roof. Done Right."), cleaner subtitle, dual CTA (estimate + phone).
- **Services:** Expanded to 4 services with real inline SVGs; improved copy; highlight badges per card.
- **About:** Redesigned with profile card, avatar, badges, and pull quote; cleaner narrative copy.
- **Language:** Replaced warrior/battle framing ("Forge Your Shield," "Battle-Tested") with professional, customer-focused messaging.

### Bug Fixes & JS Improvements
- **Fixed header scroll handler:** Was incorrectly setting `background: #fff` on a dark-themed site. Now uses CSS class toggle (`.scrolled`) with correct dark colors.
- **Mobile nav:** Added hamburger button with toggle for mobile viewports.
- **Scroll reveal:** Applied `reveal`/`visible` CSS class pattern via IntersectionObserver for service cards, stats, testimonials, and contact methods.
- **Contact form feedback:** Submit button shows "Request Sent!" with green color for 4 seconds, then resets.

---

## [2026-03-11] - Rebranding and Storytelling Update

### Visual Rebranding
- **Stormy Theme:** Transitioned the color palette to Dark Red (`#8b0000`) and Black (`#0a0a0a`) for a high-contrast, industrial, and battle-tested aesthetic.
- **Improved Typography:** Implemented heavy, uppercase headings to communicate strength and durability.
- **UI Refresh:** Shifted to blocky, industrial-style buttons and cards, removing the previous soft rounded corners for a tougher look.

### Enhanced Animations
- **Oklahoma Storm Motion:** Added a subtle "Lightning Flash" effect to the Hero section to represent Oklahoma's powerful weather.
- **Pulsing Glow:** Replaced the spinning sunbeams with a pulsing red atmospheric glow.
- **Storm Clouds:** Updated cloud visuals to be darker, blurrier, and slower-moving, creating a more dramatic backdrop.

### Content & Local Context
- **Personal Story:** Added a new "The Man Behind the Shield" section detailing Roberto C. Rodriguez's local roots.
  - Highlighted his graduation from **Southeast High School**.
  - Mentioned his professional background at **Mathis Brothers Furniture Call Center**.
  - Emphasized his commitment to the South OKC community.
- **OKC Branding:** Integrated localized messaging ("OKC Proud," "Battle-Tested," "Class 4 Impact Resistance") to appeal to Oklahoma homeowners concerned about storm damage.
- **Call-to-Action:** Enhanced the contact section with a clear phone-first approach.
