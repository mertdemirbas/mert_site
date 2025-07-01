
import React from 'react';
import { User, FileText, Mail } from 'lucide-react';

interface ProfileSectionProps {
  onNavigate: (tab: string) => void;
}

const ProfileSection = ({ onNavigate }: ProfileSectionProps) => {
  const navigationCards = [
    { id: 'about', label: 'About Me', icon: User, description: 'Professional background and expertise' },
    { id: 'resume', label: 'Resume', icon: FileText, description: 'Work experience and qualifications' },
    { id: 'contact', label: 'Contact', icon: Mail, description: 'Get in touch for opportunities' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="mb-12">
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <img
              src="https://pub-8a05c1058c224a889b27b794b156e764.r2.dev/profile.jpg"
              alt="Mert Demirbas"
              className="w-full h-full rounded-full object-cover border-2 border-slate-400/30 shadow-xl"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Mert Demirbas
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-300 mb-6 font-light tracking-wide">
            Senior System Engineer
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Experienced IT Infrastructure Specialist with 7+ years in enterprise system administration, 
            virtualization technologies, and network services management. Proven track record of maintaining 
            high-availability environments for mission-critical business operations.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {navigationCards.map((card) => (
            <button
              key={card.id}
              onClick={() => onNavigate(card.id)}
              className="group p-6 rounded-xl bg-slate-800/30 border border-slate-600/40 hover:bg-slate-700/40 hover:border-slate-500/60 transition-all duration-500 backdrop-blur-sm shadow-lg hover:shadow-xl hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center mb-4 group-hover:bg-slate-600/70 transition-all duration-300">
                  <card.icon className="w-6 h-6 text-slate-300 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-slate-100">
                  {card.label}
                </h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 font-light leading-relaxed">
                  {card.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
