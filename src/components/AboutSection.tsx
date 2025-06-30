
import React from 'react';
import { Server, Shield, Network, Award, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  const expertise = [
    { icon: Server, title: 'System Administration', description: 'Windows Server 2012/2016 and Linux systems management with enterprise-level expertise' },
    { icon: Network, title: 'Network Infrastructure', description: 'VLAN configuration, DNS/DHCP services, and network troubleshooting' },
    { icon: Shield, title: 'Virtualization', description: 'VMware ESXi/vCenter and Hyper-V implementation and management' },
    { icon: Award, title: 'Enterprise Solutions', description: 'Managing 3,000+ systems with 24/7 uptime requirements' },
    { icon: Users, title: 'Technical Leadership', description: 'L2/L3 support coordination and team collaboration' },
    { icon: Clock, title: 'Monitoring & Automation', description: 'Grafana, Prometheus implementation and PowerShell scripting' },
  ];

  return (
    <div className="min-h-screen">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="section-title">
            Professional Overview
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Senior System Engineer with comprehensive experience in managing enterprise-level IT 
              infrastructures across diverse technological environments. Specialized in maintaining 
              mission-critical systems that support thousands of users and devices.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed font-light">
              Proven expertise in cross-platform administration, virtualization technologies, and 
              automated monitoring solutions. Committed to delivering reliable, scalable, and 
              secure IT infrastructure solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {expertise.map((skill, index) => (
            <div
              key={skill.title}
              className="professional-card p-8 hover:bg-slate-700/30 hover:border-slate-500/50 transition-all duration-300 shadow-lg"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-700/40 flex items-center justify-center">
                  <skill.icon className="w-10 h-10 text-slate-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{skill.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="professional-card p-12 max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Professional Philosophy</h3>
          <p className="text-slate-300 text-lg leading-relaxed font-light">
            I believe in building robust, maintainable IT infrastructure that serves as the backbone 
            for business operations. My approach focuses on proactive monitoring, strategic planning, 
            and continuous improvement to ensure optimal system performance and reliability. 
            With experience managing large-scale environments, I understand the critical importance 
            of stability, security, and scalability in enterprise systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
