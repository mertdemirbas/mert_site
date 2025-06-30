
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, FileText, Mail } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: 'about',
      title: 'About Me',
      description: 'Learn more about my background and experience',
      icon: User,
      path: '/about',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'resume',
      title: 'Resume',
      description: 'View my professional experience and skills',
      icon: FileText,
      path: '/resume',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Get in touch with me',
      icon: Mail,
      path: '/contact',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://pub-8a05c1058c224a889b27b794b156e764.r2.dev/background.png')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center mb-12">
          <img 
            src="https://pub-8a05c1058c224a889b27b794b156e764.r2.dev/profile.jpg"
            alt="Mert Demirbaş"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover mx-auto mb-6"
          />
          <h1 className="text-5xl font-light text-white mb-4">Mert Demirbaş</h1>
          <h2 className="text-2xl text-white/90 mb-6">Senior System Engineer</h2>
          <p className="text-lg text-white/80 italic max-w-md mx-auto">
            "Managing enterprise-level IT infrastructure with expertise."
          </p>
        </div>

        {/* Navigation Sections - Smaller buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl w-full">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => navigate(section.path)}
                className={`group relative overflow-hidden rounded-xl p-6 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-br ${section.color}`}
              >
                <div className="relative z-10">
                  <IconComponent className="w-8 h-8 mb-3 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{section.description}</p>
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
