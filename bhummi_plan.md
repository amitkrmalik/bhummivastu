# BhummiVastu Landing Page Transformation Plan

## Overview
This plan details the transformation of the current landing page into an effective introduction and conversion page for a Vastu and astrology consultant. The plan is broken into actionable sprints, with requirements, content needs, and clear TODO/TBD markers for missing information or assets.

---

## Deviation Review (as of April 12, 2026)

### What is DONE ✅
| Sprint | Status | Notes |
|--------|--------|-------|
| Sprint 1 — Hero Section | Partially done | Title, subtitle, CTAs updated. **Still missing: actual consultant photo, credentials/certifications.** Placeholder image `hero-image.png` in use. |
| Sprint 2 — Navigation | Done | `navigation.ts` fully rebuilt with two-level dropdowns, Book Now CTA, and BhummiVastu footer. |
| Sprint 3 — Service Cards | Done | `ServiceCards.astro` created, old 9-item grid replaced. All 6 cards link to stub pages. Prices are `TBD`. |
| Sprint 6 (stub) — Service Pages | Stub only | All 6 pages under `src/pages/services/` created. Content, process steps, images, testimonials, and pricing are all TBD placeholders. |

### What is NOT yet done ❌
| Section | Current state in `index.astro` | Required state |
|---------|-------------------------------|----------------|
| Note / Mission Statement | Generic "Simplicity, Best Practices..." text | BhummiVastu mission statement |
| Features widget | Generic AstroWind features list | Remove entirely (replaced by ServiceCards) |
| Content blocks (×3) | Generic AstroWind lorem-ipsum content | Remove / replace with consultant bio + About section |
| Steps widget | Generic "Download → Add content → Customize" | Replace with "How a consultation works" process steps |
| Features2 widget | "Most used widgets" template content | Replace with Core Values/Principles |
| BlogLatestPosts | Generic AstroWind blog intro | Replace with Vastu/Astrology blog intro (or remove if no blog yet) |
| FAQs | Generic AstroWind FAQs | Replace with real Vastu & Astrology FAQs |
| Stats | Generic download/star counts | Replace with real social proof stats (clients served, years experience, etc.) |
| Testimonials | Not present at all | Add `Testimonials.astro` with real client quotes |
| CallToAction | Links to GitHub / generic text | Replace with "Book a Consultation" CTA |
| Contact page | Exists but untouched | Update with consultant's phone, email, address, WhatsApp link |
| Footer | Now updated ✅ | Social links still `#` placeholders (TBD) |

---

## Section Sprints & Requirements

### ⚠️ Sprint 1: Consultant Introduction (Hero Section) — PARTIAL
- **Goal:** Present the consultant's name, credentials, welcoming message, and photo prominently.
- **Done:** Title, subtitle copy, trust badges, and both CTAs implemented.
- **Still needed:**
  - **TBD: Consultant photo** — Replace `src/assets/images/hero-image.png` with a professional headshot or on-location photo of Vastu Acharya Minu Malik. Ideal size: 1024×576px or square 800×800px.
  - **TBD: Credentials line** — Add a short credentials badge under the title, e.g. _"Certified Vastu Acharya · 15+ years experience · Bangalore"_
  - **TBD: Tagline** — Consider adding a short sanskrit or brand tagline as the `tagline` prop on `Hero.astro` (e.g. _"यत्र नारी तत्र रमन्ते  · Where harmony lives"_)
- **Implementation:**
  - Update `image` prop in Hero in `src/pages/index.astro`
  - Add `tagline` prop to Hero once confirmed
  - Add credentials inside the subtitle Fragment or as a new `<p>` after the title Fragment

---

### ✅ Sprint 2: Navigation Menu Redesign (Two-Click Rule) — COMPLETED
- **Goal:** Reorganise the header navigation so any visitor can reach their service in two clicks. Use a clean, two-level dropdown structure with a prominent Book Now CTA button.
- **Menu Structure:**
  ```
  Vastu Services ▾
    ├─ Residential Vastu (Homes / Flats)
    ├─ Commercial Vastu (Offices / Startups)
    └─ Industrial Vastu (Factories / Warehouses)
  Astrology ▾
    ├─ IT Career & Business Growth
    └─ Personal Life & Relationships
  Astro-Vastu (Premium)
  About
  Blog
  [ Book Now ] ← high-contrast CTA button
  ```
