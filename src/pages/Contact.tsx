
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, MessageCircle } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const Contact = () => {
  const navigate = useNavigate();

  const contactMethods = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Connect with me professionally',
      value: 'linkedin.com/in/mertdemirbas',
      link: 'https://www.linkedin.com/in/mertdemirbas/',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Send me a message',
      value: '+90 538 827 1297',
      link: 'https://wa.me/905388271297',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send me an email',
      value: 'mertdemirbas58@gmail.com',
      link: 'mailto:mertdemirbas58@gmail.com',
      color: 'bg-red-600 hover:bg-red-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <img 
              src="https://pub-8a05c1058c224a889b27b794b156e764.r2.dev/profile.jpg"
              alt="Mert Demirbaş"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover mx-auto mb-6"
            />
            <h1 className="text-4xl font-light text-gray-800 mb-4">Contact Me</h1>
            <p className="text-gray-600">Let's connect and discuss opportunities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-8 rounded-lg shadow-lg text-white text-center transform hover:scale-105 transition-all duration-300 ${method.color}`}
                >
                  <IconComponent className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-white/90 mb-3">{method.description}</p>
                  <p className="text-sm text-white/80 break-all">{method.value}</p>
                </a>
              );
            })}
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm always interested in discussing new opportunities, technical challenges, 
              and innovative solutions in system engineering and IT infrastructure. 
              Feel free to reach out through any of the channels above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
