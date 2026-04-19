/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  BhummiVastu — Testimonials Data File
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  HOW TO ADD A GOOGLE REVIEW
 *  ──────────────────────────
 *  1. Open Google Maps / Google Business Profile for BhummiVastu.
 *  2. Find the review you want to import.
 *  3. Copy the following fields and paste them as a new entry in the
 *     `testimonials` array below, following the format shown.
 *
 *  REQUIRED FIELDS (copy exactly from Google)
 *  ───────────────────────────────────────────
 *  name       → Reviewer's display name on Google
 *  rating     → Star rating given (1–5)
 *  date       → Date of review  e.g. "March 2024"  or "April 2025"
 *  text       → Full review text (paste verbatim)
 *
 *  OPTIONAL FIELDS (fill in manually after copy-paste)
 *  ─────────────────────────────────────────────────────
 *  service    → Which service they used. Choose one of:
 *                 "Residential Vastu"
 *                 "Commercial Vastu"
 *                 "Industrial Vastu"
 *                 "Astro-Vastu (Homes)"
 *                 "Astro-Vastu (Commercial)"
 *                 "IT Career Astrology"
 *                 "Personal Life Astrology"
 *                 "Prashna Kundali"
 *  location   → City / area of the reviewer  e.g. "Whitefield, Bangalore"
 *  featured   → Set to `true` for top reviews to highlight on homepage
 *               (keep featured count to 3–5 at most)
 *  initials   → 1–2 letter avatar fallback. Auto-derived from name if omitted.
 *
 *  COPY-PASTE TEMPLATE (one review)
 *  ──────────────────────────────────
 *  {
 *    name:     '',          // Reviewer name from Google
 *    rating:   5,           // Stars: 1 | 2 | 3 | 4 | 5
 *    date:     '',          // e.g. 'March 2025'
 *    text:     '',          // Full review text
 *    service:  '',          // Optional — service used
 *    location: '',          // Optional — city/area
 *    featured: false,       // true = show on homepage
 *    initials: '',          // Optional — auto-generated if blank
 *  },
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface Testimonial {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  text: string;
  service?: string;
  location?: string;
  featured?: boolean;
  initials?: string;
}

/**
 * Paste Google Business reviews here.
 * Newest review first (reverse chronological).
 */
export const testimonials: Testimonial[] = [
  // ── EXAMPLE ENTRIES — replace with real Google reviews ──────────────────────
  {
    name: 'Priya Sharma',
    rating: 5,
    date: 'April 2025',
    text: 'Acharya Minu ji gave an incredibly detailed Vastu analysis of our new flat. She explained every zone clearly and the remedies were completely non-demolition — no walls broken, no renovation needed. Within a month of implementing the changes, we noticed a real shift in the energy of our home. Highly recommended!',
    service: 'Residential Vastu',
    location: 'Whitefield, Bangalore',
    featured: true,
  },
  {
    name: 'Rajesh Kumar',
    rating: 5,
    date: 'February 2025',
    text: 'We consulted Minu ji for our startup office before moving in. The seating arrangement, cabin placement, and cash counter direction she suggested made complete sense scientifically as well as from a Vastu perspective. Six months in, the team morale and business growth have both been noticeably better.',
    service: 'Commercial Vastu',
    location: 'HSR Layout, Bangalore',
    featured: true,
  },
  {
    name: 'Anita Mehta',
    rating: 5,
    date: 'January 2025',
    text: 'I took the Astro-Vastu Premium consultation for my home. Minu ji analysed my birth chart and cross-referenced it with the Vastu of our house — the insights were mind-blowing. The combination of both sciences gave a much deeper understanding of why certain areas of our life were stuck. The remedies have been transformational.',
    service: 'Astro-Vastu (Homes)',
    location: 'Indiranagar, Bangalore',
    featured: true,
  },
  {
    name: 'Suresh Nair',
    rating: 5,
    date: 'November 2024',
    text: 'Very professional and knowledgeable. Minu ji conducted the session online via Zoom and it was just as thorough as an in-person visit. She used Google Earth for directional mapping and her floor plan analysis was extremely detailed. The 30-day follow-up support is a great value-add.',
    service: 'Residential Vastu',
    location: 'Kochi, Kerala',
    featured: false,
  },
  {
    name: 'Deepa Krishnamurthy',
    rating: 5,
    date: 'October 2024',
    text: 'I consulted Minu ji for an IT career astrology session during a major career transition. Her birth chart analysis was accurate to an uncanny degree. The timing guidance she gave for accepting the new offer turned out to be exactly right. Will definitely consult again.',
    service: 'IT Career Astrology',
    location: 'Koramangala, Bangalore',
    featured: false,
  },
  {
    name: 'Vikram Singh',
    rating: 5,
    date: 'August 2024',
    text: 'We took the industrial Vastu consultation for our warehouse in Peenya. Minu ji identified the geopathic stress zones and gave very practical remedies. The staff has been more productive and we have had zero major equipment failures since the remedies were put in place.',
    service: 'Industrial Vastu',
    location: 'Peenya, Bangalore',
    featured: false,
  },
];

/**
 * Utility helpers — used by the testimonials page and homepage widget.
 */

/** Returns only featured testimonials, sorted by date (latest first). */
export const featuredTestimonials = testimonials.filter((t) => t.featured);

/** Total count of all testimonials in this file. */
export const totalReviews = testimonials.length;

/** Average rating (rounded to 1 decimal). */
export const averageRating =
  Math.round((testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length) * 10) / 10;

/** Get initials from a name string (max 2 characters). */
export function getInitials(name: string, override?: string): string {
  if (override) return override.slice(0, 2).toUpperCase();
  const parts = name.trim().split(' ');
  return parts.length >= 2 ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase() : name.slice(0, 2).toUpperCase();
}

/** Map rating to a Tailwind accent colour class. */
export function ratingColor(rating: number): string {
  if (rating >= 5) return 'text-amber-500';
  if (rating >= 4) return 'text-yellow-400';
  if (rating >= 3) return 'text-orange-400';
  return 'text-red-400';
}
