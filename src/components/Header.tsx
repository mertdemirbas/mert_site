
import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-xl font-light text-gray-800 hover:text-gray-600 transition-colors"
        >
          Mert Demirbaş
        </button>
        
        <nav className="flex space-x-6">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
