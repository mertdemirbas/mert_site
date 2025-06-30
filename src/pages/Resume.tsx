
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

const Resume = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <img 
              src="https://pub-8a05c1058c224a889b27b794b156e764.r2.dev/profile.jpg"
              alt="Mert Demirbaş"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover mx-auto mb-6"
            />
            <h1 className="text-4xl font-light text-gray-800 mb-4">Mert Demirbaş</h1>
            <p className="text-xl text-gray-600">Senior System Engineer</p>
            <p className="text-gray-500 mt-2">+90 538 827 1297 • mertdemirbas58@gmail.com • Istanbul, Turkey</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Work Experience</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">Senior System Engineer</h3>
                  <span className="text-gray-500 text-sm">Aug 2022 – Present</span>
                </div>
                <p className="text-gray-600 mb-3">Solari Di Udine • Istanbul, Turkey</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Manage ~3,000 systems and devices, ensuring 24/7 uptime for critical IT services</li>
                  <li>• Handle infrastructure monitoring via Grafana, Prometheus, and alert configurations</li>
                  <li>• Implement automation scripts (PowerShell, Bash) for system maintenance and reporting</li>
                  <li>• Provide L2/L3 technical support to internal teams and external stakeholders</li>
                  <li>• Coordinate technical upgrades, customer change requests, and vendor interactions</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">Senior Engineer Field Ops</h3>
                  <span className="text-gray-500 text-sm">Feb 2020 – Aug 2022</span>
                </div>
                <p className="text-gray-600 mb-3">SITA • Istanbul, Turkey</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Deployed, configured, and supported network and desktop systems at major airports</li>
                  <li>• Liaised with government authorities for customs clearance and equipment approvals</li>
                  <li>• Managed relationships with service providers and coordinated regional IT operations</li>
                  <li>• Supported real-time systems critical to airport operations under strict SLAs</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">IT Expert / Customer Support Engineer</h3>
                  <span className="text-gray-500 text-sm">Jul 2018 – Feb 2020</span>
                </div>
                <p className="text-gray-600 mb-3">NEVOTEK • Istanbul, Turkey</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Delivered remote and on-site support for international hospitality clients (IPTV, VoIP, WiFi)</li>
                  <li>• Configured, monitored, and troubleshot Windows and Linux-based server infrastructure</li>
                  <li>• Assisted in global rollouts of new features and updates for hotel chain IT systems</li>
                  <li>• Resolved end-user and system issues across virtual machines, enhancing system uptime</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">IT Intern & IT Specialist</h3>
                  <span className="text-gray-500 text-sm">Oct 2017 – Jul 2018</span>
                </div>
                <p className="text-gray-600 mb-3">Wissen Akademie & INFOTECH • Istanbul, Turkey</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Gained hands-on training on networking, system administration, and IT fundamentals</li>
                  <li>• Installed and managed server/storage systems and provided IT support for branch offices</li>
                  <li>• Resolved technical issues on-site and remotely for infrastructure components</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Technical Skills</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Systems & Servers</h3>
                  <p className="text-gray-700 text-sm">Windows Server (2012/2016), Active Directory, Group Policy, DNS, DHCP, WDS, Exchange Server, RAID Configuration, File & Backup Servers, WSUS, Proxy Server, Windows Deployment Services</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Virtualization & Cloud</h3>
                  <p className="text-gray-700 text-sm">VMware ESXi / vCenter, VMware Workstation, Hyper-V</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Networking</h3>
                  <p className="text-gray-700 text-sm">OSI Layers, VLAN, Subnetting, Supernetting, Switching, Routing (Static/Dynamic), NAT, VPN, Network Troubleshooting, Structured Cabling</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Additional Skills</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Scripting & Automation</h3>
                  <p className="text-gray-700 text-sm">PowerShell (automation, DSC), Bash / Shell Scripting (cron jobs, server tasks)</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Monitoring & Logging</h3>
                  <p className="text-gray-700 text-sm">Grafana (dashboard setup, alerting), Prometheus, Loki, Journalctl, Syslog, Logrotate</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Tools & Environments</h3>
                  <p className="text-gray-700 text-sm">Ticketing Systems (Jira, ServiceNow), Remote Management Tools (AnyDesk, RDP)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Certifications</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Project Management Foundations – LinkedIn Learning (Issued Mar 2025)</li>
              <li>• Exam 410: Installing and Configuring Windows Server 2012 – Microsoft (Issued Mar 2018)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
