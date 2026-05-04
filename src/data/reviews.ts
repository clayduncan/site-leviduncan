export interface Review {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  text: string;
  source: string;
}

export const reviews: Review[] = [];
