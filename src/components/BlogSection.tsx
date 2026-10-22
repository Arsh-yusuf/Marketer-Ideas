import React, { useState } from 'react';
import {
  Search,
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  X,
  Share2,
  CheckCircle2,
  Sparkles,
  Tag,
} from 'lucide-react';
import seoImage from '../assets/images/blog_seo_strategy_1792586584463.jpg';
import designImage from '../assets/images/blog_creative_design_1792586600212.jpg';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'seo' | 'social' | 'content' | 'design' | 'strategy';
  categoryLabel: string;
  readTime: string;
  date: string;
  image?: string;
  content: {
    intro: string;
    sections: Array<{ heading: string; body: string; checklist?: string[] }>;
    conclusion: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    id: 'local-seo-map-pack-2026',
    title: 'The 2026 Google Local Map Pack Playbook: Dominate Nearby Searches',
    excerpt: 'Step-by-step optimization strategies to rank your business in the top 3 of Google Maps and capture ready-to-call local customers.',
    category: 'seo',
    categoryLabel: 'SEO & Local Search',
    readTime: '6 min read',
    date: 'Oct 18, 2026',
    image: seoImage,
    content: {
      intro: 'For service-based businesses, clinics, and local stores, the Google Local 3-Pack accounts for over 44% of total clicks on commercial queries. Ranking here is often the difference between struggling for inquiries and having an overflowing phone line.',
      sections: [
        {
          heading: '1. Primary Category Hygiene & Secondary Precision',
          body: 'Google weights the primary business category heavier than almost any other ranking factor. Ensure your primary category aligns with your primary revenue driver, then add up to 5 hyper-specific secondary categories.',
          checklist: [
            'Audit your top 3 ranking competitors using Google Maps inspector tools',
            'Match your exact primary category to the market leader',
            'Remove unrelated secondary categories that dilute relevancy',
          ],
        },
        {
          heading: '2. Geo-Tagged Photos & Weekly Review Velocity',
          body: 'Google prioritizes active profiles. Profiles that upload genuine team photos, client before-and-after work, and answer customer reviews within 24 hours see an immediate ranking boost in localized search radii.',
          checklist: [
            'Maintain a regular review generation sequence post-service',
            'Respond to all reviews using target keywords naturally in replies',
            'Upload at least 3 high-resolution authentic photos every week',
          ],
        },
        {
          heading: '3. Local Citations & Consistent NAP Consistency',
          body: 'Name, Address, and Phone number (NAP) data must match identically across Yelp, Bing Places, Apple Maps, and local chamber directories.',
        },
      ],
      conclusion: 'Local SEO is an ongoing compound investment. Businesses that consistently nurture their Google Business Profile outrank legacy competitors with bigger budgets every single quarter.',
    },
  },
  {
    id: 'canva-design-social-graphics',
    title: 'High-Converting Canva Design: 7 Rules for Social Graphics That Sell',
    excerpt: 'How to use Canva to design clean, modern branding assets and social carousels that stop the scroll and drive clicks without hiring expensive creative agencies.',
    category: 'design',
    categoryLabel: 'Canva & Design',
    readTime: '5 min read',
    date: 'Oct 15, 2026',
    image: designImage,
    content: {
      intro: 'Visual design in digital marketing has one primary objective: earn attention and deliver clarity in under 1.5 seconds. Learn how our studio produces high-converting Canva assets for client campaigns.',
      sections: [
        {
          heading: '1. The 3-Color Rule & Contrast Math',
          body: 'Most DIY designs look cluttered because they use too many colors. Standardize on 60% dominant neutral (white or dark slate), 30% structural background, and 10% high-intent accent (like brand orange).',
          checklist: [
            'Ensure high text contrast against image backgrounds',
            'Never place thin white text over busy photography without a scrim overlay',
            'Stick to 2 brand fonts maximum for headers and body copy',
          ],
        },
        {
          heading: '2. The First Slide Hook in Multi-Image Carousels',
          body: 'On LinkedIn and Instagram, slide 1 is 90% of your performance. Treat slide 1 as an editorial magazine cover: large bold headline, one clear idea, and an intriguing open loop.',
          checklist: [
            'Headline font size should be readable on mobile without zooming',
            'Add subtle swipe arrows or slide counters (1/7) to trigger curiosity',
            'Keep slide 1 copy under 12 words',
          ],
        },
      ],
      conclusion: 'Design is not mere decoration—it is the visual packaging of your value proposition. Consistent, clean typography and disciplined color balance win trust faster than flashy animations.',
    },
  },
  {
    id: 'seo-vs-paid-ads-guide',
    title: 'SEO vs Paid Advertising: Where Should Growing Businesses Invest First?',
    excerpt: 'A pragmatic framework to balance short-term ad customer acquisition with long-term organic search asset building based on your cash flow.',
    category: 'strategy',
    categoryLabel: 'Strategy & ROI',
    readTime: '7 min read',
    date: 'Oct 11, 2026',
    content: {
      intro: 'One of the most frequent questions business owners ask Marketer Ides is: "Should I run Meta & Google Ads, or should I invest in Search Engine Optimization?" The real answer depends on your customer payback period and margin profile.',
      sections: [
        {
          heading: 'When to Prioritize Paid Ads First',
          body: 'If you have an urgent need for customer validation, clear unit economics, and an offer with high immediate profit, paid ads give instant traffic within 24 to 48 hours.',
          checklist: [
            'You have at least $1,500/month dedicated ad spend buffer',
            'Your checkout or lead inquiry funnel is already tested and converting',
            'You need immediate demand while organic foundations build',
          ],
        },
        {
          heading: 'When to Prioritize SEO & Organic Search First',
          body: 'If you want to build long-term enterprise value, reduce customer acquisition cost over time, and rank for high-intent search terms where users actively search to buy.',
          checklist: [
            'Ad costs in your niche are rising annually',
            'Customers perform extensive Google research before making a buying decision',
            'You want traffic that keeps coming even if you pause ad spend',
          ],
        },
      ],
      conclusion: 'The winning approach is hybrid: use targeted paid advertising for immediate validation while investing in SEO and content assets that become your compounding competitive advantage.',
    },
  },
  {
    id: 'high-converting-landing-page-copy',
    title: 'The Anatomy of a High-Converting Landing Page: Copywriting Tactics',
    excerpt: 'Writing website copy that transforms passive visitors into booked calls and paying customers. Eliminate fluff and speak directly to customer pain points.',
    category: 'content',
    categoryLabel: 'Content & Copywriting',
    readTime: '6 min read',
    date: 'Oct 08, 2026',
    content: {
      intro: 'Great copywriting does not sound clever; it sounds clear. When a visitor lands on your page, they have three silent questions: "What is this?", "What is in it for me?", and "What do I do next?"',
      sections: [
        {
          heading: '1. The Single-Sentence Hero Value Statement',
          body: 'Never use generic corporate slogans like "Empowering your journey." Instead, state the exact outcome you deliver, who it is for, and how quickly it happens.',
          checklist: [
            'Subject + Outcome + Risk Reversal',
            'Zero corporate jargon or vague adjectives',
            'Single primary CTA button with clear action verb',
          ],
        },
        {
          heading: '2. Addressing Objections Above the Fold',
          body: 'State the price expectation, timeframe, and deliverables clearly. The more specific your service details, the higher the quality of inquiries you attract.',
        },
      ],
      conclusion: 'Audit your landing page today: count the number of times you say "We" vs "You". Rewriting your copy from your client’s perspective is the highest ROI hour you can spend.',
    },
  },
  {
    id: 'instagram-algorithm-updates-2026',
    title: 'Instagram Algorithm Updates: Organic Reach Strategies for 2026',
    excerpt: 'How the latest algorithmic shifts prioritize DM shares and original value over superficial likes, and how freelancers and businesses can adapt.',
    category: 'social',
    categoryLabel: 'Social Media',
    readTime: '5 min read',
    date: 'Oct 04, 2026',
    content: {
      intro: 'The era of chasing vanity likes is officially over. Today’s social platforms judge content quality by two primary metrics: Saves (bookmarking value) and Direct Message Shares (peer-to-peer recommendation).',
      sections: [
        {
          heading: 'Designing for the "Send to a Friend" Reflex',
          body: 'Ask yourself before publishing: "Why would someone send this post to their business partner or coworker?" Actionable checklists, industry benchmarks, and contrarian breakdowns generate 5x more shares.',
          checklist: [
            'Create shareable infographics and data summaries',
            'Include practical takeaway templates in captions',
            'Engage with industry accounts within the first 60 minutes of posting',
          ],
        },
      ],
      conclusion: 'Focus on depth rather than daily filler content. Three high-value educational carousels per week will consistently outperform daily low-effort posts.',
    },
  },
  {
    id: 'keyword-research-buyer-intent',
    title: 'Keyword Research Mastery: Uncovering Low-Competition Buyer Keywords',
    excerpt: 'Find the hidden search terms that your competitors overlook. Target keywords with commercial intent that actually produce inbound client revenue.',
    category: 'seo',
    categoryLabel: 'SEO & Search',
    readTime: '8 min read',
    date: 'Sep 29, 2026',
    content: {
      intro: 'Too many marketing teams waste months trying to rank for broad, high-volume keywords like "digital marketing" or "shoes". But high-volume keywords rarely convert. The fortune is in commercial long-tail queries.',
      sections: [
        {
          heading: '1. Informational vs Commercial Intent Classification',
          body: 'A user searching "what is seo" is looking for a definition. A user searching "best seo agency for dental clinics in chicago" has their credit card ready. Target queries with modifiers like "cost", "hire", "service", and "near me".',
          checklist: [
            'Filter for keyword search queries containing transactional modifiers',
            'Examine the current top 5 SERP results to analyze content format',
            'Build dedicated service landing pages for each cluster',
          ],
        },
      ],
      conclusion: 'Smart keyword research is the foundation of digital marketing. When you answer the exact questions your ideal prospects are asking, conversion rates jump naturally.',
    },
  },
];

