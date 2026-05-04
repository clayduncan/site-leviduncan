export const site = {
  name: 'Clay Duncan',
  url: 'https://www.clayduncan.com',
  description:
    'Clay Duncan is a Huntsville, Alabama mortgage loan originator at Princeton Mortgage, helping VA-eligible borrowers, military families, jumbo buyers, clients with complex mortgage questions, REALTORS®, and loan officers across North Alabama.',
  tagline: 'Clarity. Trust. Results.',
  phone: '256.203.4500',
  phoneHref: 'tel:+12562034500',
  email: 'clay@princetonmortgage.com',
  emailHref: 'mailto:clay@princetonmortgage.com',
  schedulingUrl: 'https://calendly.com/chat-with-clay/',
  applicationUrl:
    'https://princeton.tidalwave.ai/signup/clay.duncan/D30942VECCMDEGRFSGC0',
  contactCardUrl: 'https://connect.clayduncan.com/',
  nmlsId: '118739',
  googleKnowledgeGraphId: 'kg:/g/11yqs4ft94',
  jobTitle: 'Mortgage Loan Originator',
  company: {
    name: 'Princeton Mortgage',
    url: 'https://www.princetonmortgage.com/',
    nmlsId: '113856',
  },
  serviceArea: [
    'Huntsville, Alabama',
    'Madison, Alabama',
    'Madison County, Alabama',
    'North Alabama',
  ],
  socialLinks: [
    {
      label: 'YouTube',
      url: 'https://www.youtube.com/@TheClayDuncan',
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/theclayduncan/',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/theclayduncan',
    },
  ],
  reviewLinks: [
    {
      label: 'Google Business',
      url: 'https://www.google.com/maps?cid=9332843875946390997',
    },
  ],
} as const;

export const profileLinks = [...site.socialLinks, ...site.reviewLinks] as const;
