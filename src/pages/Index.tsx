
import React, { useState } from 'react';
import ProfileSection from '@/components/ProfileSection';
import AboutSection from '@/components/AboutSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import { ArrowLeft } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <ProfileSection onNavigate={setActiveTab} />;
      case 'about':
        return <AboutSection />;
      case 'resume':
        return <ResumeSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <ProfileSection onNavigate={setActiveTab} />;
    }
  };

  const handleBackToHome = () => {
    setActiveTab('home');
  };

  return (
    <div className="relative min-h-screen">
      {/* Professional background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Back arrow - show on other pages with proper spacing */}
        {activeTab !== 'home' && (
          <div className="relative z-20 pt-6 pb-4 px-6">
            <button
              onClick={handleBackToHome}
              className="flex items-center gap-2 bg-slate-800/90 backdrop-blur-sm rounded-lg px-4 py-2 md:px-6 md:py-3 border border-slate-600/50 text-slate-300 hover:text-white hover:bg-slate-700/90 transition-all duration-300 shadow-lg"
            >
              <ArrowLeft size={18} className="md:w-5 md:h-5" />
              <span className="font-medium text-sm md:text-base">Back</span>
            </button>
          </div>
        )}
        
        {/* Main content with conditional padding */}
        <div className={activeTab !== 'home' ? 'pt-0' : ''}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Index;
