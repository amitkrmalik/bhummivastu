import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Vastu Services',
          href: `${getPermalink('/services')}#vastu-services`,
        },
        {
          text: 'Astrology',
          href: `${getPermalink('/services')}#astrology-services`,
        },
        {
          text: 'Astro-Vastu (Premium)',
          href: `${getPermalink('/services')}#astro-vastu-premium`,
        },
      ],
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Testimonials',
      href: getPermalink('/testimonials'),
    },
    {
      text: 'Certifications',
      href: getPermalink('/certifications'),
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
        { text: 'Prashna Kundali', href: getPermalink('/services/prashna-kundali') },
        { text: 'Astro-Vastu for Homes (Premium)', href: getPermalink('/services/astro-vastu') },
        {
          text: 'Astro-Vastu for Offices & Industrial (Premium)',
          href: getPermalink('/services/astro-vastu-commercial'),
        },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Testimonials', href: getPermalink('/testimonials') },
        { text: 'Certifications', href: getPermalink('/certifications') },
        { text: 'Social Media', href: getPermalink('/social') },
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
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/bhummivastu' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/BhummiVastu' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' }, // TBD: Add YouTube URL when available
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} BhummiVastu &mdash; Vastu Acharya Minu Saini. All rights reserved.
  `,
};
