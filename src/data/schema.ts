import { compliance } from './compliance';
import type { EventItem } from './events';
import type { AggregateRating, Review } from './reviews';
import { profileLinks, site } from './site';

type SchemaObject = Record<string, unknown>;

const siteId = `${site.url}/#website`;
const personId = `${site.url}/#person`;
const organizationId = `${site.url}/#princeton-mortgage`;
const professionalServiceId = `${site.url}/#professional-service`;
export const defaultSchemaImage = new URL(
  '/images/clay-duncan-wbackground-1400.jpg',
  site.url,
).href;

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
    propertyID: 'Google Knowledge Graph',
    value: site.googleKnowledgeGraphId,
  },
  areaServed: site.serviceArea,
  knowsAbout: [
    'mortgage lending',
    'VA loans',
    'complex mortgage guidance',
    'higher-priced home financing',
    'AI training for REALTORS®',
    'real estate AI education',
    'loan officer growth',
    'why join Princeton Mortgage',
    'mortgage leadership',
    'FHA loans',
    'USDA loans',
    'first-time homebuyer education',
    'AI education for real estate professionals',
    'mortgage leadership',
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
  },
} as const;

export const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': professionalServiceId,
  name: 'Clay Duncan Mortgage Services',
  url: site.url,
  image: defaultSchemaImage,
  description:
    'Home-based mortgage origination services from Clay Duncan for Huntsville, Madison, Redstone Arsenal, and North Alabama borrowers.',
  telephone: site.phone,
  email: site.email,
  priceRange: '$$',
  areaServed: site.serviceArea,
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
    areaServed: site.serviceArea,
    audience: audience?.map((audienceType) => ({
      '@type': 'Audience',
      audienceType,
    })),
  };
}

export const homePageSchema = [
  websiteJsonLd,
  personJsonLd,
  organizationJsonLd,
  professionalServiceJsonLd,
  createMortgageServiceJsonLd({
    pageUrl: site.url,
    name: 'Mortgage Services in Huntsville and North Alabama',
    description:
      'Mortgage loan origination services for VA loans, jumbo loans, medical professional mortgages, and complex mortgage planning in Huntsville and North Alabama.',
    serviceType: 'Mortgage loan origination',
    audience: [
      'homebuyers',
      'VA-eligible borrowers',
      'medical professionals',
      'jumbo buyers',
    ],
  }),
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${site.url}/#webpage`,
    url: `${site.url}/`,
    name: 'Clay Duncan | Huntsville Mortgage Loan Originator and AI Educator',
    description: site.description,
    isPartOf: { '@id': siteId },
    mainEntity: { '@id': personId },
    about: [
      { '@type': 'Thing', name: 'Huntsville mortgage guidance' },
      { '@type': 'Thing', name: 'VA loans near Redstone Arsenal' },
      { '@type': 'Thing', name: 'medical professional mortgage in Huntsville' },
      { '@type': 'Thing', name: 'complex mortgage guidance' },
      { '@type': 'Thing', name: 'AI training for REALTORS®' },
      { '@type': 'Thing', name: 'loan officer growth leadership' },
      { '@type': 'Organization', name: 'Princeton Mortgage' },
    ],
    hasPart: [
      {
        '@type': 'WebPage',
        name: 'Mortgage Guidance',
        url: `${site.url}/huntsville/mortgage-guidance/`,
      },
      {
        '@type': 'WebPage',
        name: 'REALTOR AI Training',
        url: `${site.url}/realtor-ai-training/`,
      },
      { '@type': 'WebPage', name: 'Reviews', url: `${site.url}/reviews/` },
      { '@type': 'WebPage', name: 'Events', url: `${site.url}/events/` },
      { '@type': 'WebPage', name: 'Why Join', url: `${site.url}/join-us/` },
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

export function createAggregateRatingJsonLd(
  rating: AggregateRating,
): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId,
    name: site.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.ratingValue,
      reviewCount: rating.reviewCount,
      bestRating: rating.bestRating,
      worstRating: rating.worstRating,
    },
  };
}

export function createEventJsonLd(event: EventItem): SchemaObject {
  const eventUrl = `${site.url}/events/#${event.date}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': eventUrl,
    name: event.title,
    startDate: event.date,
    eventAttendanceMode:
      event.format === 'online'
        ? 'https://schema.org/OnlineEventAttendanceMode'
        : 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location:
      event.format === 'online'
        ? {
            '@type': 'VirtualLocation',
            name: event.location,
            url: event.registrationUrl ?? `${site.url}/events/`,
          }
        : {
            '@type': 'Place',
            name: event.location,
          },
    description: event.summary,
    organizer: {
      '@id': personId,
    },
    performer: {
      '@id': personId,
    },
    audience: {
      '@type': 'Audience',
      audienceType: event.audience,
    },
    url: event.registrationUrl ?? `${site.url}/events/`,
    isAccessibleForFree: true,
  };
}
