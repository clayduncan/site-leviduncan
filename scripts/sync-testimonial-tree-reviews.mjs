import { writeFile } from 'node:fs/promises';
import { format } from 'prettier';

const profileSlug = '23CEBF28-684F-41DF-8019-2F5B07249B60';
const sourceKey = 'testimonial-tree';
const sourceName = 'Testimonial Tree';
const sourceUrl = `https://directory.testimonialtree.com/profiles/${profileSlug}`;
const submissionUrl =
  'https://application.testimonialtree.com/collect/testimonial-requests/532672';
const apiUrl = `https://directory.testimonialtree.com/api/testimonials/${profileSlug}`;
const outputPath = new URL('../src/data/reviews.ts', import.meta.url);

const ratingValues = new Set([1, 2, 3, 4, 5]);

function normalizeReview(testimonial) {
  const rating = Number(testimonial.Rating);
  if (!ratingValues.has(rating)) {
    throw new Error(
      `Unexpected rating for TestimonialID ${testimonial.TestimonialID}: ${testimonial.Rating}`,
    );
  }

  const date = String(testimonial.DateTimeStamp).slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error(
      `Unexpected date for TestimonialID ${testimonial.TestimonialID}: ${testimonial.DateTimeStamp}`,
    );
  }

  const id = `testimonial-tree-${testimonial.TestimonialID}`;

  return {
    id,
    source: sourceKey,
    sourceName,
    sourceUrl,
    sourceReviewUrl: `${sourceUrl}/testimonials/${testimonial.TestimonialID}`,
    author: String(testimonial.Signature).trim(),
    rating,
    date,
    text: String(testimonial.Testimonial).trim(),
  };
}

async function fetchPage(skip, take) {
  const url = new URL(apiUrl);
  url.searchParams.set('provider_id', '1');
  url.searchParams.set('skip', String(skip));
  url.searchParams.set('take', String(take));

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Testimonial Tree fetch failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}

async function fetchReviews() {
  const take = 100;
  let skip = 0;
  let total = Infinity;
  const testimonials = [];

  while (skip < total) {
    const page = await fetchPage(skip, take);
    const pageTestimonials = page.testimonials ?? [];
    total = Number(page.pagination?.total ?? pageTestimonials.length);
    testimonials.push(...pageTestimonials);

    if (pageTestimonials.length === 0) {
      break;
    }

    skip += pageTestimonials.length;
  }

  return testimonials
    .map(normalizeReview)
    .sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id));
}

async function buildReviewsFile(reviews) {
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = reviews.length
    ? Number((totalRating / reviews.length).toFixed(1))
    : 0;

  const contents = `export type ReviewSourceKey = 'testimonial-tree' | 'google';

export interface ReviewSource {
  name: string;
  profileUrl: string;
  submissionUrl?: string;
}

export interface Review {
  id: string;
  source: ReviewSourceKey;
  sourceName: string;
  sourceUrl: string;
  sourceReviewUrl?: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  text: string;
}

export const reviewSources: Record<ReviewSourceKey, ReviewSource> = {
  'testimonial-tree': {
    name: ${JSON.stringify(sourceName)},
    profileUrl: ${JSON.stringify(sourceUrl)},
    submissionUrl: ${JSON.stringify(submissionUrl)},
  },
  google: {
    name: 'Google',
    profileUrl: '',
  },
};

export const reviews: Review[] = ${JSON.stringify(reviews, null, 2)};

export const reviewStats = {
  count: ${reviews.length},
  averageRating: ${averageRating},
  averageRatingDisplay: ${JSON.stringify(averageRating.toFixed(1))},
  maxRating: 5,
} as const;
`;

  return format(contents, { parser: 'typescript', singleQuote: true });
}

const reviews = await fetchReviews();
await writeFile(outputPath, await buildReviewsFile(reviews));

console.log(
  `Synced ${reviews.length} ${sourceName} reviews to ${outputPath.pathname}`,
);
