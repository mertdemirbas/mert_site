
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'mertdemirbas58@gmail.com', 
      href: 'mailto:mertdemirbas58@gmail.com',
      description: 'Professional inquiries and opportunities'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: 'linkedin.com/in/mertdemirbas', 
      href: 'https://www.linkedin.com/in/mertdemirbas/',
      description: 'Professional network and career updates'
    },
  ];

  const whatsappInfo = {
    label: 'WhatsApp',
    value: '+90 538 827 1297',
    href: 'https://wa.me/905388271297',
    description: 'Quick communication and instant messaging'
  };

  return (
    <div className="min-h-screen py-8 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Contact Information
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Get in touch to discuss IT infrastructure needs and system engineering solutions
          </p>
        </div>

        <div className="space-y-8">
          {/* Email and LinkedIn */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label === 'LinkedIn' ? '_blank' : '_self'}
                rel={contact.label === 'LinkedIn' ? 'noopener noreferrer' : ''}
                className="flex flex-col items-center p-8 rounded-xl bg-slate-800/30 border border-slate-700 hover:bg-slate-800/50 hover:border-slate-500/60 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-slate-700/50 flex items-center justify-center mb-6 group-hover:bg-slate-600/70 transition-all duration-300">
                  <contact.icon className="w-8 h-8 text-slate-300 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{contact.label}</h3>
                <p className="text-slate-300 font-medium mb-3">{contact.value}</p>
                <p className="text-slate-400 text-sm">{contact.description}</p>
              </a>
            ))}
          </div>

          {/* WhatsApp - Full width */}
          <div className="max-w-md mx-auto">
            <a
              href={whatsappInfo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 rounded-xl bg-slate-800/30 border border-slate-700 hover:bg-slate-800/50 hover:border-slate-500/60 transition-all duration-300 text-center group w-full"
            >
              <div className="w-16 h-16 rounded-full bg-green-600/20 flex items-center justify-center mb-6 group-hover:bg-green-600/30 transition-all duration-300">
                <svg className="w-8 h-8 text-green-400 group-hover:text-green-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{whatsappInfo.label}</h3>
              <p className="text-slate-300 font-medium mb-3">{whatsappInfo.value}</p>
              <p className="text-slate-400 text-sm">{whatsappInfo.description}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
