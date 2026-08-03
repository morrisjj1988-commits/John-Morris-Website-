export const site = {
  name: 'Cllr John Morris',
  role: 'Labour Councillor for Canning Town South',
  council: 'London Borough of Newham',
  ward: 'Canning Town South',
  url: 'https://johnmorris.uk',
  // Placeholder contact details — replace with real details once confirmed (see README).
  email: 'john.morris@newham.gov.uk',
  phone: '0203 373 2933',
  officeAddress: 'Newham Dockside, 1000 Dockside Road, London E16 2QU',
  surgery: {
    frequency: 'Third Saturday of every month, 10:00am–12:00pm',
    location: 'Canning Town Library',
    note: 'No appointment needed — drop in, or contact Cllr Morris to arrange a convenient time.',
  },
  // Confirmed imprint wording — pending final check on promoter name (see README).
  imprint: 'Promoted by John Morris on behalf of John Morris, both at The Trinity Centre, East Avenue, E12 6SG.',
  newhamProfileUrl: 'https://mgov.newham.gov.uk/mgUserInfo.aspx?UID=5657',
  // Google Analytics 4 Measurement ID (e.g. "G-XXXXXXXXXX"). Leave blank to
  // disable analytics entirely — no tracking script or cookie banner will
  // render until this is set. Create a GA4 property at analytics.google.com
  // to get one; see README for setup notes.
  googleAnalyticsId: 'G-JJHJ6YZEQK',
};

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'News', href: '/news/' },
  { label: 'Road Safety Campaign', href: '/road-safety-campaign/' },
  { label: 'Car Wash Noise Campaign', href: '/caxton-street-car-wash-campaign/' },
  { label: 'Report', href: '/report/' },
  { label: 'Find Help', href: '/find-help/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerNav: NavLink[] = [
  ...primaryNav,
  { label: 'Privacy Policy', href: '/legal/privacy-policy/' },
  { label: 'Cookie Policy', href: '/legal/cookie-policy/' },
  { label: 'Terms of Use', href: '/legal/terms-of-use/' },
];

export type SocialLink = {
  platform: string;
  handle: string;
  url: string;
  icon: string; // astro-icon name from the simple-icons set
};

// Confirm exact handle URLs before launch — some platforms may need the
// registered handle verified as it can differ from the assumed pattern.
export const socialLinks: SocialLink[] = [
  { platform: 'TikTok', handle: '@Plaistovian', url: 'https://www.tiktok.com/@Plaistovian', icon: 'simple-icons:tiktok' },
  { platform: 'Substack', handle: '@Plaistovian', url: 'https://Plaistovian.substack.com', icon: 'simple-icons:substack' },
  { platform: 'Bluesky', handle: '@Plaistovian', url: 'https://bsky.app/profile/Plaistovian.bsky.social', icon: 'simple-icons:bluesky' },
  { platform: 'X (Twitter)', handle: '@Plaistovian', url: 'https://x.com/Plaistovian', icon: 'simple-icons:x' },
  { platform: 'Threads', handle: '@Plaistovian', url: 'https://www.threads.net/@Plaistovian', icon: 'simple-icons:threads' },
  { platform: 'Facebook', handle: 'Cllr John Morris', url: 'https://www.facebook.com/share/1BUcTGDnam/', icon: 'simple-icons:facebook' },
  { platform: 'Instagram', handle: '@cllr.johnmorris', url: 'https://www.instagram.com/cllr.johnmorris?igsh=MWxpaHliZHpxYWVhNw==', icon: 'simple-icons:instagram' },
];

export type ReportService = {
  label: string;
  description: string;
  url: string;
  icon: string; // astro-icon name from the mdi set
};

