export interface Review {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  text: string;
  source: string;
}

export interface AggregateRating {
  ratingValue: number;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
  source: string;
}

// Update reviewCount manually as new reviews accumulate on Google Business Profile. Last updated: 2026-05-02
export const aggregateRating: AggregateRating = {
  ratingValue: 5.0,
  reviewCount: 28,
  bestRating: 5,
  worstRating: 1,
  source: 'Google Business Profile',
};

export const reviews: Review[] = [
  {
    author: 'Kyle Krch',
    rating: 5,
    date: '2026-03-01',
    source: 'Google',
    text: 'In the past 12 months, I’ve referred 18 homebuyers to Clay and his team, and the consistency has been outstanding. Every transaction has closed successfully, and my clients consistently report great rates, clear communication, and a smooth, professional experience from start to finish… all resulting in five-star reviews. I continue to send business Clay’s way because I trust him with my clients. If you’re looking for a lender who delivers and follows through, I highly recommend Clay and his team.',
  },
  {
    author: 'toby bright',
    rating: 5,
    date: '2026-02-01',
    source: 'Google',
    text: 'I’ve purchased multiple properties over the years, including second homes and investment properties, and this was one of the smoothest transactions I’ve experienced. Clay helped me close a complicated jumbo loan for my second home purchase in Scaly Mountain, NC, and handled the entire process with clarity, proactive communication, and precision. Large, out-of-state loans can get complicated, but I always knew exactly where things stood and what to expect next. Clay delivered exactly what he promised. If you’re buying a second home or investment property and want a lender who communicates clearly and inspires confidence, I highly recommend him.',
  },
  {
    author: 'Lisa Zibas',
    rating: 5,
    date: '2026-03-01',
    source: 'Google',
    text: 'I had the opportunity to attend Princeton Mortgage’s AI for REALTORS® 101 today — and wow! Clay is a true expert. From planning social media content to developing personalized listing presentations, I picked up so many new tools that will help me increase efficiency and raise the bar for my clients. Excited to put this knowledge to work. Thanks, Clay!',
  },
  {
    author: 'Anthony Bellman',
    rating: 5,
    date: '2026-03-01',
    source: 'Google',
    text: 'I really enjoyed the AI training with Clay and Levi. It was straight to the point, practical, and actually useful for what we do day to day in real estate. I walked away with tools I can start using immediately in my business. If you’re an agent looking to stay ahead and work smarter, I definitely recommend attending one of their trainings. Great value and well worth the time.',
  },
  {
    author: 'Renee Tripp',
    rating: 5,
    date: '2026-02-01',
    source: 'Google',
    text: 'Clay and Levi were a wealth of generous knowledge! They both have very effective communication, and are excellent teachers- Looking forward to attending more workshops with them in the future as well as mortgage Lending experiences.',
  },
  {
    author: 'Jaz Hanonu Real Estate Agent - Loving Huntsville',
    rating: 5,
    date: '2026-04-01',
    source: 'Google',
    text: 'Great info presented by Clay and Levi! Excited to level up my business with what I learned!',
  },
];
