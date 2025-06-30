
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
      
      {/* Back arrow - show on other pages */}
      {activeTab !== 'home' && (
        <button
          onClick={handleBackToHome}
          className="fixed top-8 left-8 z-50 flex items-center gap-2 bg-slate-800/90 backdrop-blur-sm rounded-lg px-6 py-3 border border-slate-600/50 text-slate-300 hover:text-white hover:bg-slate-700/90 transition-all duration-300 shadow-lg"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back</span>
        </button>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {renderContent()}
      </div>
    </div>
  );
};

export default Index;
