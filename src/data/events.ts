export type EventStatus = 'upcoming' | 'past';

export interface EventItem {
  title: string;
  date: string;
  location: string;
  format: 'in-person' | 'online';
  audience: string;
  status: EventStatus;
  summary: string;
  registrationUrl?: string;
}

const realtor101Summary =
  'A practical, no-jargon session on using AI without losing your voice, relationships, or humanity.';

export const events: EventItem[] = [
  {
    title: 'Online REALTOR® AI Webinar',
    date: '2026-05-14',
    location: 'Online',
    format: 'online',
    audience: 'REALTORS®',
    status: 'upcoming',
    summary:
      'An online AI training session for REALTORS®. Registration details and final topic information are coming soon.',
  },
  {
    title: 'AI for REALTORS® 101 - Introductory Course',
    date: '2026-03-25',
    location: 'Leading Edge Real Estate Group - Decatur',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: realtor101Summary,
  },
  {
    title: 'AI for REALTORS® 101 - Introductory Course',
    date: '2026-03-12',
    location: 'Green Mountain Realty',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: realtor101Summary,
  },
  {
    title: 'AI for REALTORS® 101 - Introductory Course',
    date: '2026-03-10',
    location: 'RE/MAX Unlimited',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: realtor101Summary,
  },
  {
    title: 'AI for REALTORS® 101 - Introductory Course',
    date: '2026-03-06',
    location: 'Better Homes and Gardens',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: realtor101Summary,
  },
  {
    title: 'AI for REALTORS® 101 - Introductory Course',
    date: '2026-03-03',
    location: 'RE/MAX Platinum',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: realtor101Summary,
  },
  {
    title: 'AI for REALTORS® 101 - Introductory Course',
    date: '2026-02-26',
    location: 'Five Star Real Estate Agency',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: realtor101Summary,
  },
  {
    title: 'AI for Homebuyers - Free Intro Course 101',
    date: '2026-02-21',
    location: 'Alley Suite at Stovehouse Event Center',
    format: 'in-person',
    audience: 'Homebuyers',
    status: 'past',
    summary:
      'A beginner-friendly workshop on how AI can help buyers and sellers move through the home search with more confidence.',
  },
  {
    title: 'AI for REALTORS® 101 - Introductory Course',
    date: '2026-02-16',
    location: 'RE/MAX Unlimited - Blackwell',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: realtor101Summary,
  },
  {
    title: 'AI for REALTORS® 101 - Introductory Course',
    date: '2026-02-12',
    location: 'Stovehouse Event Center - Alley Suite',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: realtor101Summary,
  },
  {
    title: 'AI for REALTORS® 102 - From Instructions to Infrastructure',
    date: '2026-02-10',
    location: 'RE/MAX Alliance',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary:
      'A practical session on setting voice, building an AI project, and giving clearer instructions so AI works the way professionals expect.',
  },
  {
    title: 'AI for REALTORS® 101 - Introductory Course',
    date: '2026-01-15',
    location: 'TwinsREALTY',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: realtor101Summary,
  },
];

export const upcomingEvents = events.filter(
  (event) => event.status === 'upcoming',
);
export const pastEvents = events.filter((event) => event.status === 'past');
