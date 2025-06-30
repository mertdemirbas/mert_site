
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

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
            <h1 className="text-4xl font-light text-gray-800 mb-4">About Me</h1>
            <p className="text-xl text-gray-600">Senior System Engineer</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Professional Summary</h2>
            <p className="text-gray-600 leading-relaxed">
              Senior System Engineer with 7+ years of hands-on experience in managing enterprise-level IT 
              infrastructure and cross-platform systems. Specialized in Windows and Linux administration, 
              virtualization (VMware, Hyper-V), and network services. Known for maintaining high availability 
              environments (~3,000 devices) and delivering scalable, secure, and resilient IT solutions. 
              Proven track record of resolving critical incidents and improving operational efficiency across 
              aviation and industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Education</h2>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800">Bachelor of Science in Computer Engineering</h3>
                <p className="text-gray-600 mb-2">Bahçeşehir University • Istanbul, Turkey</p>
                <p className="text-sm text-gray-500">Sep 2012 – Feb 2017</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Languages</h2>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-800">Turkish:</span>
                  <span className="text-gray-600 ml-2">Native</span>
                </div>
                <div>
                  <span className="font-medium text-gray-800">English:</span>
                  <span className="text-gray-600 ml-2">Fluent</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Achievements</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Developed PowerShell and Bash scripts to automate log rotation and system cleanup, significantly reducing manual intervention across 3,000+ devices</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Built custom filtering tool to extract AIDX messages from millions of lines of flight-related logs, enabling faster analytical processing and SLA compliance</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Integrated Grafana, Loki, and Prometheus for real-time system and service monitoring, improving fault detection and system reliability</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Consistently met SLA requirements in every role with zero breach throughout career</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
