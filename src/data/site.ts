export const site = {
  name: 'Levi Duncan',
  url: 'https://www.leviduncan.com',
  description:
    'Levi Duncan is a Huntsville, Alabama mortgage loan originator at Princeton Mortgage, helping homebuyers across Madison, Decatur, Athens, Albertville, Arab, and the wider Tennessee Valley compare practical mortgage paths before the home search creates pressure.',
  tagline: 'Clarity. Trust. Results.',
  title: 'Mortgage Loan Originator',
  phone: '+1 (256) 550-8099',
  phoneDisplay: '(256) 550-8099',
  phoneHref: 'tel:+12565508099',
  email: 'lduncan@princetonmortgage.com',
  emailHref: 'mailto:lduncan@princetonmortgage.com',
  calendlyUrl: 'https://calendly.com/lduncan-princetonmortgage/book-levi',
  schedulingUrl: 'https://calendly.com/lduncan-princetonmortgage/book-levi',
  homebuyerConsultationUrl:
    'https://calendly.com/lduncan-princetonmortgage/homebuyer-consultation',
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
    'Madison, Decatur, Athens, Albertville, Arab, and the wider Tennessee Valley — Madison County, Marshall County, and Morgan County across North Alabama',
  serviceAreaStatement:
    'Levi Duncan helps homebuyers across Madison, Decatur, Athens, Albertville, Arab, and the wider Tennessee Valley compare practical mortgage paths before the home search creates pressure, serving Madison County, Marshall County, and Morgan County across North Alabama.',
  serviceAreaCities: ['Madison', 'Decatur', 'Athens', 'Albertville', 'Arab'],
  serviceAreaCounties: ['Madison County', 'Marshall County', 'Morgan County'],
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
