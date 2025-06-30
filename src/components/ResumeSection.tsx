
import React from 'react';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const ResumeSection = () => {
  const experiences = [
    {
      title: 'Senior System Engineer',
      company: 'Solan Di Udine',
      location: 'Istanbul, Turkey',
      period: 'Aug 2022 – Present',
      description: 'Manage ~3,000 systems and devices, ensuring 24/7 uptime for critical IT services. Handle infrastructure monitoring via Grafana, Prometheus, and alert configuration. Implement automation scripts (PowerShell, Bash) for system maintenance and reporting. Provide L2/L3 technical support to internal teams and external stakeholders.',
    },
    {
      title: 'Senior Engineer Field Ops',
      company: 'SITA',
      location: 'Istanbul, Turkey',
      period: 'Feb 2020 – Aug 2022',
      description: 'Deployed, configured, and supported network and desktop systems at major airports. Liaised with government authorities for customs clearance and equipment approvals. Managed relationships with service providers and coordinated regional IT operations.',
    },
    {
      title: 'IT Expert / Customer Support Engineer',
      company: 'NEVOTEK',
      location: 'Istanbul, Turkey',
      period: 'Jul 2018 – Feb 2020',
      description: 'Delivered remote and on-site support for international hospitality clients (IPTV, VoIP, WiFi). Configured, monitored, and troubleshot Windows and Linux-based server infrastructure. Assisted in global rollouts of new features and updates.',
    },
    {
      title: 'IT Specialist',
      company: 'INFOTECH',
      location: 'Istanbul, Turkey',
      period: 'Feb 2017 – Oct 2017',
      description: 'Installed and managed server/storage systems and provided IT support for branch offices. Resolved technical issues on-site and remotely for infrastructure components.',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Engineering',
      school: 'Bahcesehir University',
      location: 'Istanbul, Turkey',
      period: 'Sep 2012 – Feb 2017',
      description: 'Comprehensive education in computer systems, software engineering, and IT fundamentals.',
    },
  ];

  const certifications = [
    'Project Management Foundations – LinkedIn Learning (Mar 2025)',
    'Exam 410: Installing and Configuring Windows Server 2012 – Microsoft (Mar 2018)',
  ];

  const keySkills = [
    'Windows Server 2012/2016', 'Linux (Ubuntu, CentOS)', 'VMware ESXi/vCenter', 'Hyper-V',
    'Active Directory', 'DNS, DHCP, WDS', 'Exchange Server', 'RAID Configuration',
    'WSUS', 'PowerShell', 'Bash Scripting', 'Grafana', 'Prometheus', 'Loki',
    'Network Troubleshooting', 'VLAN, Subnetting', 'VPN', 'Structured Cabling'
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Professional Experience
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Comprehensive background in enterprise IT infrastructure and system engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-slate-400" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-slate-800/30 border border-slate-700"
                >
                  <h4 className="text-xl font-semibold text-white mb-2">{exp.title}</h4>
                  <p className="text-slate-300 font-medium mb-2">{exp.company}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center text-slate-400 text-sm mb-4 gap-2">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-slate-400" />
              Education
            </h3>
            <div className="space-y-6 mb-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-slate-800/30 border border-slate-700"
                >
                  <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-slate-300 font-medium mb-2">{edu.school}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center text-slate-400 text-sm mb-4 gap-2">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-sm">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
            <div className="space-y-3 mb-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-slate-800/30 border border-slate-700 text-slate-300 text-sm"
                >
                  {cert}
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {keySkills.map((skill, index) => (
                <div
                  key={skill}
                  className="px-3 py-2 rounded bg-slate-800/30 border border-slate-700 text-slate-300 text-center text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
