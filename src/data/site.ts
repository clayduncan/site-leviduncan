export const site = {
  name: 'Levi Duncan',
  url: 'https://www.leviduncan.com',
  description:
    'Levi Duncan is a Huntsville, Alabama mortgage loan originator at Princeton Mortgage, helping entry-level and mid-market homebuyers with first-time buyer guidance, FHA loans, USDA loans, down payment assistance, and investment property financing across the Tennessee Valley.',
  tagline: 'Clarity. Trust. Results.',
  title: 'Mortgage Loan Originator',
  phone: '+1 (256) 550-8099',
  phoneDisplay: '(256) 550-8099',
  phoneHref: 'tel:+12565508099',
  email: 'lduncan@princetonmortgage.com',
  emailHref: 'mailto:lduncan@princetonmortgage.com',
  calendlyUrl: 'https://bit.ly/BookLevi', // Canonical: https://calendly.com/lduncan-princetonmortgage/30min
  schedulingUrl: 'https://bit.ly/BookLevi',
  applicationUrl: 'https://bit.ly/AppWithLevi', // Canonical: https://princeton.tidalwave.ai/signup/levi.duncan/D2OUK3FT86H9KK708470
  contactCardUrl: null,
  nmls: '2721357',
  nmlsId: '2721357',
  googleKnowledgeGraphId: null,
  knowledgeGraphId: null,
  jobTitle: 'Mortgage Loan Originator',
  city: 'Huntsville',
  state: 'AL',
  company: {
    name: 'Princeton Mortgage',
    url: 'https://www.princetonmortgage.com/',
    nmlsId: '113856',
  },
  serviceArea:
    'Huntsville, Madison, Decatur, Athens — Madison County, Morgan County, and the broader Tennessee Valley',
  serviceAreaCities: ['Huntsville', 'Madison', 'Decatur', 'Athens'],
  serviceAreaCounties: ['Madison County', 'Morgan County'],
  social: {
    linkedin: 'https://www.linkedin.com/in/levi-duncan-36669b303/',
    facebook: 'https://www.facebook.com/profile.php?id=100089730019688',
    instagram: 'https://www.instagram.com/levidoesloans/',
    youtube: null,
  },
  socialLinks: [
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/levidoesloans/',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/levi-duncan-36669b303/',
    },
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100089730019688',
    },
  ],
  gbpUrl: null,
  reviewLinks: [],
  heroImage: '/images/levi-duncan.jpg',
} as const;

export const profileLinks = [...site.socialLinks, ...site.reviewLinks] as const;
