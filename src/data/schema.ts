import { compliance } from './compliance';
import type { EventItem } from './events';
import type { Review } from './reviews';
import { profileLinks, site } from './site';

type SchemaObject = Record<string, unknown>;

const siteId = `${site.url}/#website`;
const personId = `${site.url}/#person`;
const organizationId = `${site.url}/#princeton-mortgage`;
const professionalServiceId = `${site.url}/#professional-service`;

export const defaultSchemaImage = new URL(site.heroImage, site.url).href;

export const areaServedJsonLd = [
  ...site.serviceAreaCities.map((city) => ({
    '@type': 'City',
    name: city,
    addressRegion: site.state,
    addressCountry: 'US',
  })),
  ...site.serviceAreaCounties.map((county) => ({
    '@type': 'AdministrativeArea',
    name: county,
    addressRegion: site.state,
    addressCountry: 'US',
  })),
] as const;

export const mortgageServices = [
  {
    name: 'First-Time Home Buyer Guidance',
    path: '/huntsville/mortgage-guidance/first-time-home-buyer/',
    serviceType: 'First-time homebuyer mortgage guidance',
    description:
      'Mortgage guidance for first-time homebuyers preparing to buy in Huntsville, Madison, Decatur, Athens, and the Tennessee Valley.',
  },
  {
    name: 'FHA Loans',
    path: '/huntsville/mortgage-guidance/fha-loans/',
    serviceType: 'FHA mortgage loan origination',
    description:
      'FHA loan guidance for Huntsville-area buyers comparing credit, down payment, and homebuying readiness options.',
  },
  {
    name: 'USDA Loans',
    path: '/huntsville/mortgage-guidance/usda-loans/',
    serviceType: 'USDA mortgage loan origination',
    description:
      'USDA loan guidance for eligible homebuyers evaluating rural and suburban purchase options in North Alabama.',
  },
  {
    name: 'Down Payment Assistance',
    path: '/huntsville/mortgage-guidance/down-payment-assistance/',
    serviceType: 'Down payment assistance mortgage guidance',
    description:
      'Down payment assistance guidance for Alabama homebuyers who need a clearer starting point before applying.',
  },
  {
    name: 'Investment Property',
    path: '/huntsville/mortgage-guidance/investment-property/',
    serviceType: 'Investment property mortgage guidance',
    description:
      'Investment property mortgage guidance for buyers evaluating rental-property financing in Huntsville and North Alabama.',
  },
] as const;

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': siteId,
  name: site.name,
  url: site.url,
  description: site.description,
  publisher: {
    '@id': personId,
  },
} as const;

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': personId,
  name: site.name,
  url: site.url,
  image: defaultSchemaImage,
  jobTitle: site.jobTitle,
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Mortgage Loan Originator',
    occupationalCategory: 'Mortgage loan origination',
  },
  email: site.email,
  telephone: site.phone,
  worksFor: {
    '@id': organizationId,
  },
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'NMLS',
    value: site.nmlsId,
    url: compliance.individualNmls.url,
  },
  areaServed: areaServedJsonLd,
  knowsAbout: [
    'first-time homebuyer education',
    'down payment assistance',
    'FHA loans',
    'USDA loans',
    'buyer readiness',
    'credit preparation',
    'budgeting for homebuyers',
    'investment property mortgage guidance',
    'Homebuyer Master Class',
    'mortgage loan origination',
  ],
  sameAs: profileLinks.map((link) => link.url),
} as const;

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId,
  name: site.company.name,
  url: site.company.url,
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'NMLS',
    value: compliance.companyNmls.id,
    url: compliance.companyNmls.url,
  },
} as const;

export const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': professionalServiceId,
  name: 'Levi Duncan Mortgage Services',
  url: site.url,
  image: defaultSchemaImage,
  description:
    'Address-free mortgage origination services from Levi Duncan for Huntsville, Madison, Decatur, Athens, Madison County, Morgan County, and the Tennessee Valley.',
  telephone: site.phone,
  email: site.email,
  priceRange: '$$',
  areaServed: areaServedJsonLd,
  provider: {
    '@id': personId,
  },
  parentOrganization: {
    '@id': organizationId,
  },
  serviceType: 'Mortgage loan origination',
  sameAs: profileLinks.map((link) => link.url),
} as const;

export function createMortgageServiceJsonLd({
  pageUrl,
  name,
  description,
  serviceType,
  audience,
}: {
  pageUrl: string;
  name: string;
  description: string;
  serviceType: string;
  audience?: string[];
}): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name,
    description,
    serviceType,
    provider: { '@id': personId },
    broker: { '@id': organizationId },
    areaServed: areaServedJsonLd,
    audience: audience?.map((audienceType) => ({
      '@type': 'Audience',
      audienceType,
    })),
  };
}

export const mortgageServiceJsonLd = mortgageServices.map((service) =>
  createMortgageServiceJsonLd({
    pageUrl: new URL(service.path, site.url).href,
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    audience: ['homebuyers'],
  }),
);

export const homePageSchema = [
  websiteJsonLd,
  personJsonLd,
  organizationJsonLd,
  professionalServiceJsonLd,
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${site.url}/#webpage`,
    url: `${site.url}/`,
    name: 'Levi Duncan | Huntsville Mortgage Loan Originator',
    description: site.description,
    isPartOf: { '@id': siteId },
    mainEntity: { '@id': personId },
    about: [
      { '@type': 'Thing', name: 'Huntsville first-time homebuyer guidance' },
      { '@type': 'Thing', name: 'FHA loans in Huntsville' },
      { '@type': 'Thing', name: 'USDA loans in North Alabama' },
      { '@type': 'Thing', name: 'down payment assistance' },
      { '@type': 'Thing', name: 'Homebuyer Master Class' },
      { '@type': 'Organization', name: 'Princeton Mortgage' },
    ],
    hasPart: [
      {
        '@type': 'WebPage',
        name: 'Mortgage Guidance',
        url: `${site.url}/huntsville/mortgage-guidance/`,
      },
      { '@type': 'WebPage', name: 'About', url: `${site.url}/about/` },
      { '@type': 'WebPage', name: 'Events', url: `${site.url}/events/` },
      { '@type': 'WebPage', name: 'Reviews', url: `${site.url}/reviews/` },
    ],
  },
] as const;

export function createBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site.url).href,
    })),
  };
}

export function createFaqJsonLd(
  questions: Array<{ question: string; answer: string }>,
): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function createReviewJsonLd(review: Review): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@id': personId,
    },
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    datePublished: review.date,
    reviewBody: review.text,
    publisher: {
      '@type': 'Organization',
      name: review.source,
    },
  };
}

export function createEventJsonLd(event: EventItem): SchemaObject {
  const eventUrl = `${site.url}/events/#${event.id}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': eventUrl,
    name: event.name,
    startDate: event.date,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: event.venue,
      address: {
        '@type': 'PostalAddress',
        addressLocality: event.city,
        addressRegion: event.state,
        addressCountry: 'US',
      },
    },
    description: event.description,
    organizer: [
      {
        '@id': personId,
      },
      {
        '@id': organizationId,
      },
    ],
    performer: event.speakers.map((speaker) => ({
      '@type': 'Person',
      name: speaker.name,
      affiliation: {
        '@type': 'Organization',
        name: speaker.company,
      },
      knowsAbout: speaker.topic,
    })),
    audience: {
      '@type': 'Audience',
      audienceType: event.audience,
    },
    url: `${site.url}/events/#${event.id}`,
    isAccessibleForFree: true,
  };
}
