
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
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="mb-20">
          <div className="w-48 h-48 mx-auto mb-12 relative">
            <img
              src="https://pub-8a05c1058c224a889b27b794b156e764.r2.dev/profile.jpg"
              alt="Mert Demirbas"
              className="w-full h-full rounded-full object-cover border-3 border-slate-400/30 shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Mert Demirbas
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-8 font-light tracking-wide">
            Senior System Engineer
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            Experienced IT Infrastructure Specialist with 7+ years in enterprise system administration, 
            virtualization technologies, and network services management. Proven track record of maintaining 
            high-availability environments for mission-critical business operations.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {navigationCards.map((card) => (
            <button
              key={card.id}
              onClick={() => onNavigate(card.id)}
              className="group p-8 rounded-2xl bg-slate-800/30 border border-slate-600/40 hover:bg-slate-700/40 hover:border-slate-500/60 transition-all duration-500 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-slate-700/50 flex items-center justify-center mb-6 group-hover:bg-slate-600/70 transition-all duration-300">
                  <card.icon className="w-8 h-8 text-slate-300 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-slate-100">
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
