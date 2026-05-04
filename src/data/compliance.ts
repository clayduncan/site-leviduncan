import { site } from './site';

export const compliance = {
  nmlsConsumerAccessUrl: 'https://www.nmlsconsumeraccess.org/',
  individualNmls: {
    name: site.name,
    id: site.nmlsId,
    title: 'Mortgage Loan Originator',
    url: 'https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/118739',
  },
  companyNmls: {
    name: 'Princeton Mortgage',
    id: site.company.nmlsId,
    url: 'https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/113856',
  },
  companyLegalAddress: {
    streetAddress: '439 Grand Avenue',
    addressLocality: 'Ewing',
    addressRegion: 'NJ',
    postalCode: '08628',
    addressCountry: 'US',
  },
  equalHousing:
    'Princeton Mortgage Corporation is an Equal Housing Lender and a supporter of Equal Housing Opportunity.',
  disclosure:
    'Mortgage financing provided by Princeton Mortgage Corporation. Interest rates, fees and products are subject to change without notice and may not be available at the time of loan commitment or lock-in. All loans and terms are subject to applicant credit, collateral, financial history and program availability at time of origination. Each application is reviewed independently for approval and not all applicants will qualify. Information on this site is not a commitment to lend. Products and services are not available in all states.',
  licenses: [
    {
      state: 'Alabama',
      licenseType: 'Consumer Credit License',
      regulator: 'Alabama State Banking Department',
      licenseNumber: '22854',
    },
  ],
} as const;
