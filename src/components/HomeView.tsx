import React from 'react';
import { Hero } from './Hero';
import { servicesData } from './ServicesSection';
import {
  ArrowRight,
  TrendingUp,
  Award,
  Zap,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import teamPreviewPhoto from '../assets/images/about_agency_team_1792586101431.jpg';
import { NavigationTab } from './Navbar';

interface HomeViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onSelectService: (serviceName: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectService }) => {
  // Take 4 featured services for the Home Preview
  const previewServices = servicesData.slice(0, 4);

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Services Preview Section */}
      <section className="py-16 sm:py-20 bg-neutral-50/50 border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-orange-600 uppercase mb-2">
                <span>Featured Services</span>
                <span aria-hidden="true" className="text-neutral-300">/</span>
                <span>Marketer Ides Expertise</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                High-Impact Services We Deliver
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors group cursor-pointer self-start md:self-auto"
            >
              <span>Explore All 8 Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group hover:border-orange-500/40"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-orange-600 transition-colors mb-2">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-neutral-400">
                      Outcome Focused
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        onSelectService(service.name);
                        onNavigate('contact');
                      }}
                      className="text-xs font-bold text-orange-600 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="text-xs font-semibold tracking-wider text-orange-600 uppercase mb-2">
              The Marketer Ides Difference
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Why Forward-Thinking Businesses Choose Us
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              We eliminate traditional agency bloat and deliver razor-sharp execution with freelance responsiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-50/80 border border-neutral-200/80">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Measurable ROI First
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We prioritize strategies that directly produce phone calls, qualified leads, and purchases. No vanity follower metrics that fail to generate revenue.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-50/80 border border-neutral-200/80">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Freelance Speed &amp; Dedication
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Direct access to skilled practitioners. We iterate designs, publish optimizations, and deploy campaign updates in days, not quarterly cycles.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-50/80 border border-neutral-200/80">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                100% Honest Reporting
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Full transparency into your keyword rankings, traffic sources, and conversion funnels. You own all creative files, templates, and accounts.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Short About Us Preview */}
      <section className="py-16 sm:py-24 bg-neutral-50/50 border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg bg-neutral-900">
                <img
                  src={teamPreviewPhoto}
                  alt="Marketer Ides Agency Studio"
                  className="w-full h-[340px] sm:h-[380px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-orange-600 uppercase">
                <span>About Marketer Ides</span>
                <span aria-hidden="true" className="text-neutral-300">/</span>
                <span>Who We Are</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                A Modern Agency Built for Speed, Clarity, and Results
              </h2>

              <p className="text-base text-neutral-600 leading-relaxed">
                At Marketer Ides, we believe growth shouldn&apos;t be complicated. We collaborate with business owners, marketing leaders, and entrepreneurs to design bespoke campaigns across SEO, social channels, and branded visuals that build long-term market presence.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2.5 text-sm text-neutral-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Specialized in SEO, Google Business &amp; Social Lead Generation</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-neutral-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Custom Canva templates and high-converting marketing collateral</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-neutral-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Direct communication with your dedicated digital marketing strategist</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-neutral-900 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 text-orange-600" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. Call-To-Action Section on Home */}
      <section className="py-16 sm:py-20 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-orange-400 uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Ready to Grow?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            Let&apos;s Build Your Marketing Engine Together
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a free discovery conversation or request an audit of your current digital presence. We will outline a clear, actionable plan to increase your search visibility and conversions.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-neutral-950 bg-orange-500 hover:bg-orange-400 rounded-xl shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xl transition-all cursor-pointer"
            >
              <span>Explore Services</span>
            </button>
          </div>

          <p className="mt-6 text-xs text-neutral-400">
            No commitment required · Confidential proposals · Response in &lt; 2 hours
          </p>
        </div>
      </section>

    </div>
  );
};
