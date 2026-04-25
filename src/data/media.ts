/**
 * BhummiVastu Media Library
 *
 * HOW TO ADD / EDIT MEDIA
 * 1. Duplicate an existing object below.
 * 2. Update the title, summary, and URL.
 * 3. Set `featured: true` for the best 3–6 items you want highlighted first.
 * 4. If a Facebook post/reel does not embed correctly, add `embedUrl`
 *    using the official Facebook embed URL and the page will use it.
 *
 * FIELD ORDER
 * - title      : Visitor-facing title shown on the card
 * - platform   : Facebook | Instagram | YouTube | Other
 * - type       : Reel | Video | Post | Interview | Talk | Short
 * - url        : Full public URL to the original media
 * - embedUrl   : Optional manual embed URL override (use when platform
 *                auto-embed needs help, especially for Facebook shared links)
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
 *   embedUrl: '',
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
  embedUrl?: string;
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
    embedUrl:
      'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1638325130651200&show_text=false',
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
    embedUrl:
      'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1554778962289569&show_text=false',
    summary: 'Replace this with a short line about the core message, tip, or consultation insight shared in this reel.',
    published: '',
    featured: true,
  },
  {
    title: 'Facebook Post / Share — Update title',
    platform: 'Facebook',
    type: 'Post',
    url: 'https://www.facebook.com/share/p/1AUWazDja5/',
    embedUrl:
      'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fp%2F1AUWazDja5%2F&show_text=true',
    summary: 'Replace this with a short summary of the post content, event, or learning visitors should expect.',
    published: '',
    featured: false,
  },
  {
    title: 'YouTube Short — Update title',
    platform: 'YouTube',
    type: 'Short',
    url: 'https://youtube.com/shorts/PReklrVQ48k?si=0pryJoadpJRc9Ok5',
    summary:
      'Replace this with a short summary of the topic covered in this YouTube Short so visitors know what to expect before pressing play.',
    published: '',
    featured: true,
  },
];

export const featuredMedia = mediaItems.filter((item) => item.featured);

export function getYouTubeId(url: string): string | undefined {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes('youtu.be')) {
      return parsed.pathname.split('/').filter(Boolean)[0];
    }

    if (parsed.pathname.startsWith('/shorts/')) {
      return parsed.pathname.split('/')[2];
    }

    const watchId = parsed.searchParams.get('v');
    if (watchId) return watchId;
  } catch {
    return undefined;
  }

  return undefined;
}

export function getEmbedUrl(item: MediaItem): string | undefined {
  if (item.embedUrl) return item.embedUrl;

  if (item.platform === 'Facebook') {
    const encoded = encodeURIComponent(item.url);
    if (item.type === 'Post') {
      return `https://www.facebook.com/plugins/post.php?href=${encoded}&show_text=true`;
    }

    return `https://www.facebook.com/plugins/video.php?href=${encoded}&show_text=false`;
  }

  return undefined;
}
