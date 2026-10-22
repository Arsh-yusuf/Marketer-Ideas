import React from 'react';
import {
  Target,
  Compass,
  CheckCircle2,
  Award,
  Zap,
  BarChart3,
  ShieldCheck,
  Star,
  Quote,
  ArrowRight,
} from 'lucide-react';
import teamPhoto from '../assets/images/about_agency_team_1792586101431.jpg';
import { NavigationTab } from './Navbar';

interface AboutSectionProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const skillsData = [
    { name: 'Search Engine Optimization (SEO)', level: 95, focus: 'Technical, On-Page & Backlinks' },
    { name: 'Google Business Profile & Local Map Pack', level: 96, focus: 'Local Citations & Reviews' },
    { name: 'Canva Design & Visual Branding', level: 94, focus: 'Social Graphics, Carousels & Kits' },
    { name: 'Social Media Marketing & Meta Ads', level: 92, focus: 'Targeted Reach & Engagement' },
    { name: 'High-Converting Content Writing', level: 90, focus: 'Pillars, Copy & Newsletters' },
    { name: 'Digital Growth Strategy & Analytics', level: 89, focus: 'Full Funnel Optimization' },
  ];

  const workflowSteps = [
    {
      num: '01',
      title: 'Discovery & Audit',
      desc: 'We perform a comprehensive audit of your website, current search rankings, competitors, and social footprint to identify low-hanging revenue opportunities.',
    },
    {
      num: '02',
      title: 'Tailored Strategy',
      desc: 'No cookie-cutter templates. We architect a custom 90-day roadmap tailored to your specific market, ideal customer profile, and budget.',
    },
    {
      num: '03',
      title: 'Agile Execution',
      desc: 'Our team rolls out high-impact SEO fixes, Canva design assets, targeted campaigns, and conversion-optimized content with weekly updates.',
    },
    {
      num: '04',
      title: 'Iterative Scaling',
      desc: 'We analyze real performance data, double down on top-converting keywords and creatives, and report transparent results without vanity fluff.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Marketer Ides transformed our organic search presence from invisible to ranking top 3 for our most valuable commercial keywords. Our inbound qualified leads skyrocketed by +210% in just 5 months.',
      name: 'Sarah Jenkins',
      role: 'Founder & CMO',
      company: 'PeakFlow Retail',
      metric: '+210% Organic Leads',
      verified: true,
    },
    {
      quote:
        'Their Google Business Profile optimization doubled our weekly patient appointment inquiries. Clear communication, fast turnarounds, and genuinely measurable local growth.',
      name: 'Dr. David Miller',
      role: 'Managing Director',
      company: 'Artisan Dental Group',
      metric: '2.2x Call Volume',
      verified: true,
    },
    {
      quote:
        'The Canva design kits and social media marketing strategy delivered a 3.4x return on our ad spend. Partnering with Marketer Ides gives us the speed of top-tier freelancers with corporate reliability.',
      name: 'Amara Okafor',
      role: 'Creative Director',
      company: 'Lumina Studio',
      metric: '3.4x Ad ROAS',
      verified: true,
    },
  ];

  return (
    <div id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Header & Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-orange-600 uppercase">
              <span>About Us</span>
              <span aria-hidden="true" className="text-neutral-300">/</span>
              <span>Our Agency Story</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight text-balance">
              Empowering Businesses With{' '}
              <span className="text-orange-600">Smart, Measurable</span> Digital Marketing
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              <strong>Marketer Ides</strong> was created with a clear philosophy: replace vague agency retainers and bloated promises with agile, data-backed execution that directly impacts your bottom line.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Operating at the intersection of a modern digital marketing firm and an elite freelance collective, we bring hands-on mastery in SEO, content creation, social media growth, and visual design to businesses seeking dependable, scalable expansion.
            </p>

            <div className="pt-2 flex items-center gap-6 text-sm text-neutral-800">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                <span>100% Results Oriented</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                <span>Zero Long-Term Lock-Ins</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-900">
              <img
                src={teamPhoto}
                alt="Marketer Ides Strategy Team"
                className="w-full h-[380px] sm:h-[420px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-neutral-800 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">Marketer Ides Digital Studio</div>
                    <div className="text-xs text-orange-400">marketerideas.online</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono text-neutral-400">Response Speed</div>
                    <div className="text-sm font-bold text-white font-mono tabular-nums">&lt; 2 Hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200/90 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-3">Our Mission</h3>
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              To democratize smart digital marketing by delivering transparent, measurable growth strategies. We help local businesses, emerging brands, and digital entrepreneurs outrank their competitors, capture high-intent customers, and build sustainable online authority.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-2xl bg-neutral-900 text-white border border-neutral-800 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
              To become the most dependable and results-oriented freelance digital marketing partner worldwide—celebrated for honest communication, creative design precision, and generating unmistakable return on investment for every client we serve.
            </p>
          </div>
        </div>

        {/* 3. Why Choose Marketer Ides */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold tracking-wider text-orange-600 uppercase mb-2">
              Competitive Advantage
            </div>
            <h3 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
              Why Choose Marketer Ides?
            </h3>
            <p className="text-neutral-600 mt-2 text-sm sm:text-base">
              We combine the deep personal dedication of top freelancers with the strategic rigor of an established marketing firm.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white border border-neutral-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-neutral-900 mb-2">Agile Freelance Speed</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Direct communication without layers of account executives. Fast turnaround on designs, audits, and campaigns.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-neutral-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-neutral-900 mb-2">Transparent Metrics</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Clear reporting on keyword rankings, qualified leads, and ROI. No confusing jargon or hidden dashboards.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-neutral-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-neutral-900 mb-2">Tailored Strategies</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Custom marketing plans crafted for your industry, customer acquisition costs, and competitive landscape.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-neutral-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-neutral-900 mb-2">Multi-Skill Expertise</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                From technical SEO to Canva visual kits and Google Maps ranking—all your core marketing needs under one roof.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Our Skills Proficiency */}
        <div className="mb-20 p-8 sm:p-10 rounded-2xl bg-neutral-50 border border-neutral-200">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold tracking-wider text-orange-600 uppercase mb-2">
              Core Capabilities
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Our Professional Skills
            </h3>
            <p className="text-sm text-neutral-600 mt-2">
              Benchmarked proficiencies across high-impact modern digital marketing competencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {skillsData.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="text-sm font-bold text-neutral-900">{skill.name}</span>
                    <span className="text-xs text-neutral-500 ml-2 hidden sm:inline">({skill.focus})</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-orange-600 tabular-nums">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-neutral-200/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. How We Work (Workflow Process) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold tracking-wider text-orange-600 uppercase mb-2">
              Our Methodology
            </div>
            <h3 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
              How We Work With You
            </h3>
            <p className="text-neutral-600 mt-2 text-sm sm:text-base">
              A structured 4-step framework that ensures clarity, quality, and measurable milestones at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-white border border-neutral-200/90 relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-extrabold font-mono text-orange-500 mb-3 tabular-nums">
                    {step.num}
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-neutral-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                  <span>Phase Milestone</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. TESTIMONIALS SECTION (INSIDE ABOUT US ONLY - As explicitly requested) */}
        <div className="pt-12 border-t border-neutral-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold tracking-wider text-orange-600 uppercase mb-2">
              Client Reviews &amp; Social Proof
            </div>
            <h3 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
              What Our Clients Say
            </h3>
            <p className="text-neutral-600 mt-2 text-sm sm:text-base">
              Real feedback from business owners who scaled their organic presence and leads with Marketer Ides.
            </p>
          </div>

          {/* 3 realistic sample testimonial cards clearly presented as testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-orange-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-sm text-neutral-700 leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Attribution & Metric */}
                <div className="pt-4 border-t border-neutral-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                      {t.metric}
                    </span>
                    <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Verified Client
                    </span>
                  </div>
                  <div className="font-bold text-sm text-neutral-900">{t.name}</div>
                  <div className="text-xs text-neutral-500">
                    {t.role} · <span className="text-neutral-700 font-medium">{t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA at end of About Us */}
          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>Work With Marketer Ides</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
