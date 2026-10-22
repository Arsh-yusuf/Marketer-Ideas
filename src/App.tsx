import React, { useState, useEffect } from 'react';
import { Navbar, NavigationTab } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LogoUploadModal } from './components/LogoUploadModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);

  // Sync with browser hash if provided (e.g. #services, #about, #blog, #contact)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (
        hash === 'services' ||
        hash === 'about' ||
        hash === 'blog' ||
        hash === 'contact' ||
        hash === 'home'
      ) {
        setActiveTab(hash as NavigationTab);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: NavigationTab) => {
    setActiveTab(tab);
    window.location.hash = tab === 'home' ? '' : tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceName: string) => {
    setPreselectedService(serviceName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      {/* 1. Header / Navbar with exact Marketer Ides logo, page navigation, and adjacent social icons */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenLogoUpload={() => setIsLogoModalOpen(true)}
      />

      {/* 2. Main Page Content according to active tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
          />
        )}

        {activeTab === 'services' && (
          <ServicesSection
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
            isStandalonePage={true}
          />
        )}

        {activeTab === 'about' && (
          <AboutSection onNavigate={handleNavigate} />
        )}

        {activeTab === 'blog' && (
          <BlogSection
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
          />
        )}

        {activeTab === 'contact' && (
          <ContactSection
            preselectedService={preselectedService}
            onClearPreselectedService={() => setPreselectedService('')}
          />
        )}
      </main>

      {/* 3. Footer with Marketer Ides logo and branding */}
      <Footer
        onNavigate={handleNavigate}
        onSelectService={handleSelectService}
        onOpenLogoUpload={() => setIsLogoModalOpen(true)}
      />

      {/* 4. Logo Manager Modal for user asset customization */}
      <LogoUploadModal
        isOpen={isLogoModalOpen}
        onClose={() => setIsLogoModalOpen(false)}
      />
    </div>
  );
}