// Direct links to Newham Council's own "Report It" forms — an A-Z modelled on
// newham.gov.uk/report. This site doesn't process these reports itself; every
// button hands off straight to the council's official reporting mechanism.
export const reportServices: ReportService[] = [
  { label: 'Abandoned vehicles', description: 'Report a vehicle that appears to be abandoned on the road or council land.', url: 'https://www.newham.gov.uk/transport-streets/new-roads-pavements/7', icon: 'mdi:car-off' },
  { label: 'Anti-social behaviour', description: 'Report anti-social behaviour, harassment, or nuisance affecting you or your neighbourhood.', url: 'https://www.newham.gov.uk/public-health-safety/anti-social-nuisance-behaviour', icon: 'mdi:account-alert' },
  { label: 'Blocked drains & sewers', description: 'Report a blocked or overflowing drain or sewer.', url: 'https://www.newham.gov.uk/public-health-safety/drains-sewers/3', icon: 'mdi:water-pump' },
  { label: 'Business Rates — change of address', description: 'Tell the council about a change of address for Business Rates.', url: 'https://newham-self.achieveservice.com/service/Business_Rates_Change_of_address', icon: 'mdi:office-building-marker' },
  { label: "Change of circumstances", description: "Tell the council about a change that affects your benefits, Council Tax, or other account details.", url: 'https://www.newham.gov.uk/advice-support-benefits/tell-us-change/1', icon: 'mdi:account-edit' },
  { label: 'Fly-tipping', description: 'Report fly-tipped rubbish for removal.', url: 'https://www.newham.gov.uk/public-health-safety/fly-tipping-reporting-removal%E2%80%AF/1', icon: 'mdi:dump-truck' },
  { label: 'Fraud', description: 'Report suspected fraud against the council, such as Council Tax, benefit, or Business Rates fraud.', url: 'https://www.newham.gov.uk/advice-support-benefits/report-fraud/1', icon: 'mdi:shield-alert' },
  { label: 'Housing repairs', description: 'Report a repair needed in a council-owned home.', url: 'https://www.newham.gov.uk/housing-homes-homelessness/repairs-1', icon: 'mdi:wrench' },
  { label: 'Missed bin / bulky waste collection', description: 'Report a missed bin collection or book a bulky waste collection.', url: 'https://newham-self.achieveservice.com/en/service/Missed_bulky_waste_collection', icon: 'mdi:truck-outline' },
  { label: 'Noise problems', description: 'Report a noise nuisance, such as loud music, building work, or barking dogs.', url: 'https://www.newham.gov.uk/public-health-safety/noise-problems-reporting/1', icon: 'mdi:volume-high' },
  { label: 'Parking permits', description: 'Apply for, renew, or manage a resident or visitor parking permit.', url: 'https://www.newham.gov.uk/parking-permits', icon: 'mdi:parking' },
  { label: 'Planning enforcement', description: 'Report a suspected breach of planning control, such as unauthorised building work.', url: 'https://www.newham.gov.uk/planning-development-conservation/planning-enforcement/1', icon: 'mdi:file-document-alert' },
  { label: 'Potholes & road/pavement damage', description: 'Report a pothole or damage to a road or pavement.', url: 'https://www.newham.gov.uk/transport-streets/new-roads-pavements/6?documentId=31&categoryId=20149', icon: 'mdi:road-variant' },
  { label: 'Recycling & rubbish collections', description: 'Find your bin collection day or report a problem with your recycling or rubbish collection.', url: 'https://www.newham.gov.uk/rubbish-recycling-waste/recycling-rubbish-collections/2', icon: 'mdi:recycle' },
  { label: 'Street cleansing', description: 'Report a street that needs cleaning, such as litter or street sweeping.', url: 'https://my.newham.gov.uk/Report-It/streetcleansinggeneral/', icon: 'mdi:broom' },
  { label: 'Street lighting', description: 'Report a broken, flickering, or faulty streetlight.', url: 'https://my.newham.gov.uk/Report-It/Street-Lighting/', icon: 'mdi:lightbulb-on-outline' },
  { label: 'Tree management', description: 'Report a problem with a council-owned tree, or make an enquiry about tree works.', url: 'https://www.newham.gov.uk/public-health-safety/tree-management', icon: 'mdi:tree' },
];

export const helpCategories = [
  {
    title: 'Housing',
    description: 'Repairs, damp and mould, overcrowding, temporary accommodation, and disputes with the council or housing associations.',
    icon: 'mdi:home-outline',
  },
  {
    title: 'Council Tax & Benefits',
    description: 'Council Tax queries and support, Housing Benefit, Council Tax Reduction, and help accessing other financial support.',
    icon: 'mdi:cash-multiple',
  },
  {
    title: 'Planning & Development',
    description: 'Local planning applications, objections and support, and questions about development affecting your street.',
    icon: 'mdi:office-building-outline',
  },
  {
    title: 'Streets, Bins & Recycling',
    description: 'Missed bin collections, fly-tipping, street cleaning, potholes, streetlighting, and other environmental issues.',
    icon: 'mdi:delete-outline',
  },
  {
    title: 'Anti-Social Behaviour',
    description: 'Noise, harassment, and anti-social behaviour affecting you, your family, or your neighbourhood.',
    icon: 'mdi:shield-alert-outline',
  },
  {
    title: 'Anything Else Council-Related',
    description: "If it isn't listed here, get in touch anyway — if I can't help directly, I'll point you to someone who can.",
    icon: 'mdi:chat-outline',
  },
];
