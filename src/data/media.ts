/**
 * BhummiVastu Media Library
 *
 * HOW TO ADD / EDIT MEDIA
 * 1. Duplicate an existing object below.
 * 2. Update the title, summary, and URL.
 * 3. Set `featured: true` for the best 3–6 items you want highlighted first.
 *
 * FIELD ORDER
 * - title      : Visitor-facing title shown on the card
 * - platform   : Facebook | Instagram | YouTube | Other
 * - type       : Reel | Video | Post | Interview | Talk | Short
 * - url        : Full public URL to the original media
 * - summary    : 1–2 line explanation of what the media is about
 * - published  : Optional display label, e.g. "April 2025"
 * - featured   : true to highlight it near the top of the page
 *
 * TEMPLATE
 * {
 *   title: 'Add media title here',
 *   platform: 'Facebook',
 *   type: 'Reel',
 *   url: 'https://www.facebook.com/reel/0000000000000000',
 *   summary: 'Add a short description of what viewers will learn or see.',
 *   published: '',
 *   featured: false,
 * },
 */

export interface MediaItem {
  title: string;
  platform: 'Facebook' | 'Instagram' | 'YouTube' | 'Other';
  type: 'Reel' | 'Video' | 'Post' | 'Interview' | 'Talk' | 'Short';
  url: string;
  summary: string;
  published?: string;
  featured?: boolean;
}

export const mediaItems: MediaItem[] = [
  {
    title: 'Facebook Reel — Update title',
    platform: 'Facebook',
    type: 'Reel',
    url: 'https://www.facebook.com/reel/1638325130651200',
    summary:
      'Replace this with a short line about what this reel covers so visitors know why it matters before they click.',
    published: '',
    featured: true,
  },
  {
    title: 'Facebook Reel — Update title',
    platform: 'Facebook',
    type: 'Reel',
    url: 'https://www.facebook.com/reel/1554778962289569',
    summary: 'Replace this with a short line about the core message, tip, or consultation insight shared in this reel.',
    published: '',
    featured: true,
  },
  {
    title: 'Facebook Post / Share — Update title',
    platform: 'Facebook',
    type: 'Post',
    url: 'https://www.facebook.com/share/p/1AUWazDja5/',
    summary: 'Replace this with a short summary of the post content, event, or learning visitors should expect.',
    published: '',
    featured: false,
  },
];

export const featuredMedia = mediaItems.filter((item) => item.featured);