- **Requirements:**
  - Dropdown menus on hover/click for Vastu Services and Astrology
  - Dedicated landing page stubs for each sub-service (can be placeholder pages for now)
  - "Book Now" button uses `variant: 'primary'` style with high contrast colour
  - Mobile hamburger menu must preserve the same hierarchy
- **TBD:**
  - [ ] Confirm final set of sub-pages to create
  - [ ] Agree on highlight colour for "Book Now" CTA button
  - [ ] Create stub pages for each sub-service (URLs TBD)
- **Implementation:**
  - Update `src/navigation.ts` with new menu items and dropdowns
  - Update `src/components/widgets/Header.astro` if custom dropdown styling is needed
  - Create stub pages under `src/pages/services/` (e.g., `residential-vastu.astro`, `commercial-vastu.astro`, `industrial-vastu.astro`, `it-career-astrology.astro`, `personal-life-astrology.astro`, `astro-vastu.astro`)

---

### ✅ Sprint 3: Service Cards on Landing Page — COMPLETED
- **Goal:** Replace the current expertise grid with a polished grid of "Service Cards" that show icon, benefit title, starting price, and a "View Details" link for each service.
- **Card Structure (per card):**
  - **Icon** — Tabler icon or custom SVG representing the service
  - **Benefit Title** — Short, outcome-focused label (e.g., _"Non-Demolition Vastu for Flats"_)
  - **Starting Price** — e.g., _"Starting from ₹5,000"_ (TBD per service)
  - **"View Details" link** — Routes to the dedicated sub-page
- **Services & Cards:**

  | Service | Icon (suggestion) | Benefit Title | Starting Price | Sub-page URL |
  |---|---|---|---|---|
  | Residential Vastu | `tabler:home` | Non-Demolition Vastu for Homes & Flats | TBD | `/services/residential-vastu` |
  | Commercial Vastu | `tabler:building-store` | Vastu for Offices & Startups | TBD | `/services/commercial-vastu` |
  | Industrial Vastu | `tabler:building-factory` | Vastu for Factories & Warehouses | TBD | `/services/industrial-vastu` |
  | IT Career & Growth | `tabler:device-laptop` | Astrology for IT Careers & Business | TBD | `/services/it-career-astrology` |
  | Personal & Relationships | `tabler:heart` | Astrology for Life & Relationships | TBD | `/services/personal-life-astrology` |
  | Astro-Vastu Premium | `tabler:stars` | Science of Space meets Power of Stars | TBD | `/services/astro-vastu` |

- **TBD:**
  - [ ] Confirm starting prices for each service
  - [ ] Confirm final benefit titles with consultant
  - [ ] Confirm icon choices or supply custom SVGs
  - [ ] Create sub-pages (stubs acceptable for launch)
- **Implementation:**
  - Replace the current `<div class="grid ..." >` expertise grid in `index.astro` with a new `ServiceCards` section
  - Use `src/components/widgets/Features.astro` (adapted) or create a new `ServiceCards.astro` component in `src/components/widgets/`
  - Each card should be a `<a href>` wrapper so the whole card is clickable

---

### ✅ Sprint 4: Mission Statement + "About the Consultant" Bio Section — COMPLETED
- **Mission section:** `Mission.astro` created — Purusha Sūkta shloka, translation, and Vastu/Astrology bridge. Live in `index.astro`.
- **About section:** `AboutConsultant.astro` created with SEO-optimised bio, credentials list, and dual CTAs. Live in `index.astro` after Mission.
- **All generic AstroWind template blocks removed** from `index.astro` (Features, 3×Content, Steps, Features2, BlogLatestPosts, generic FAQs, generic Stats, generic CallToAction).
- **TBD still needed:**
  - [ ] Replace hero placeholder image with actual consultant professional photo (update `src` in `AboutConsultant.astro` and Hero)
  - [ ] Confirm certifying body for "Certified Vastu Acharya" credential bullet
  - [ ] Optionally add a name badge overlay on the photo (code already scaffolded, commented out)
- **Goal:** (a) Replace the generic Note widget with BhummiVastu's mission, and (b) add a dedicated About/Bio section that introduces the consultant personally — building trust and SEO authority.
- **Section A — Mission Note:**
  - Component: `Note.astro` (already in `index.astro`, just needs content update)
  - Content needed:
    - `title`: Short label e.g. _"Our Mission"_ or _"Philosophy"_
    - `description`: 1–2 sentence mission statement
    - **TBD example (confirm/replace):** _"To bring harmony, health, and prosperity to every home and business in Bangalore through authentic, science-backed Vastu and Vedic Astrology — without demolition and without disruption."_
