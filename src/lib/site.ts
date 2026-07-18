export const site = {
  name: 'Cllr John Morris',
  // Party affiliation to be confirmed with client before launch — kept neutral for now.
  role: 'Local Councillor for Canning Town South',
  council: 'London Borough of Newham',
  ward: 'Canning Town South',
  url: 'https://www.cllrjohnmorris.co.uk',
  // Placeholder contact details — replace with real details before launch.
  email: 'john.morris@newham.gov.uk',
  phone: '020 7000 0000',
  officeAddress: 'Newham Dockside, 1000 Dockside Road, London E16 2QU',
  surgery: {
    frequency: 'Third Saturday of every month, 10:00am–12:00pm',
    location: 'Canning Town South Ward Surgery — venue to be confirmed',
    note: 'Surgery details are provisional. No appointment needed — drop in, or contact Cllr Morris to arrange a convenient time.',
  },
  // Required for UK political communications — wording must be confirmed with client before launch.
  imprint: 'Promoted by John Morris on behalf of John Morris, both of Newham Dockside, 1000 Dockside Road, London E16 2QU.',
  newhamProfileUrl: 'https://mgov.newham.gov.uk/mgMemberIndex.aspx',
};

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Find Help', href: '/find-help/' },
  { label: 'News', href: '/news/' },
  { label: 'About', href: '/about/' },
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

export const helpCategories = [
  {
    title: 'Housing',
    description: 'Repairs, damp and mould, overcrowding, temporary accommodation, and disputes with the council or housing associations.',
    icon: 'home',
  },
  {
    title: 'Council Tax & Benefits',
    description: 'Council Tax queries and support, Housing Benefit, Council Tax Reduction, and help accessing other financial support.',
    icon: 'coins',
  },
  {
    title: 'Planning & Development',
    description: 'Local planning applications, objections and support, and questions about development affecting your street.',
    icon: 'building',
  },
  {
    title: 'Streets, Bins & Recycling',
    description: 'Missed bin collections, fly-tipping, street cleaning, potholes, streetlighting, and other environmental issues.',
    icon: 'bin',
  },
  {
    title: 'Anti-Social Behaviour',
    description: 'Noise, harassment, and anti-social behaviour affecting you, your family, or your neighbourhood.',
    icon: 'shield',
  },
  {
    title: 'Anything Else Council-Related',
    description: "If it isn't listed here, get in touch anyway — if I can't help directly, I'll point you to someone who can.",
    icon: 'chat',
  },
];
