import { ClientCaseStudy, GrowthPipelineStep, FAQItem } from './types';

export const BRAND_COLORS = {
  blackBase: '#121212',
  deepCharcoal: '#0b0b0e',
  electricPurple: '#8A2BE2',
  neonViolet: '#a855f7',
  brightWhite: '#FFFFFF',
  slateGray: '#94a3b8',
};

export const GROWTH_PIPELINE_STEPS: GrowthPipelineStep[] = [
  {
    step: 1,
    title: 'High-Retention Scripting & Cinematic Production',
    focus: 'Watch Time & Authority',
    duration: 'Days 1–10',
    description: 'We analyze your core business messaging and engineer script structures that hook passive viewers within the first 15 seconds. We handle full cinematic editing, sound design, and visual pacing.',
    deliverables: [
      '4x High-retention long-form YouTube masterclasses per month',
      'Custom visual storytelling & dynamic pacing architecture',
      'Professional audio mastering & studio-grade color grading'
    ],
    proTip: 'Retention is the currency of YouTube algorithms. Increasing average view duration from 35% to 60%+ doubles organic impressions within 72 hours.'
  },
  {
    step: 2,
    title: 'Thumbnail CTR Engineering & Title Psychology',
    focus: 'Click-Through Rate (CTR)',
    duration: 'Days 11–20',
    description: 'Even the greatest video fails without a click. We design high-contrast obsidian and electric purple visual thumbnails engineered with curiosity gaps and authority triggers to command 8%+ CTRs.',
    deliverables: [
      '3x A/B tested custom vector thumbnails per video launch',
      'Data-backed title psychology packaging & SEO optimization',
      'Real-time CTR monitoring & 24-hour visual pivots'
    ],
    proTip: 'We never use generic stock elements. Every thumbnail is custom-tailored to highlight your institutional authority and standout visual branding.'
  },
  {
    step: 3,
    title: 'Client Acquisition Funnel & Booking Systems',
    focus: 'Monetization & ROI',
    duration: 'Days 21–30',
    description: 'We turn viewers into high-value clients. We build custom backend video funnels, automated lead magnets, and seamless calendar integration to book qualified discovery calls directly from YouTube descriptions.',
    deliverables: [
      'Automated client application landing funnel',
      'Description link optimization & pinned comment lead captures',
      'Guaranteed 5–10 paying clients acquired or your money back'
    ],
    proTip: 'By qualifying leads inside the video script itself, your closing rate on client discovery calls increases by over 300%.'
  }
];

export const CLIENT_CASE_STUDIES: ClientCaseStudy[] = [
  {
    id: 'client-example-1',
    name: 'Client Video Quality Example #1',
    url: 'https://youtu.be/fdEDSfAoow8',
    role: '4K Cinematic Production & Custom Overlays',
    category: 'trading-finance',
    serviceDelivered: 'Institutional 4K production, custom visual mapping overlays, and high-contrast color grading.',
    keyMetrics: [
      '+480% Organic YouTube Watch Time',
      '14 New High-Value Clients Acquired in 30 Days',
      '8.4% Average Thumbnail Click-Through Rate (CTR)'
    ],
    description: 'For this premium client, we elevated their visual authority to attract high-value candidates. We engineered high-contrast visual breakdowns, custom 3D data mapping overlays, and dynamic pacing that converted passive viewers into loyal paying clients.',
    featuredTopic: 'Scaling Client Acquisition via High-Retention Video',
    badge: '14 CLIENTS ACQUIRED IN 30 DAYS',
    videoTitle: 'Client Example: High-Retention Production Quality & Visual Overlays',
    youtubeVideoId: 'fdEDSfAoow8'
  },
  {
    id: 'client-example-2',
    name: 'Client Video Quality Example #2',
    url: 'https://youtu.be/fzIEpGYIMiI',
    role: 'Dynamic Motion Graphics & Masterclass Editing',
    category: 'trading-finance',
    serviceDelivered: 'Cinematic masterclass editing, dynamic motion graphics, and fast-paced retention pacing.',
    keyMetrics: [
      '3.2M Total Views Across Shorts & Long-Form',
      '11 New Paying Clients Acquired in 24 Days',
      '$95,000 in New Course & Software Revenue Added'
    ],
    description: 'For this fast-paced education client, we transformed complex analytical concepts into immersive cinematic masterclasses. By integrating custom motion graphics, clean sound design, and structured narrative hooks, we drove immediate client conversions without relying on paid advertising.',
    featuredTopic: 'Dynamic Video Engineering for Fast-Scaling Brands',
    badge: '11 CLIENTS ACQUIRED IN 24 DAYS',
    videoTitle: 'Client Example: Dynamic Motion Graphics & Masterclass Editing',
    youtubeVideoId: 'fzIEpGYIMiI'
  },
  {
    id: 'client-example-3',
    name: 'Client Video Quality Example #3',
    url: 'https://youtu.be/x53jP-6M1b0',
    role: 'Minimalist Editorial Styling & Pristine Audio',
    category: 'mentorship-funnel',
    serviceDelivered: 'Minimalist obsidian visual aesthetics, editorial storytelling, and pristine sound design.',
    keyMetrics: [
      '62% Average View Duration on 20m+ Videos',
      '9 New High-Value Inner Circle Clients Acquired',
      'Zero Paid Ad Spend Required'
    ],
    description: 'This client built their brand around calm, disciplined leadership and mindset. We matched this ethos with minimalist obsidian color grading, editorial camera transitions, and studio-grade audio processing, establishing undisputed visual authority in their industry.',
    featuredTopic: 'Minimalist Editorial Production for High-Value Brands',
    badge: '9 CLIENTS ACQUIRED IN 28 DAYS',
    videoTitle: 'Client Example: Minimalist Editorial Production & Pristine Audio Quality',
    youtubeVideoId: 'x53jP-6M1b0'
  }
];

export const AGENCY_FAQS: FAQItem[] = [
  {
    question: 'Is there any guarantee?',
    answer: 'Yes. We aim to bring you 10–40 qualified leads per month — traders actively looking for a mentor — through our content system. If the agreed results are not achieved, you don\'t pay.',
    category: 'Guarantee'
  },
  {
    question: 'What services do you provide?',
    answer: 'We offer a done-for-you content system for traders. This includes content ideation, script outlines, video editing (long & short form), titles & thumbnails, and channel management — everything needed to turn content into inbound clients.',
    category: 'Services'
  }
];
