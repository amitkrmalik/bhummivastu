# BhummiVastu — Vastu & Astrology Consultancy Website

Official website for **Vastu Acharya Minu Saini**, a certified Vastu Shastra and Vedic Astrology consultant based in Bangalore, India.

🌐 **Soft launch:** [https://amitkrmalik.github.io/bhummivastu](https://amitkrmalik.github.io/bhummivastu)

---

## About the Project

BhummiVastu is a conversion-optimised consultancy website targeting clients across Bangalore, Karnataka, and India. Built on [Astro 5](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/) (AstroWind template), customised end-to-end for a Vastu and Astrology practice.

**Consultant:** Vastu Acharya Minu Saini
**Location:** Pruksa Silvana, Budigere Cross, Off Old Madras Road, Bangalore East – 560049
**Contact:** minusaini@bhummivastu.com | +91-99727 09328
**Social:** [Facebook](https://www.facebook.com/BhummiVastu) · [Instagram](https://www.instagram.com/bhummivastu)

---

## Services Covered

| Service                                        | Price                 |
| ---------------------------------------------- | --------------------- |
| Non-Demolition Vastu for Homes                 | ₹5,000 / ₹20 per SFT  |
| Astro-Vastu for Homes (Premium)                | ₹10,000 / ₹30 per SFT |
| Vastu for Offices & Startups                   | ₹10,000 / ₹50 per SFT |
| Vastu for Factories & Warehouses               | ₹10,000 / ₹50 per SFT |
| Astro-Vastu for Offices & Industrial (Premium) | ₹25,000 / ₹50 per SFT |
| Astrology for IT Careers & Business            | ₹5,000 (1 hr)         |
| Astrology for Personal Life & Relationships    | ₹5,000 (1 hr)         |
| Prashna Kundali / Horary Astrology             | ₹1,000 (10 min)       |

All consultations include **30 days of follow-up Q&A support**.

---

## Tech Stack

- **Framework:** [Astro 5](https://astro.build/) — static site generation
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Tabler Icons](https://tabler-icons.io/) via astro-icon
- **Analytics:** Google Analytics 4 (GA4 `G-CPTPG0B5LN`) via Partytown
- **SEO:** Sitemap, Open Graph, LocalBusiness JSON-LD schema, robots.txt
- **Hosting:** GitHub Pages → `https://amitkrmalik.github.io/bhummivastu`
- **CI/CD:** GitHub Actions (auto-deploy on push to `main`)

---

## Pages

| Route                               | Description                               |
| ----------------------------------- | ----------------------------------------- |
| `/`                                 | Homepage — hero, services, about, process |
| `/about`                            | Consultant bio, credentials, approach     |
| `/services`                         | Services overview                         |
| `/pricing`                          | Full pricing with all 8 services          |
| `/contact`                          | Contact form + WhatsApp                   |
| `/certifications`                   | Awards & certifications (awaiting data)   |
| `/social`                           | Social media highlights                   |
| `/services/residential-vastu`       | Home Vastu page                           |
| `/services/commercial-vastu`        | Office & startup Vastu page               |
| `/services/industrial-vastu`        | Factory & warehouse Vastu page            |
| `/services/astro-vastu`             | Astro-Vastu for Homes page                |
| `/services/astro-vastu-commercial`  | Astro-Vastu for Offices & Industrial page |
| `/services/it-career-astrology`     | Astrology for IT & Business page          |
| `/services/personal-life-astrology` | Astrology for Personal Life page          |
| `/services/prashna-kundali`         | Prashna Kundali / Horary Astrology page   |
| `/blog`                             | Blog listing                              |
| `/terms`                            | Terms & Conditions                        |
| `/privacy`                          | Privacy Policy                            |

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server — http://localhost:4321/bhummivastu
npm run dev

# Type check
npm run check

# Production build → dist/
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

The site auto-deploys to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`.

**Manual trigger:** GitHub → Actions tab → "Deploy to GitHub Pages" → Run workflow

### Going Live on www.bhummivastu.com

When ready to switch from the soft launch to the production domain:

1. In `astro.config.ts`: set `site: 'https://www.bhummivastu.com'`, remove the `base` line
2. In `src/config.yaml`: set `site: 'https://www.bhummivastu.com'`, set `base: '/'`
3. Create `public/CNAME` containing `www.bhummivastu.com`
4. Run `npm run build`, commit, and push
5. In GitHub → Settings → Pages → Custom domain: enter `www.bhummivastu.com`
6. Point DNS: `CNAME www → amitkrmalik.github.io`

---

## Project Structure

```
src/
├── pages/
│   ├── index.astro           # Homepage
│   ├── about.astro
│   ├── contact.astro
│   ├── services.astro
│   ├── pricing.astro
│   ├── certifications.astro
│   ├── social.astro
│   ├── services/             # Individual service pages (8 total)
│   └── [...blog]/            # Blog routes
├── components/
│   └── widgets/
│       ├── ServiceCards.astro # Homepage service cards
│       └── ...
├── data/post/                 # Blog posts (.md)
├── layouts/
│   └── Layout.astro           # Base layout (JSON-LD, WhatsApp button)
├── config.yaml                # Site-wide config, GA4, SEO
└── navigation.ts              # Header nav + footer links
```

---

## Pending / Roadmap

- [ ] Real consultant photo (replace placeholder hero image)
- [ ] Client testimonials section on homepage
- [ ] Certifications & awards data (page is ready, awaiting content)
- [ ] YouTube channel URL
- [ ] Additional Vastu/Astrology blog posts (SEO — targeting Bangalore searches)
- [ ] Local SEO landing pages (Indiranagar, Whitefield, Koramangala)
- [ ] Switch to production domain `www.bhummivastu.com`

---

## License

Site content and brand © 2025 Minu Saini / BhummiVastu. All rights reserved.
Template based on [AstroWind](https://github.com/arthelokyo/astrowind) (MIT licence).
