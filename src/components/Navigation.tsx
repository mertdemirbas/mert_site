
import React from 'react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-slate-800/80 backdrop-blur-md rounded-xl px-3 py-3 border border-slate-600">
        <div className="flex space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                activeTab === tab.id
                  ? "bg-slate-700 text-white border border-slate-500"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