- **Section B — About the Consultant (Content widget):**
  - Component: use `Content.astro` (already imported) with `isReversed` layout
  - Place immediately after the Note / Mission
  - Content needed:
    - **Photo:** Professional photo of Vastu Acharya Minu Malik (TBD — can reuse hero image initially)
    - **Heading:** _"Meet Vastu Acharya Minu Malik"_
    - **Paragraphs (TBD — draft below, confirm with consultant):**
      - Para 1: Background and journey into Vastu & Astrology
      - Para 2: Qualifications, certifications, years of practice
      - Para 3: Approach and what makes her consultations different
    - **Bullet items for the Content widget:**
      - `tabler:certificate` — Certified Vastu Acharya (TBD: certifying body)
      - `tabler:calendar` — X+ years of practice (TBD: number)
      - `tabler:map-pin` — Based in Bangalore, serving PAN India via online
      - `tabler:users` — 100+ satisfied families and businesses
  - **TBD:**
    - [ ] Write 3-paragraph bio copy
    - [ ] Confirm certifying body and years of experience
    - [ ] Provide professional photo  - **Note:** Sri Vidya references have been removed from copy and component. Advanced training is described generically as "traditional Vedic and spiritual disciplines".- **Implementation in `index.astro`:**
  1. Update `<Note>` props: change `title` and `description`
  2. Replace the first `<Content isReversed>` block (currently "AstroWind's Blueprint") with the About section
  3. Remove the two remaining generic `<Content>` blocks that follow it

---

### Sprint 5: Core Principles/Values + "How a Consultation Works" Steps
- **Goal:** (a) Replace the generic `Features2` block with BhummiVastu's core values ✅, and (b) replace the generic Steps widget with a clear consultation process — reducing friction for first-time visitors.

#### ✅ Section A — Core Values (`Features2.astro`) — COMPLETED
- **Confirmed values (implemented in `index.astro`):**

  | Value | Icon | Value Statement |
  |-------|------|----------------|
  | Scientific Logic | `tabler:atom` | Solutions based on energy principles & spatial geometry — the "how" and "why" explained |
  | Zero-Demolition Practicality | `tabler:home-check` | Non-disruptive corrections using colours, elements, and precise placements — no demolition |
  | Ethical Integrity | `tabler:shield-check` | No fear-based selling; honest, transparent guidance — only what is necessary |
  | Client-Centric Empathy | `tabler:heart-handshake` | Deeply personalised solutions tailored to career, health, and relationship goals |
  | Empowerment Through Knowledge | `tabler:book-open` | Educate clients to maintain harmony independently — empowerment, not dependency |

- **Old plan values superseded:** Authenticity → Ethical Integrity · Personalisation → Client-Centric Empathy · Non-Demolition First → Zero-Demolition Practicality · Accessible Wisdom → Empowerment Through Knowledge · Measurable Results → Scientific Logic · Confidentiality → absorbed into Ethical Integrity.
- **Background:** Warm amber tint (`bg-amber-50/60`) for visual contrast with surrounding sections.
- **TBD:** [ ] Confirm final value descriptions with consultant before launch
- **Section B — How a Consultation Works (`Steps.astro`):**
  - Component: `Steps.astro` (already imported)
  - Replace generic "Download → Customize" steps with:
    1. `tabler:message` — **Share Your Details** — Fill in a short inquiry form with your name, contact, service type, and any specific concerns.
    2. `tabler:calendar-event` — **Schedule a Session** — Pick a convenient slot for an in-person site visit (Bangalore) or an online video call.
    3. `tabler:chart-dots` — **Deep Analysis** — Vastu Acharya Minu Malik analyses your floor plan / birth chart and prepares a personalised report.
    4. `tabler:file-text` — **Receive Your Report** — Get a detailed written report with actionable Vastu / Astrology recommendations and remedies.
    5. `tabler:refresh` — **Follow-Up Support** — A complimentary follow-up call to track progress and answer questions.
  - `title`: _"Your Journey to Harmony — 5 Simple Steps"_
  - `image`: TBD — can use a warm consultation/office photo. Placeholder: Unsplash photo of a serene interior.
  #### ✅ Section B — How a Consultation Works (`Steps.astro`) — COMPLETED
