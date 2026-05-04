export const clayDuncanPersonJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://clayduncan.com/#person',
  name: 'Clay Duncan',
  url: 'https://clayduncan.com/',
  jobTitle: 'Mortgage lending and AI for real estate professional',
  worksFor: {
    '@type': 'Organization',
    name: 'Princeton Mortgage',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Huntsville',
      addressRegion: 'AL',
      addressCountry: 'US',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'North Alabama',
      addressRegion: 'AL',
      addressCountry: 'US',
    },
  ],
  knowsAbout: [
    'mortgage lending',
    'AI for real estate',
    'recruiting',
  ],
  sameAs: [],
} as const;
