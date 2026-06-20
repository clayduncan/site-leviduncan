export type ReviewSourceKey = 'testimonial-tree' | 'google';

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
    name: 'Testimonial Tree',
    profileUrl:
      'https://directory.testimonialtree.com/profiles/23CEBF28-684F-41DF-8019-2F5B07249B60',
    submissionUrl:
      'https://application.testimonialtree.com/collect/testimonial-requests/532672',
  },
  google: {
    name: 'Google',
    profileUrl: '',
  },
};

export const reviews: Review[] = [
  {
    id: 'testimonial-tree-4306426',
    source: 'testimonial-tree',
    sourceName: 'Testimonial Tree',
    sourceUrl:
      'https://directory.testimonialtree.com/profiles/23CEBF28-684F-41DF-8019-2F5B07249B60',
    sourceReviewUrl:
      'https://directory.testimonialtree.com/profiles/23CEBF28-684F-41DF-8019-2F5B07249B60/testimonials/4306426',
    author: 'Allie Craig',
    rating: 5,
    date: '2026-05-22',
    text: 'Levi & the Priceton Mortgage team were fantastic! I truly appreciate his patience with answering my million questions and guidance throughout the process. He really made the process as easy as possible and explained each step along the way.',
  },
  {
    id: 'testimonial-tree-4298348',
    source: 'testimonial-tree',
    sourceName: 'Testimonial Tree',
    sourceUrl:
      'https://directory.testimonialtree.com/profiles/23CEBF28-684F-41DF-8019-2F5B07249B60',
    sourceReviewUrl:
      'https://directory.testimonialtree.com/profiles/23CEBF28-684F-41DF-8019-2F5B07249B60/testimonials/4298348',
    author: 'Lane Dwight Mart',
    rating: 5,
    date: '2026-05-16',
    text: 'Levi was fantastic! Couldn’t have asked for a smoother experience and a personable person to work with. Definitely will be using Princeton Mortgage again in the future and will work with Levi again aswell. Thanks Princeton Team and Thanks Levi!',
  },
  {
    id: 'testimonial-tree-4252429',
    source: 'testimonial-tree',
    sourceName: 'Testimonial Tree',
    sourceUrl:
      'https://directory.testimonialtree.com/profiles/23CEBF28-684F-41DF-8019-2F5B07249B60',
    sourceReviewUrl:
      'https://directory.testimonialtree.com/profiles/23CEBF28-684F-41DF-8019-2F5B07249B60/testimonials/4252429',
    author: 'Roseann Mercer L',
    rating: 5,
    date: '2026-04-10',
    text: 'Levi Duncan is a super star!  He kept me apprised of every nuance in the loan process.  He was always helpful and friendly,  He is extremely knowledgeable about the mortgage process and I look forward to seeing his reputation rise in the industry.\n\nLisa Layton was extremely helpful and friendly.',
  },
];

export const reviewStats = {
  count: 3,
  averageRating: 5,
  averageRatingDisplay: '5.0',
  maxRating: 5,
} as const;