- **Title:** _"Your Journey to Harmony — 5 Simple Steps"_
- **5 steps implemented (confirmed icons, all validated against tabler icon set):**

  | Step | Icon | Title | Key Content |
  |------|------|-------|-------------|
  | 1 | `tabler:message-share` | Discovery & Data Sharing | Floor plan + birth details → unique energy blueprint |
  | 2 | `tabler:compass` | Technical Survey & Directional Mapping | Google Earth / on-site · identifies Vastu Doshas |
  | 3 | `tabler:binary-tree` | 16-Zone Zonal Analysis | 16 directions · 45 energy fields · cross-ref with Dashas |
  | 4 | `tabler:video` | Live Consultation & Written Report | PDF report + video/in-person explanation of zero-demolition remedies |
  | 5 | `tabler:refresh` | Implementation & Follow-Up Support | Complimentary follow-up · tracks measurable shifts |

- **Image:** Unsplash placeholder (consultant analysing floor plan). **TBD:** Replace with actual photo of Minu ji at work or reviewing a floor plan.
- **SEO keywords woven in:** _16-Zone Zonal Analysis_, _Vastu Doshas_, _zero-demolition remedy_, _Astro-Vastu_, _Bangalore_, _directional mapping_, _non-demolition_
- **Note:** `tabler:video-conf` does not exist in the icon set — replaced with `tabler:video` (validated).

### ✅ Sprint 5: Core Principles/Values + "How a Consultation Works" Steps — COMPLETED

---

### ✅ Sprint 6: Individual Service Detail Pages (Content Fill) — COMPLETED
- **Goal:** Fill the 6 stub pages under `src/pages/services/` with real content. ✅
- **All 6 pages completed with:**
  - `Content.astro` block: 3-paragraph description with SEO keywords woven in naturally
  - `Steps.astro` block: 4–5 service-specific process steps (adapted from global process)
  - 6 key benefits as `items[]` in the Content widget (all icons validated against tabler set)
  - Unsplash placeholder images (TBD: replace with real photos)
  - `CallToAction` with dual actions: "Book a Consultation" + "Explore Other Services" → `/#services`
  - Internal link back to home services section on every page
- **SEO implemented per page:**
  - `title` tags: `[Service] in Bangalore | Vastu Acharya Minu Malik — BhummiVastu` pattern
  - `description`: 120–160 chars, includes service keyword + Bangalore + consultant name
  - Internal links to `/#services` on every page
- **Keywords targeted (woven naturally into copy):**
  - Residential: `vastu shastra for home bangalore`, `flat vastu consultant`, `non-demolition vastu`, `vastu doshas`, `16-zone`, `vastu corrections`
  - Commercial: `office vastu bangalore`, `startup vastu consultant`, `commercial vastu`, `zero-demolition`
  - Industrial: `factory vastu`, `warehouse vastu consultant bangalore`, `industrial vastu shastra`
  - IT Astrology: `astrology for it professionals bangalore`, `career astrology`, `janma kundali`, `dasha`, `muhurta`
  - Personal: `marriage astrology bangalore`, `kundali milan`, `personal life astrology`, `vedic astrology`, `navamsa`
  - Astro-Vastu: `astro-vastu consultant bangalore`, `vedic astrology vastu`, `jyotish`, `integrated vastu astrology`
- **TBD still needed:**
  - [ ] Real photos — replace Unsplash placeholders with actual BhummiVastu photos
  - [ ] Pricing — add "Starting from ₹X,XXX" once confirmed with consultant
  - [ ] Real client testimonials — add inline testimonial quotes per service (Sprint 7)
  - [ ] Schema markup — LocalBusiness + Service JSON-LD for SEO (future sprint)

---

