import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Users, Award, CheckCircle2 } from 'lucide-react';
import heroImage from '../assets/images/hero_marketing_growth_1792586087434.jpg';
import { NavigationTab } from './Navbar';

interface HeroProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const socialChannels = [
    { name: 'LinkedIn', icon: 'linkedin' as const },
    { name: 'Instagram', icon: 'instagram' as const },
    { name: 'Facebook', icon: 'facebook' as const },
    { name: 'X / Twitter', icon: 'x' as const },
    { name: 'WhatsApp', icon: 'whatsapp' as const },
    { name: 'YouTube', icon: 'youtube' as const },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-neutral-100">
      {/* Subtle background ambient light */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 w-80 h-80 bg-orange-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & Functional CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Clean unboxed editorial kicker without pill badge */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-orange-600 uppercase mb-4">
              <span>Marketer Ides Agency</span>
              <span aria-hidden="true" className="text-neutral-300">/</span>
              <span>Freelancing &amp; Growth Studio</span>
              <span aria-hidden="true" className="text-neutral-300">/</span>
              <span>marketerideas.online</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.12] text-balance mb-6">
              Grow Your Business With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600">
                Smart Digital Marketing
              </span>
            </h1>

            {/* Short professional description */}
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl mb-8">
              We help ambitious brands, growing businesses, and modern enterprises capture high-intent traffic, rank on Google, amplify social reach, and convert audiences into paying clients through tailored performance strategies.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-lg shadow-orange-500/25 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200/80 rounded-xl border border-neutral-200 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Social Icons on First Page of Website */}
            <div className="pt-6 border-t border-neutral-200/80 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs font-semibold text-neutral-500 tracking-wide uppercase">
                  Specialized Marketing Channels:
                </span>
                
                <div className="flex items-center gap-3 flex-wrap">
                  {socialChannels.map((social) => (
                    <span
                      key={social.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 bg-neutral-50/70 text-xs font-medium text-neutral-700 select-none cursor-default"
                      title={social.name}
                    >
                      <SocialIcon type={social.icon} />
                      <span>{social.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Graphic & Agency Media Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Media Container with single elevation and subtle hairline border */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-950">
                <img
                  src={heroImage}
                  alt="Marketer Ides Digital Marketing Studio"
                  className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Scrim overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent pointer-events-none" />

                {/* Live Performance Floating Card 1 (Bottom Left) */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 rounded-xl p-3.5 text-white shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-bold font-mono tabular-nums text-white">+184%</span>
                        <span className="text-xs text-orange-400 font-medium">Growth Avg.</span>
                      </div>
                      <p className="text-[11px] text-neutral-300 leading-tight">
                        Organic Search &amp; Qualified Inbound Leads
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Card 2 (Top Right) */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-xl px-3.5 py-2 shadow-lg hidden sm:flex items-center gap-2">
                  <Award className="w-4 h-4 text-orange-500" />
                  <span className="text-xs font-bold text-neutral-900 font-mono tabular-nums">4.9/5 Rating</span>
                  <span className="text-[11px] text-neutral-500">· 100+ Clients</span>
                </div>

              </div>

              {/* Decorative accent behind image */}
              <div className="absolute -bottom-3 -right-3 -z-10 w-full h-full rounded-2xl border-2 border-orange-500/20 pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Full-width Metric Strip below hero */}
        <div className="mt-14 pt-8 border-t border-neutral-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70">
            <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-mono tabular-nums">
              250<span className="text-orange-500">+</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-600 mt-1">
              Campaigns Delivered
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70">
            <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-mono tabular-nums">
              98.4<span className="text-orange-500">%</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-600 mt-1">
              Client Satisfaction
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70">
            <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-mono tabular-nums">
              3.8<span className="text-orange-500">x</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-600 mt-1">
              Average Client ROI
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70">
            <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-mono tabular-nums">
              24<span className="text-orange-500">/7</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-600 mt-1">
              Freelance Agility
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// Clean SVG Social Icons Helper
function SocialIcon({ type }: { type: string }) {
  switch (type) {
    case 'linkedin':
      return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case 'facebook':
      return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      );
    case 'x':
      return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      );
    default:
      return null;
  }
}
