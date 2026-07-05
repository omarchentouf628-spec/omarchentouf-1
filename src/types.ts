export type TabType = 
  | 'overview' 
  | 'case-studies' 
  | 'guarantee'
  | 'brand-studio';

export interface ClientCaseStudy {
  id: string;
  name: string;
  url?: string;
  role: string;
  category: 'trading-finance' | 'business-coaching' | 'mentorship-funnel';
  serviceDelivered: string;
  keyMetrics: string[];
  description: string;
  featuredTopic?: string;
  badge?: string;
  videoTitle: string;
  youtubeVideoId?: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  clientsGuaranteed: string;
  deliverables: string[];
  turnaround: string;
  popular?: boolean;
}

export interface GrowthPipelineStep {
  step: number;
  title: string;
  focus: string;
  duration: string;
  description: string;
  deliverables: string[];
  proTip: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Guarantee' | 'Production' | 'Onboarding' | 'Services';
}
