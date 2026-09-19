/**
 * BhummiVastu Media Library
 *
 * Instagram reel order and view counts were captured from the public
 * @bhummivastu reels grid on 19 September 2026. Instagram exposes view counts
 * publicly in the grid, but does not expose a dependable public likes count
 * for this catalog, so featured items are ranked by views.
 *
 * Keep Instagram items in descending `sortOrder` when adding a newly published
 * reel. The page sorts the complete library by this field so the latest reel
 * remains first even when other platforms are added later.
 */

export interface MediaItem {
  title: string;
  platform: 'Facebook' | 'Instagram' | 'YouTube' | 'Other';
  type: 'Reel' | 'Video' | 'Post' | 'Interview' | 'Talk' | 'Short';
  url: string;
  embedUrl?: string;
  summary: string;
  published?: string;
  sortOrder: number;
  views?: number;
  likes?: number;
  featured?: boolean;
}

const instagramUrl = (shortcode: string) => `https://www.instagram.com/reel/${shortcode}/`;

const instagramReels: MediaItem[] = [
  {
    title: 'Ganesh Chaturthi blessings and festival joy',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DdbuYWrhAGV'),
    summary: 'A festive BhummiVastu reel sharing Ganesh Chaturthi blessings, happiness, and togetherness.',
    published: 'September 2026',
    sortOrder: 52,
    views: 472,
  },
  {
    title: 'Ganesh Chaturthi 2026 pooja vidhi',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DdOR59qj9Pl'),
    summary: 'A concise guide to the Ganesh Chaturthi 2026 pooja vidhi from BhummiVastu.',
    published: 'September 2026',
    sortOrder: 51,
    views: 72,
  },
  {
    title: 'Paryushan Samvatsari 2026: forgiveness and reflection',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DdAS_LHDI0D'),
    summary: 'A Paryushan Samvatsari 2026 message about reflection, forgiveness, and peace.',
    published: 'September 2026',
    sortOrder: 50,
    views: 65,
  },
  {
    title: 'Krishna Janmotsav celebrations',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('Dc78fNHh8kU'),
    summary: 'A devotional BhummiVastu reel celebrating Krishna Janmotsav.',
    published: 'September 2026',
    sortOrder: 49,
    views: 765,
    featured: true,
  },
  {
    title: 'Janmashtami celebration and blessings',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('Dc2qPyPkcA_'),
    summary: 'A Janmashtami celebration reel with devotional wishes from BhummiVastu.',
    published: 'September 2026',
    sortOrder: 48,
    views: 240,
  },
  {
    title: 'September 2026 numerology: Number 2 and the Moon',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcydsEMDDbw'),
    summary: 'A September 2026 numerology forecast for Number 2 and Moon energy.',
    published: 'September 2026',
    sortOrder: 47,
    views: 315,
  },
  {
    title: 'September 2026 numerology: Number 1 and the Sun',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcvyvDWCWsY'),
    summary: 'A September 2026 numerology forecast for Number 1 and Sun energy.',
    published: 'September 2026',
    sortOrder: 46,
    views: 92,
  },
  {
    title: 'Astro-Vastu site visit',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DctJrNHhh9E'),
    summary: 'A BhummiVastu site visit featuring Astro-Vastu and Vedic astrology expertise.',
    published: 'September 2026',
    sortOrder: 45,
    views: 1703,
    featured: true,
  },
  {
    title: 'Janmashtami midnight and an Astro-Vastu tip',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('Dcpl55nDamD'),
    summary: 'A Janmashtami midnight message with a practical Astro-Vastu tip.',
    published: 'August 2026',
    sortOrder: 44,
    views: 72,
  },
  {
    title: 'Chappan Bhog, Dahi Handi, and a food-health tip',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcnBFY7CFVV'),
    summary:
      'A Janmashtami-themed reel connecting Chappan Bhog and Dahi Handi with an Astro-Vastu food and health tip.',
    published: 'August 2026',
    sortOrder: 43,
    views: 166,
  },
  {
    title: 'Vasudev and Krishna: a Janmashtami insight',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DclXZcIiKdS'),
    summary: 'A devotional story about Vasudev and Krishna paired with an Astro-Vastu insight.',
    published: 'August 2026',
    sortOrder: 42,
    views: 124,
  },
  {
    title: 'Janmashtami 2026 pooja vidhi',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DciygwEDnLn'),
    summary: 'A BhummiVastu guide to the Janmashtami 2026 pooja vidhi.',
    published: 'August 2026',
    sortOrder: 41,
    views: 147,
  },
  {
    title: 'BhummiVastu Instagram Reel — 40',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcgNva2jvtH'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 40,
    views: 243,
  },
  {
    title: 'BhummiVastu Instagram Reel — 39',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcdpCg8jTQo'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 39,
    views: 1548,
    featured: true,
  },
  {
    title: 'BhummiVastu Instagram Reel — 38',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcbEI-SErRr'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 38,
    views: 169,
  },
  {
    title: 'BhummiVastu Instagram Reel — 37',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcXkXJYgh3A'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 37,
    views: 273,
  },
  {
    title: 'BhummiVastu Instagram Reel — 36',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcU_hAbjNCU'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 36,
    views: 1280,
    featured: true,
  },
  {
    title: 'BhummiVastu Instagram Reel — 35',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcTVwb_Dfaw'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 35,
    views: 516,
  },
  {
    title: 'BhummiVastu Instagram Reel — 34',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcQlrkgBMh5'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 34,
    views: 930,
    featured: true,
  },
  {
    title: 'BhummiVastu Instagram Reel — 33',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcN_4N7AckJ'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 33,
    views: 69,
  },
  {
    title: 'BhummiVastu Instagram Reel — 32',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcLa_U8k8jI'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 32,
    views: 159,
  },
  {
    title: 'BhummiVastu Instagram Reel — 31',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcI2IQhDW0t'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 31,
    views: 79,
  },
  {
    title: 'BhummiVastu Instagram Reel — 30',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DcGymrADn6f'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 30,
    views: 48,
  },
  {
    title: 'BhummiVastu Instagram Reel — 29',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('Db2zfbQACNo'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 29,
    views: 456,
  },
  {
    title: 'BhummiVastu Instagram Reel — 28',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbzJ-AfiIu8'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 28,
    views: 56,
  },
  {
    title: 'BhummiVastu Instagram Reel — 27',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbvFAUyk2kJ'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 27,
    views: 1480,
    featured: true,
  },
  {
    title: 'BhummiVastu Instagram Reel — 26',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbrUxZSjzZy'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 26,
    views: 142,
  },
  {
    title: 'BhummiVastu Instagram Reel — 25',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbqekBqiqJs'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 25,
    views: 272,
  },
  {
    title: 'BhummiVastu Instagram Reel — 24',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('Dbp7cYDFIXI'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 24,
    views: 175,
  },
  {
    title: 'BhummiVastu Instagram Reel — 23',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbnywLylOsL'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 23,
    views: 53,
  },
  {
    title: 'BhummiVastu Instagram Reel — 22',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbntEr5CUJU'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 22,
    views: 398,
  },
  {
    title: 'BhummiVastu Instagram Reel — 21',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbmOlEsiZnG'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 21,
    views: 136,
  },
  {
    title: 'BhummiVastu Instagram Reel — 20',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbmLKAfEgw4'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 20,
    views: 121,
  },
  {
    title: 'BhummiVastu Instagram Reel — 19',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('Dbkx1ZVDgGT'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 19,
    views: 141,
  },
  {
    title: 'BhummiVastu Instagram Reel — 18',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbjtO-vlPHi'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 18,
    views: 367,
  },
  {
    title: 'BhummiVastu Instagram Reel — 17',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbihpvnjyyX'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 17,
    views: 68,
  },
  {
    title: 'BhummiVastu Instagram Reel — 16',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbiNDKqjYB8'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 16,
    views: 131,
  },
  {
    title: 'BhummiVastu Instagram Reel — 15',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbhBffXCkvi'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 15,
    views: 137,
  },
  {
    title: 'BhummiVastu Instagram Reel — 14',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('Dbf80j0jHwG'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 14,
    views: 121,
  },
  {
    title: 'BhummiVastu Instagram Reel — 13',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbfoSdyjP5Z'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 13,
    views: 134,
  },
  {
    title: 'BhummiVastu Instagram Reel — 12',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbfMdIRDCck'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 12,
    views: 24,
  },
  {
    title: 'BhummiVastu Instagram Reel — 11',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbfF5EKAgfY'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 11,
    views: 366,
  },
  {
    title: 'BhummiVastu Instagram Reel — 10',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('Dbect4nFIx8'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 10,
    views: 145,
  },
  {
    title: 'BhummiVastu Instagram Reel — 9',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbcJ9_ZlqM3'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 9,
    views: 332,
  },
  {
    title: 'BhummiVastu Instagram Reel — 8',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbcGyW7lA5L'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 8,
    views: 334,
  },
  {
    title: 'BhummiVastu Instagram Reel — 7',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbZaiLGgrve'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 7,
    views: 229,
  },
  {
    title: 'BhummiVastu Instagram Reel — 6',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbZTMH0iTpx'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 6,
    views: 190,
  },
  {
    title: 'BhummiVastu Instagram Reel — 5',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbYOgbDCIdo'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 5,
    views: 118,
  },
  {
    title: 'BhummiVastu Instagram Reel — 4',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbW8fDtFYns'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 4,
    views: 27,
  },
  {
    title: 'BhummiVastu Instagram Reel — 3',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbW52SjjMT4'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 3,
    views: 183,
  },
  {
    title: 'BhummiVastu Instagram Reel — 2',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbUNBtUDOyj'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 2,
    views: 23,
  },
  {
    title: 'BhummiVastu Instagram Reel — 1',
    platform: 'Instagram',
    type: 'Reel',
    url: instagramUrl('DbUJgOWkhXr'),
    summary: 'Watch the original BhummiVastu reel on Instagram.',
    sortOrder: 1,
    views: 185,
  },
];

const additionalMedia: MediaItem[] = [
  {
    title: 'BhummiVastu Facebook Reel',
    platform: 'Facebook',
    type: 'Reel',
    url: 'https://www.facebook.com/reel/1638325130651200',
    embedUrl:
      'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1638325130651200&show_text=false',
    summary: 'Watch the original BhummiVastu reel on Facebook.',
    sortOrder: 0,
  },
  {
    title: 'BhummiVastu Facebook Reel',
    platform: 'Facebook',
    type: 'Reel',
    url: 'https://www.facebook.com/reel/1554778962289569',
    embedUrl:
      'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1554778962289569&show_text=false',
    summary: 'Watch the original BhummiVastu reel on Facebook.',
    sortOrder: -1,
  },
  {
    title: 'BhummiVastu Facebook Post',
    platform: 'Facebook',
    type: 'Post',
    url: 'https://www.facebook.com/share/p/1AUWazDja5/',
    embedUrl:
      'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fp%2F1AUWazDja5%2F&show_text=true',
    summary: 'Open the original BhummiVastu post on Facebook.',
    sortOrder: -2,
  },
  {
    title: 'BhummiVastu YouTube Short',
    platform: 'YouTube',
    type: 'Short',
    url: 'https://youtube.com/shorts/PReklrVQ48k?si=0pryJoadpJRc9Ok5',
    summary: 'Watch the original BhummiVastu Short on YouTube.',
    sortOrder: -3,
  },
];

export const mediaItems: MediaItem[] = [...instagramReels, ...additionalMedia].sort(
  (a, b) => b.sortOrder - a.sortOrder
);

export const featuredMedia = mediaItems.filter((item) => item.featured).sort((a, b) => (b.views ?? 0) - (a.views ?? 0));

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

  if (item.platform === 'Instagram') {
    try {
      const shortcode = new URL(item.url).pathname.split('/').filter(Boolean)[1];
      return shortcode ? `https://www.instagram.com/reel/${shortcode}/embed` : undefined;
    } catch {
      return undefined;
    }
  }

  return undefined;
}
