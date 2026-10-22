import React, { useState } from 'react';
import {
  Share2,
  Search,
  PenTool,
  MapPin,
  Globe,
  Key,
  Palette,
  Target,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  category: 'seo' | 'social' | 'creative' | 'strategy';
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
  timeline: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'social-media-marketing',
    name: 'Social Media Marketing',
    shortDesc: 'Grow your brand presence, engage targeted audiences, and convert followers into loyal buyers across Instagram, Facebook, LinkedIn, and TikTok.',
    category: 'social',
    icon: Share2,
    deliverables: [
      'Data-backed monthly content calendar',
      'Targeted audience engagement & community growth',
      'Ad campaign management & ROI tracking',
    ],
    timeline: 'Ongoing / Monthly Retainer',
  },
  {
    id: 'seo',
    name: 'SEO (Search Engine Optimization)',
    shortDesc: 'Comprehensive search optimization to rank your business at the top of Google, driving high-converting organic organic traffic month after month.',
    category: 'seo',
    icon: Search,
    deliverables: [
      'Complete on-page and technical website audit',
      'High-authority backlink outreach strategy',
      'Core Web Vitals & speed optimization',
    ],
    timeline: '3 to 6-Month Roadmaps',
  },
  {
    id: 'content-writing',
    name: 'Content Writing',
    shortDesc: 'Persuasive, SEO-optimized articles, website copy, and lead magnets crafted to establish authority and turn readers into qualified leads.',
    category: 'creative',
    icon: PenTool,
    deliverables: [
      'Keyword-rich blog articles & pillar pages',
      'High-converting landing page copywriting',
      'Brand storytelling & informative newsletters',
    ],
    timeline: 'Weekly or Batch Delivery',
  },
  {
    id: 'google-business-profile',
    name: 'Google Business Profile Optimization',
    shortDesc: 'Dominate Google Local Map Pack and nearby searches so neighborhood customers find, call, and visit your business first.',
    category: 'strategy',
    icon: MapPin,
    deliverables: [
      '100% verified profile optimization & category setup',
      'Local geo-tagging & photo updates',
      'Review generation & response management',
    ],
    timeline: '1-time setup + Monthly boost',
  },
  {
    id: 'website-seo',
    name: 'Website SEO',
    shortDesc: 'In-depth architecture, metadata, crawlability, and indexing fixes that guarantee search engine bots and human visitors love your site.',
    category: 'seo',
    icon: Globe,
    deliverables: [
      'Meta titles, descriptions & header tag hygiene',
      'Internal linking structure & XML sitemaps',
      'Mobile responsiveness & schema markup setup',
    ],
    timeline: '2 to 4-Week Sprint',
  },
  {
    id: 'keyword-research',
    name: 'Keyword Research',
    shortDesc: 'Uncover low-competition, high-intent buyer keywords your competitors are overlooking to capture ready-to-buy searchers.',
    category: 'seo',
    icon: Key,
    deliverables: [
      'Competitor keyword gap analysis',
      'Search volume & commercial intent scoring',
      'Prioritized content planning spreadsheet',
    ],
    timeline: '3 to 5 Business Days',
  },
  {
    id: 'canva-design',
    name: 'Canva Design',
    shortDesc: 'Stunning visual assets, branded social media templates, banners, brochures, and pitch decks designed fast with clean modern aesthetics.',
    category: 'creative',
    icon: Palette,
    deliverables: [
      'Reusable brand templates & social post kits',
      'Infographics, carousel slides & banners',
      'Editable Canva source links for your team',
    ],
    timeline: '2 to 3 Business Days',
  },
  {
    id: 'digital-marketing-strategy',
    name: 'Digital Marketing Strategy',
    shortDesc: 'Holistic growth roadmaps that align your budget, channels, audience targeting, and funnel design for maximum sustainable revenue.',
    category: 'strategy',
    icon: Target,
    deliverables: [
      'Custom 90-day multi-channel roadmap',
      'Customer persona & competitor benchmarks',
      'KPI dashboards & weekly progress advisory',
    ],
    timeline: 'Full Agency Roadmap',
  },
];

import { NavigationTab } from './Navbar';

interface ServicesSectionProps {
  onNavigate: (tab: NavigationTab) => void;
  onSelectService?: (serviceName: string) => void;
  isStandalonePage?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onNavigate,
  onSelectService,
  isStandalonePage = false,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'seo' | 'social' | 'creative' | 'strategy'>('all');

  const filteredServices = servicesData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const handleInquire = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    onNavigate('contact');
  };

  return (
    <section id="services" className={`py-16 lg:py-24 ${isStandalonePage ? 'bg-neutral-50/50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-orange-600 uppercase mb-3">
            <span>What We Do</span>
            <span aria-hidden="true" className="text-neutral-300">/</span>
            <span>Performance Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight text-balance">
            Specialized Digital Services Designed to{' '}
            <span className="text-orange-600">Drive Revenue</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 text-balance leading-relaxed">
            Every business has unique growth bottlenecks. Explore our 8 core specialized services crafted to scale your organic presence, customer engagement, and sales.
          </p>

          {/* Interactive Filter Tabs (Zero-Pill Discipline: Segmented Controls) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-neutral-100 rounded-xl max-w-xl mx-auto border border-neutral-200/80">
            {[
              { id: 'all', label: 'All Services (8)' },
              { id: 'seo', label: 'SEO & Search' },
              { id: 'social', label: 'Social Media' },
              { id: 'creative', label: 'Content & Design' },
              { id: 'strategy', label: 'Strategy & Local' },
            ].map((tab) => {
              const active = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-white text-orange-600 shadow-sm border border-neutral-200/80'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid (8 Services Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-neutral-200/90 hover:border-orange-500/40 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Service Index & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-400 tabular-nums">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-orange-600 transition-colors mb-2.5">
                    {service.name}
                  </h3>

                  {/* Short easy-to-understand description */}
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 pt-4 border-t border-neutral-100 mb-6">
                    <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                      Key Deliverables:
                    </div>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action: Functional CTA */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-neutral-500">
                    {service.timeline}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleInquire(service.name)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 group-hover:text-orange-700 hover:underline cursor-pointer"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Agency Guarantee Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Need a Customized Digital Marketing Package?
            </h4>
            <p className="text-sm text-neutral-400">
              Combine SEO, Canva Design, and Social Media Marketing into one seamless monthly plan.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleInquire('Customized Full Agency Package')}
            className="px-6 py-3 text-sm font-semibold text-neutral-900 bg-orange-500 hover:bg-orange-400 rounded-xl shadow-md transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            Request Custom Proposal
          </button>
        </div>

      </div>
    </section>
  );
};
