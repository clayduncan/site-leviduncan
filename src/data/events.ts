export interface EventItem {
  id: string;
  name: string;
  date: string;
  venue: string;
  city: string;
  state: string;
  address?: {
    streetAddress: string;
    postalCode: string;
  };
  registrationUrl?: string;
  audience: string;
  description: string;
  speakers: Array<{
    name: string;
    company: string;
    topic: string;
  }>;
}

export const events: EventItem[] = [
  {
    id: 'homebuyer-masterclass-2026-05-14',
    name: 'Homebuyer Master Class',
    date: '2026-05-14T18:30:00-05:00',
    venue: 'Keller Williams Huntsville',
    city: 'Huntsville',
    state: 'AL',
    address: {
      streetAddress: '809 Shoney Dr. Ste 108',
      postalCode: '35801',
    },
    registrationUrl: 'https://bit.ly/BookLevi',
    audience: 'First-time and experienced homebuyers',
    description:
      'Monthly homebuyer education session covering property strategy, title and legal, home inspection, homeowners insurance, and financing strategy.',
    speakers: [
      {
        name: 'Robby Wasinius',
        company: 'Keller Williams Huntsville',
        topic: 'Property strategy',
      },
      { name: 'Todd Howard', company: 'VIB Title', topic: 'Title and legal' },
      {
        name: 'Christian Daschle',
        company: 'England Home Inspection',
        topic: 'Home inspection',
      },
      {
        name: 'David Farris',
        company: 'Southeastern Assurance Group',
        topic: 'Homeowners insurance',
      },
      {
        name: 'Clay Duncan',
        company: 'Princeton Mortgage',
        topic: 'Financing strategy',
      },
      {
        name: 'Levi Duncan',
        company: 'Princeton Mortgage',
        topic: 'Financing strategy',
      },
    ],
  },
  {
    id: 'homebuyer-masterclass-2026-04-16',
    name: 'Homebuyer Master Class',
    date: '2026-04-16T18:30:00-05:00',
    venue: 'ADM Title',
    city: 'Huntsville',
    state: 'AL',
    audience: 'First-time and experienced homebuyers',
    description:
      'Monthly homebuyer education session covering property strategy, title and legal, home inspection, homeowners insurance, and financing strategy.',
    speakers: [
      {
        name: 'Karen Morris',
        company: 'The Morris Team',
        topic: 'Property strategy',
      },
      {
        name: 'Nancy Smith',
        company: 'The Morris Team',
        topic: 'Property strategy',
      },
      { name: 'Cathy Myrick', company: 'ADM Title', topic: 'Title and legal' },
      {
        name: 'David Farris',
        company: 'Southeastern Assurance Group',
        topic: 'Homeowners insurance',
      },
      {
        name: 'Christian Daschle',
        company: 'England Home Inspection',
        topic: 'Home inspection',
      },
      {
        name: 'Levi Duncan',
        company: 'Princeton Mortgage',
        topic: 'Financing strategy',
      },
      {
        name: 'Clay Duncan',
        company: 'Princeton Mortgage',
        topic: 'Financing strategy',
      },
    ],
  },
  {
    id: 'homebuyer-masterclass-2026-02-21',
    name: 'Homebuyer Master Class',
    date: '2026-02-21T08:30:00-06:00',
    venue: 'Stove House Event Center',
    city: 'Huntsville',
    state: 'AL',
    audience: 'First-time and experienced homebuyers',
    description:
      'Monthly homebuyer education session covering property strategy, title and legal, homeowners insurance, and financing strategy.',
    speakers: [
      {
        name: 'Lynnae Hall',
        company: 'Leading Edge Realty',
        topic: 'Property strategy',
      },
      {
        name: 'Collie Foster',
        company: 'Leading Edge Realty',
        topic: 'Property strategy',
      },
      {
        name: 'David Farris',
        company: 'Southeastern Assurance Group',
        topic: 'Homeowners insurance',
      },
      { name: 'Todd Howard', company: 'VIB Title', topic: 'Title and legal' },
      {
        name: 'Clay Duncan',
        company: 'Princeton Mortgage',
        topic: 'Financing strategy',
      },
      {
        name: 'Levi Duncan',
        company: 'Princeton Mortgage',
        topic: 'Financing strategy',
      },
    ],
  },
];

const now = new Date();

export const upcomingEvents = events.filter(
  (event) => new Date(event.date) >= now,
);
export const pastEvents = events.filter((event) => new Date(event.date) < now);
