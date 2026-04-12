# BhummiVastu Landing Page Transformation Plan

## Overview
This plan details the transformation of the current landing page into an effective introduction and conversion page for a Vastu and astrology consultant. The plan is broken into actionable sprints, with requirements, content needs, and clear TODO/TBD markers for missing information or assets.

---

## Section Sprints & Requirements

### Sprint 1: Consultant Introduction (Hero Section)
- **Goal:** Present the consultant’s name, credentials, welcoming message, and photo prominently.
- **Requirements:**
  - Consultant’s full name and title [Vastu Acharya Minu Malik]
  - Short, impactful welcome message [Transform your home, office, and life with authentic Vastu and Astrology consulting in Bangalore.]
  - Credentials/certifications (TBD if not available)
  - High-quality consultant photo (TBD if not available)
  - Main call-to-action (e.g., Book Consultation)
- **TBD:**
  - [ ] Insert actual consultant photo (replace placeholder)
  - [ ] Finalize credentials and welcome message
- **Implementation:**
  - Update `Hero.astro` usage in `index.astro`
  - Add/replace image in `src/assets/images/`

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

### Sprint 4: Mission Statement
- **Goal:** Clearly state the consultant’s mission and philosophy.
- **Requirements:**
  - 1-2 sentence mission statement (TBD if not available)
- **TBD:**
  - [ ] Draft and insert mission statement
- **Implementation:**
  - Use `Note.astro` or a custom section in `index.astro`

---

### Sprint 5: Core Principles/Values
- **Goal:** Communicate the core values or guiding principles.
- **Requirements:**
  - 3-6 core values (e.g., authenticity, client focus, confidentiality)
  - Short description for each value (TBD if not available)
- **TBD:**
  - [ ] Gather and finalize list of values and descriptions
- **Implementation:**
  - Use `Features2.astro` or create `Values.astro` widget

---

### Sprint 6: Individual Service Detail Pages
- **Goal:** Each service listed in the Service Cards grid gets its own dedicated page with full description, process, benefits, and a booking CTA.
- **Per-page Requirements:**
  - H1 heading with service name + location keyword (e.g., _"Residential Vastu Consultant in Bangalore"_)
  - 3-5 paragraphs describing the service, approach, and benefits
  - Process / How-It-Works steps (3-5 steps)
  - Relevant images or illustrations (TBD)
  - Social proof snippet (1-2 testimonials relevant to that service)
  - "Book Consultation" CTA at top and bottom of page
- **TBD:**
  - [ ] Write content for each sub-page
  - [ ] Source relevant images per service
  - [ ] Confirm process steps with consultant
- **Implementation:**
  - Create pages under `src/pages/services/` using `PageLayout.astro`
  - Use `Steps.astro` for process, `Content.astro` for description, `CallToAction.astro` at end

---

### Sprint 7: Testimonials
- **Goal:** Build trust with real client feedback.
- **Requirements:**
  - 2-5 client testimonials (TBD if not available)
  - Client names and (optional) photos (TBD if not available)
- **TBD:**
  - [ ] Collect and insert testimonials
  - [ ] Add/replace client photos
- **Implementation:**
  - Use `Testimonials.astro` in `index.astro`

---

### Sprint 8: FAQs
- **Goal:** Address common questions and concerns.
- **Requirements:**
  - 5-8 frequently asked questions and answers (TBD if not available)
- **TBD:**
  - [ ] Draft and insert FAQ content
- **Implementation:**
  - Use `FAQs.astro` in `index.astro`

---

### Sprint 9: Contact/Booking Section
- **Goal:** Make it easy for visitors to reach out or book a consultation.
- **Requirements:**
  - Contact form fields (name, email, message, etc.)
  - Booking CTA/button
  - Contact details (phone, email, address) (TBD if not available)
- **TBD:**
  - [ ] Confirm contact details
- **Implementation:**
  - Use `Contact.astro` and/or `CallToAction.astro` in `index.astro`

---

### Sprint 10: Footer
- **Goal:** Provide standard site info and navigation.
- **Requirements:**
  - Copyright
  - Social links (TBD if not available)
  - Navigation links
- **TBD:**
  - [ ] Add social links
- **Implementation:**
  - Use `Footer.astro` in `index.astro`

---

## General Notes
- All TBD sections should be clearly marked in the code with comments for easy future updates.
- Use placeholder images/text where real content is not yet available.
- Ensure all sections are mobile-friendly and visually consistent.
- Document any new components or widgets created for future agents.
