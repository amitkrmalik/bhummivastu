import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Vastu Services',
      links: [
        {
          text: 'Residential Vastu (Homes / Flats)',
          href: getPermalink('/services/residential-vastu'),
        },
        {
          text: 'Commercial Vastu (Offices / Startups)',
          href: getPermalink('/services/commercial-vastu'),
        },
        {
          text: 'Industrial Vastu (Factories / Warehouses)',
          href: getPermalink('/services/industrial-vastu'),
        },
      ],
    },
    {
      text: 'Astrology',
      links: [
        {
          text: 'IT Career & Business Growth',
          href: getPermalink('/services/it-career-astrology'),
        },
        {
          text: 'Personal Life & Relationships',
          href: getPermalink('/services/personal-life-astrology'),
        },
      ],
    },
    {
      text: 'Astro-Vastu (Premium)',
      href: getPermalink('/services/astro-vastu'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    {
      text: 'Book Now',
      href: getPermalink('/contact'),
      variant: 'primary',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Vastu Services',
      links: [
        { text: 'Residential Vastu', href: getPermalink('/services/residential-vastu') },
        { text: 'Commercial Vastu', href: getPermalink('/services/commercial-vastu') },
        { text: 'Industrial Vastu', href: getPermalink('/services/industrial-vastu') },
      ],
    },
    {
      title: 'Astrology',
      links: [
        { text: 'IT Career & Business Growth', href: getPermalink('/services/it-career-astrology') },
        { text: 'Personal Life & Relationships', href: getPermalink('/services/personal-life-astrology') },
        { text: 'Astro-Vastu (Premium)', href: getPermalink('/services/astro-vastu') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' }, // TBD: Add Instagram URL
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },   // TBD: Add Facebook URL
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },     // TBD: Add YouTube URL
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} BhummiVastu &mdash; Vastu Acharya Minu Malik. All rights reserved.
  `,
};