interface BlogSectionProps {
  onNavigate: (tab: 'home' | 'services' | 'about' | 'blog' | 'contact') => void;
  onSelectService?: (serviceName: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onNavigate, onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'seo', label: 'SEO & Search' },
    { id: 'social', label: 'Social Media' },
    { id: 'content', label: 'Content Writing' },
    { id: 'design', label: 'Canva & Design' },
    { id: 'strategy', label: 'Growth Strategy' },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleConsultAction = (topic: string) => {
    setSelectedPost(null);
    if (onSelectService) {
      onSelectService(topic);
    }
    onNavigate('contact');
  };

  return (
    <div id="blog" className="py-16 lg:py-24 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-orange-600 uppercase mb-3">
            <span>Marketer Ides Blog</span>
            <span aria-hidden="true" className="text-neutral-300">/</span>
            <span>Growth Insights &amp; Guides</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight text-balance">
            Actionable Strategies to{' '}
            <span className="text-orange-600">Scale Your Business</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 text-balance leading-relaxed">
            Practical advice, real case analyses, and tactical guides on SEO, social media marketing, content writing, and Canva design from our agency team.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search marketing articles & guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-neutral-300 rounded-xl text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-xs"
            />
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-orange-500 text-white shadow-xs'
                      : 'bg-white text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 border border-neutral-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-neutral-200 p-8">
            <BookOpen className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-neutral-800">No matching articles found</h3>
            <p className="text-sm text-neutral-500 mt-1">
              Try adjusting your search query or choosing another category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-orange-600 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group cursor-pointer flex flex-col justify-between rounded-2xl bg-white border border-neutral-200/90 hover:border-orange-500/40 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                <div>
                  {/* Article Image or Styled Gradient Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 flex items-center justify-center p-6 text-center">
                        <div className="space-y-1">
                          <div className="text-orange-500 text-xs font-mono font-bold uppercase tracking-wider">
                            {post.categoryLabel}
                          </div>
                          <div className="text-sm font-semibold text-white/90 line-clamp-2">
                            {post.title}
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md text-orange-400 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-neutral-800">
                      {post.categoryLabel}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Unboxed Metadata Discipline */}
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                      <span>{post.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-orange-600 font-medium">Marketer Ides Team</span>
                    </div>

                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-orange-600 transition-colors leading-snug mb-3">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-orange-600">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Agency Lead Magnet / Consultation Strip */}
        <div className="mt-16 p-8 rounded-3xl bg-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-800">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Free Marketing Strategy Session</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white">
              Want us to implement these tactics for your business?
            </h4>
            <p className="text-sm text-neutral-400 max-w-xl">
              Get a customized marketing audit tailored to your niche. We analyze your website, rankings, and competitor gaps.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 text-sm font-semibold text-neutral-900 bg-orange-500 hover:bg-orange-400 rounded-xl shadow-md transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            Claim Free Audit &amp; Proposal
          </button>
        </div>

      </div>

      {/* Article Detail Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col">
            
            {/* Modal Header */}
            <div className="px-6 sm:px-8 py-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/70">
              <div className="flex items-center gap-2 text-xs text-orange-600 font-bold uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5" />
                <span>{selectedPost.categoryLabel}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
                aria-label="Close reader"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Article Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Unboxed Metadata */}
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span>Published {selectedPost.date}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedPost.readTime}</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-neutral-700">By Marketer Ides Editorial Team</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
                {selectedPost.title}
              </h1>

              {selectedPost.image && (
                <div className="rounded-2xl overflow-hidden border border-neutral-200 h-64 sm:h-80 w-full">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              {/* Introduction */}
              <div className="text-base text-neutral-700 leading-relaxed font-medium bg-orange-50/50 p-5 rounded-2xl border border-orange-100">
                {selectedPost.content.intro}
              </div>

              {/* Subsections */}
              {selectedPost.content.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3 pt-2">
                  <h3 className="text-xl font-bold text-neutral-900">
                    {sec.heading}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {sec.body}
                  </p>
                  {sec.checklist && (
                    <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 space-y-2">
                      <div className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                        Action Checklist:
                      </div>
                      {sec.checklist.map((item, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Conclusion */}
              <div className="pt-4 border-t border-neutral-100">
                <h4 className="text-base font-bold text-neutral-900 mb-2">Final Takeaway</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {selectedPost.content.conclusion}
                </p>
              </div>

              {/* Call to action card */}
              <div className="p-6 rounded-2xl bg-neutral-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-sm text-white">Need professional execution?</div>
                  <div className="text-xs text-neutral-400">
                    Let Marketer Ides handle your {selectedPost.categoryLabel} strategy directly.
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleConsultAction(selectedPost.title)}
                  className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-orange-500 hover:bg-orange-400 rounded-xl transition-all whitespace-nowrap cursor-pointer shrink-0"
                >
                  Consult Our Team
                </button>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500">
                Marketer Ides · <a href="https://marketerideas.online" target="_blank" rel="noreferrer" className="text-orange-600 font-semibold">marketerideas.online</a>
              </span>
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="px-4 py-2 text-xs font-semibold text-neutral-700 hover:text-neutral-900 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
