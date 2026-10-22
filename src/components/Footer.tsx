import React from 'react';
import { Logo } from './Logo';
import { Mail, Phone, Globe, ArrowUp, ArrowRight } from 'lucide-react';

import { NavigationTab } from './Navbar';

interface FooterProps {
  onNavigate: (tab: NavigationTab) => void;
  onSelectService?: (serviceName: string) => void;
  onOpenLogoUpload: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectService,
  onOpenLogoUpload,
}) => {
  const quickLinks: Array<{ id: NavigationTab; label: string }> = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const servicesList = [
    'Social Media Marketing',
    'SEO',
    'Content Writing',
    'Google Business Profile Optimization',
    'Website SEO',
    'Keyword Research',
    'Canva Design',
    'Digital Marketing Strategy',
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    onNavigate('contact');
  };

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
          
          {/* Column 1: Brand Info & Exact Logo (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              type="button"
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="text-left focus:outline-none"
              aria-label="Marketer Ides Home"
            >
              <Logo variant="dark" showUploadTrigger={true} onOpenUpload={onOpenLogoUpload} />
            </button>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm pt-2">
              Marketer Ides is a dedicated digital marketing &amp; freelancing agency empowering brands with smart, measurable organic search ranking, social media acceleration, and high-converting creative design.
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-orange-400 block mb-2 uppercase tracking-wider">
                Official Agency Domain:
              </span>
              <a
                href="https://marketerideas.online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-orange-400 transition-colors"
              >
                <Globe className="w-4 h-4 text-orange-500" />
                <span>marketerideas.online</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate(link.id);
                      scrollToTop();
                    }}
                    className="text-neutral-400 hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesList.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => handleServiceClick(service)}
                    className="text-neutral-400 hover:text-orange-400 transition-colors text-left flex items-center gap-1 cursor-pointer"
                  >
                    <span className="text-orange-500/60">›</span>
                    <span>{service}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Section (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-4">
              Contact Agency
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-neutral-400">
                <Mail className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@marketerideas.online"
                  className="hover:text-white transition-colors"
                >
                  hello@marketerideas.online
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-neutral-400">
                <Phone className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <a
                  href="tel:+15553824337"
                  className="hover:text-white transition-colors font-mono tabular-nums"
                >
                  +1 (555) 382-4337
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-neutral-400">
                <Globe className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>marketerideas.online</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-xs font-bold text-neutral-900 bg-orange-500 hover:bg-orange-400 transition-colors cursor-pointer"
              >
                <span>Request Free Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            Copyright &copy; 2026 Marketer Ides. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenLogoUpload}
              className="text-neutral-400 hover:text-orange-400 transition-colors text-xs"
            >
              Custom Logo Settings
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