### Sprint 7: Testimonials + Social Proof Stats
- **Goal:** Build immediate trust with real client feedback and impressive numbers — this is the most conversion-critical section after the Hero.
- **Section A — Testimonials (`Testimonials.astro`):**
  - Place after Service Cards and before FAQs in `index.astro`
  - Component props:
    - `tagline="Client Stories"`
    - `title="Real Results. Real Families. Real Businesses."`
    - `subtitle="Trusted by 100+ clients across Bangalore and nearby regions."`
  - Testimonial structure (per item):
    ```
    title: Short headline (e.g. "Life changed after Vastu correction")
    testimonial: 2-4 sentence quote in first person
    name: Client first name + last initial (e.g. "Priya R.")
    job: Location or context (e.g. "Homeowner, Whitefield, Bangalore")
    image: { src, alt } — optional; use a generic avatar as placeholder
    ```
  - **Need minimum 3 testimonials. Suggested categories:**
    - 1 × Residential Vastu success story
    - 1 × Business / office Vastu story
    - 1 × Astrology (career or personal) story
  - **TBD:**
    - [ ] Collect 3–5 real testimonials from clients (written consent recommended)
    - [ ] Obtain or create placeholder avatar images
    - [ ] Confirm client names / anonymisation preference
  - **Placeholder testimonials (replace before launch):**
    ```
    1. title: "Our new home feels completely different"
       testimonial: "We were struggling with constant arguments and health issues in our flat. After Minu ji's Vastu consultation, she suggested simple changes — no demolition at all. Within three months, the atmosphere was calmer and my husband got a promotion. I highly recommend her to every family in Bangalore."
       name: "Ananya S."
       job: "Homeowner, Koramangala, Bangalore"

    2. title: "My startup finally took off"
       testimonial: "I had been running my office for two years with poor results. After a Commercial Vastu consultation, we rearranged our desks and entrance. The very next quarter we closed our biggest client ever. This experience completely changed my view on Vastu."
       name: "Rahul M."
       job: "Startup Founder, HSR Layout, Bangalore"

    3. title: "Astrology gave me clarity on my career move"
       testimonial: "I was confused about switching from my job to freelancing. Minu ji's astrology reading was so precise — she told me the exact window to make the transition. I trusted it, and it worked out beautifully. Best investment I made in my career."
       name: "Divya K."
       job: "IT Professional, Whitefield, Bangalore"
    ```
- **Section B — Stats (`Stats.astro`):**
  - Place just after Testimonials
  - Replace generic GitHub stats with real social proof:
    ```
    { title: 'Happy Clients', amount: '100+' }   // TBD: confirm actual number
    { title: 'Years of Practice', amount: '15+' } // TBD: confirm
    { title: 'Cities Served', amount: '20+' }     // TBD: confirm (Bangalore + nearby)
    { title: 'Services Offered', amount: '6' }
    ```
  - **TBD:** [ ] Confirm actual numbers with consultant before publishing

---

### Sprint 8: FAQs
- **Goal:** Answer the most common objections and questions — reduces bounce rate and improves SEO through long-tail keyword coverage.
- **Component:** `FAQs.astro` (already in `index.astro` — just needs content replacement)
- **Props:** `tagline="FAQs"`, `title="Frequently Asked Questions"`, `subtitle="Everything you need to know before booking a consultation."`
- **Recommended questions (8 total — confirm/edit with consultant):**
  1. **What is Vastu Shastra?** — Brief explanation: ancient Indian science of spatial arrangement; directional energies and five elements.
  2. **Do I need to break walls or renovate for Vastu corrections?** — Key objection; answer: no, 90%+ of corrections are non-demolition (colours, placement, mirrors, plants, salt bowls).
  3. **Is Vastu only for Hindus?** — Clarify it's a universal spatial science, not religion-specific.
  4. **How is Astro-Vastu different from regular Vastu?** — Explains premium service; birth chart influences optimal space layout.
  5. **Do you offer online consultations?** — Yes; floor plan / photos via WhatsApp or Google Meet; serving PAN India.
  6. **How long does it take to see results?** — Typical timeline: 30–90 days for subtle energetic shifts; major changes faster.
  7. **What information do I need to provide?** — For Vastu: floor plan, compass bearing, plot direction. For Astrology: exact birth date, time, and place.
  8. **What is your consultation fee?** — Link to contact/pricing page; note pricing is on request for custom consultations.
- **SEO note:** FAQ answers should be 2–4 sentences each, written naturally. Google may feature these in rich snippets.
- **TBD:** [ ] Review and confirm all answers with consultant before publishing
- **Implementation:** Replace all existing FAQ items array in `index.astro` `<FAQs>` widget

---

### Sprint 9: Contact/Booking Section + Final CTA
- **Goal:** Make booking frictionless — the page must end with a clear, compelling action path.
- **Section A — Final CTA Banner (`CallToAction.astro`):**
  - Replace current generic "Get template" CTA at the bottom of `index.astro`
  - Props:
    - `title`: _"Ready to Transform Your Space and Life?"_
    - `subtitle`: _"Join 100+ happy families and businesses across Bangalore. Book your personalised consultation today."_
    - Action: `{ variant: 'primary', text: 'Book Consultation', href: '/contact', icon: 'tabler:calendar-event' }`
  - Background: consider a subtle warm background (bg slot with amber/saffron tint) to stand out visually
