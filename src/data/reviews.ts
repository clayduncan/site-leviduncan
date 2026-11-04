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
    id: 'testimonial-tree-4518847',
    source: 'testimonial-tree',
    sourceName: 'Testimonial Tree',
    sourceUrl:
      'https://directory.testimonialtree.com/profiles/23CEBF28-684F-41DF-8019-2F5B07249B60',
    sourceReviewUrl:
      'https://directory.testimonialtree.com/profiles/23CEBF28-684F-41DF-8019-2F5B07249B60/testimonials/4518847',
    author: 'Michael Dueck',
    rating: 5,
    date: '2026-10-09',
    text: 'Levi has been an immensely helpful, mindful, and professional agent. Knowledgable in his field and insightful to individual borrower needs, he found the perfect fit for my situation’s needs. When put under a time crunch due to circumstances beyond his control, he completed his side promptly, and provided guidance to me, and assistance to all other parties involved.\n\nSimilarly, Bradley was a sharp, thorough, and remarkably quick processor, giving me a clear and concise list of all required documents, and less than 3 hour turnaround on all tasks I needed from him. Courteous and prompt, he made my first loan experience much more manageable and understandable.\n\nWith such a professional, helpful, and well-spoken staff, Princeton Mortgage will be the preferred option for any and all future transactions I take on.',
  },
  {
    id: 'testimonial-tree-4506184',
    source: 'testimonial-tree',
    sourceName: 'Testimonial Tree',
    sourceUrl:
      'https://directory.testimonialtree.com/profiles/23CEBF28-684F-41DF-8019-2F5B07249B60',
    sourceReviewUrl:
      'https://directory.testimonialtree.com/profiles/23CEBF28-684F-41DF-8019-2F5B07249B60/testimonials/4506184',
    author: 'Billy Joel Strobel',
    rating: 5,
    date: '2026-09-30',
    text: "Levi did an awesome job. Any questions I had were answered promptly, clearly, and with much kindness. I'm very appreciative of his diligence and communication style. Great job, Levi!",
  },
  {
    id: 'testimonial-tree-4477459',
    source: 'testimonial-tree',
    sourceName: 'Testimonial Tree',
    sourceUrl:
      'https://directory.testimonialtree.com/profiles/23CEBF28-684F-41DF-8019-2F5B07249B60',
    sourceReviewUrl:
      'https://directory.testimonialtree.com/profiles/23CEBF28-684F-41DF-8019-2F5B07249B60/testimonials/4477459',
    author: 'Harley Kenney',
    rating: 5,
    date: '2026-09-02',
    text: 'Working with Levi and Clay has been absolutely one of the easiest lenders to work with! They are at the leading edge of the AI boom and using tools to make the process much easier and faster.  They have a great product and I recommend them to all my clients!',
  },
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
  count: 6,
  averageRating: 5,
  averageRatingDisplay: '5.0',
  maxRating: 5,
} as const;
