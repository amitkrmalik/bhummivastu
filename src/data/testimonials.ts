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
 *  service    → Service(s) used. Single service OR multiple as an array.
 *               Single:   service: "Residential Vastu"
 *               Multiple: service: ["Residential Vastu", "IT Career Astrology"]
 *               Choose from:
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
 *  COPY-PASTE TEMPLATE (one review — single service)
 *  ──────────────────────────────────────────────────
 *  {
 *    name:     '',          // Reviewer name from Google
 *    rating:   5,           // Stars: 1 | 2 | 3 | 4 | 5
 *    date:     '',          // e.g. 'March 2025'
 *    text:     '',          // Full review text
 *    service:  '',          // Optional — one service
 *    location: '',          // Optional — city/area
 *    featured: false,       // true = show on homepage
 *    initials: '',          // Optional — auto-generated if blank
 *  },
 *
 *  COPY-PASTE TEMPLATE (one review — multiple services)
 *  ──────────────────────────────────────────────────────
 *  {
 *    name:     '',
 *    rating:   5,
 *    date:     '',
 *    text:     '',
 *    service:  ['Residential Vastu', 'IT Career Astrology'],  // array for multiple
 *    location: '',
 *    featured: false,
 *    initials: '',
 *  },
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface Testimonial {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  text: string;
  service?: string | string[];
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
    name: 'Preeti Avasthi',
    rating: 5,
    date: 'April 2025',
    text: 'Recently got a consultation from Minu Malik.  She is extremely  professional and provides a comfort to have an open discussion about concerns/ Placements at home. It was really great to learn so many aspect of  my sweet home 🏠. Her deep analysis on my floor plan and few corrective suggestions are a key take aways.The amount of time and honest advice  that she has provided are truly reason we should consult her for a generic home review🏠 !!Thanks !',
    service: 'Residential Vastu',
    location: 'Whitefield, Bangalore',
    featured: true,
  },
  {
    name: 'Snigdhaa Ritesh',
    rating: 5,
    date: 'April 2025',
    text: 'Acharya Minu Malik is very competent and have vast knowledge about the subject. Her consultation, guidance and personal touch is par excellence.',
    service: 'Residential Vastu',
    location: 'Lucknow, Uttar Pradesh',
    featured: true,
  },
  {
    name: 'Radha Goel',
    rating: 5,
    date: 'February 2025',
    text: 'I highly recommend Minu Mam for home vastu. She has in depth knowledge of vastu. The way she explained and answered all the queries with patience is commendable.i connected with her related to home vastu and she really helped me in understanding the vastu details of a house. I am fully satisfied with her and the trust level has made.thank you  Minu Mam for the great job.🙏',
    service: 'Residential Vastu',
    location: 'Whitefield, Bangalore',
    featured: true,
  },
  {
    name: 'Akash Sehgal',
    rating: 5,
    date: 'January 2025',
    text: 'We are truly grateful for the guidance and support extended by Minu Saini as our Vastu consultant. Her deep understanding of Vastu principles, combined with practical and effective remedies, has brought remarkable stability and positivity into our home.Since following the suggested changes, we have experienced noticeable improvements in various aspects of our lives — from enhanced focus and performance in education to professional growth, and increased financial stability. The shift in overall energy within the house has been genuinely uplifting. What sets Minu Saini apart from others is not just her knowledge but also her calm, solution-oriented approach and ability to explain things in a simple, actionable manner. Minu’s recommendations have truly worked for us and I value her support. We sincerely thank Minu for being an important part of our journey towards harmony, progress, and prosperity.',
    service: 'Astro-Vastu (Homes)',
    location: 'Whitefield, Bangalore',
    featured: true,
  },
  {
    name: 'Renu Singh',
    rating: 5,
    date: 'November 2024',
    text: `I had a truly wonderful experience with Minu and I’m so glad I chose her for Vastu consultation. Her deep knowledge and patient approach really stood out. She took the time to understand my needs, explained everything clearly, and provided practical, easy-to-implement suggestions without forcing any major changes. What I appreciated most was her balanced and thoughtful guidance. It wasn’t just about directions and placements—it felt like she genuinely cared about bringing peace and positive energy into our home. Since implementing her advice, I’ve noticed a shift in the overall atmosphere—more clarity and a general feeling of well-being. I highly recommend Minu to anyone seeking honest and effective Vastu guidance. A truly enriching experience!`,
    service: 'Residential Vastu',
    location: 'Whitefield, Bangalore',
    featured: false,
  },
  {
    name: 'Kushagra Gupta',
    rating: 5,
    date: 'October 2024',
    text: 'Great service!',
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

/** Normalise service to always be an array (handles string | string[] | undefined). */
export function serviceList(service?: string | string[]): string[] {
  if (!service) return [];
  return Array.isArray(service) ? service : [service];
}

/** Map rating to a Tailwind accent colour class. */
export function ratingColor(rating: number): string {
  if (rating >= 5) return 'text-amber-500';
  if (rating >= 4) return 'text-yellow-400';
  if (rating >= 3) return 'text-orange-400';
  return 'text-red-400';
}