- **Section B — Contact Page (`src/pages/contact.astro`):**
  - Currently an untouched template page — needs full update
  - **Contact details needed (TBD):**
    - [ ] Phone number (WhatsApp preferred — add `tabler:brand-whatsapp` icon link)
    - [ ] Email address
    - [ ] Physical address / area in Bangalore (for local SEO)
    - [ ] Consultation hours (e.g. Mon–Sat, 10am–7pm)
  - **Form fields required:**
    - Full Name (required)
    - Phone / WhatsApp number (required)
    - Email address (optional)
    - Service of interest: dropdown (`Residential Vastu` / `Commercial Vastu` / `Industrial Vastu` / `IT Career Astrology` / `Personal Astrology` / `Astro-Vastu Premium`)
    - Preferred consultation mode: `In-Person (Bangalore)` / `Online`
    - Message / specific concern (textarea)
    - Submit button: _"Send My Inquiry"_
  - **Form backend (TBD):** Choose one — Netlify Forms (free, built-in), Formspree, or a custom endpoint
  - **WhatsApp Quick Button:** Add a floating WhatsApp button on all pages linking to `https://wa.me/<number>?text=Hi, I'd like to book a Vastu/Astrology consultation` (TBD: add number)
- **TBD:**
  - [ ] Confirm all contact details with consultant
  - [ ] Choose form submission backend (Netlify Forms recommended)
  - [ ] Add WhatsApp number for quick-contact button

---

### Sprint 10: Footer + Blog Setup
- **Goal:** Finalise the footer with real links, and decide on blog strategy — blog content is one of the strongest local SEO levers for a consultant.
- **Section A — Footer (already partially done in Sprint 2, needs TBD items):**
  - **TBD:**
    - [ ] Add Instagram URL (replace `#`)
    - [ ] Add Facebook URL (replace `#`)
    - [ ] Add YouTube URL if applicable (replace `#`)
    - [ ] Confirm Google Business Profile and add link if applicable
  - Footer structure is correct — no code changes needed beyond social links
- **Section B — Blog (`BlogLatestPosts.astro`):**
  - Currently shows generic AstroWind blog intro — update or remove
  - **If blog is planned:** Update `BlogLatestPosts` with:
    - `title`: _"Vastu & Astrology Insights"_
    - `information`: _"Practical tips, seasonal guidance, and case studies to bring harmony to your home and clarity to your life."_
    - **Suggested first blog post topics (TBD — write after launch):**
      1. _"5 Non-Demolition Vastu Tips for Your Bangalore Flat"_ (targets high-volume local keyword)
      2. _"What Your Main Door Direction Means — Vastu Guide for Homeowners"_
      3. _"Astrology Muhurta: The Best Time to Start a New Business in 2026"_
      4. _"How Astro-Vastu Helped a Koramangala Startup Triple Revenue"_ (case study)
  - **If no blog for now:** Remove `<BlogLatestPosts>` from `index.astro` to avoid empty/template content
  - **TBD:** [ ] Decide blog strategy · [ ] Write first 2 posts before launch for SEO traction

---

## Page Section Order (Final Design)
The final `index.astro` page should follow this order:
1. `Hero` — Consultant intro, photo, credentials, CTAs
2. `ServiceCards` — 6 service cards with links ✅
3. `Note` — Mission statement
4. `Content (About)` — Consultant bio with photo
5. `Steps` — How a consultation works (5 steps)
6. `Features2` — Core values (6 values)
7. `Testimonials` — 3–5 client stories
8. `Stats` — Social proof numbers
9. `FAQs` — 8 questions
10. `BlogLatestPosts` — (optional; keep or remove)
11. `CallToAction` — Final booking CTA

---

## General Notes
- All TBD sections are marked with comments in code for easy future updates.
- Use placeholder images/text where real content is not yet available.
- Ensure all sections are mobile-friendly and visually consistent.
- Document any new components or widgets created for future agents.
- **SEO priorities:** Every page should have a unique `<title>` and `<meta description>`. Use location keywords (Bangalore, Whitefield, Koramangala, HSR Layout) naturally in headings and body. Add `schema.org/LocalBusiness` structured data once content is finalised.
- **WhatsApp CTA:** A floating WhatsApp button is a high-conversion element for Indian audiences — prioritise adding it in Sprint 9.
- **Performance:** All images must use the existing `Image.astro` component for automatic optimisation. No raw `<img>` tags.
