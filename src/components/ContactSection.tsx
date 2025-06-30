
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'mertdemirbas58@gmail.com', href: 'mailto:mertdemirbas58@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+90 538 827 1297', href: 'tel:+905388271297' },
    { icon: MapPin, label: 'Location', value: 'Istanbul, Turkey, 34357', href: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mertdemirbas/' },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Contact Information
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Get in touch to discuss IT infrastructure needs and system engineering solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Professional Contact</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center p-6 rounded-lg bg-slate-800/30 border border-slate-700 hover:bg-slate-800/50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center mr-4">
                    <contact.icon className="w-6 h-6 text-slate-300" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{contact.label}</p>
                    <p className="text-white font-medium">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <h4 className="text-xl font-bold text-white mb-6">Professional Profile</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-slate-800/30 border border-slate-700 flex items-center justify-center hover:bg-slate-800/50 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5 text-slate-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-6 rounded-lg bg-slate-800/30 border border-slate-700">
                <div className="space-y-4">
                  <div>
                    <label className="block text-slate-300 text-sm mb-2 font-medium">Name</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-300 text-sm mb-2 font-medium">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-300 text-sm mb-2 font-medium">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 min-h-[120px]"
                      placeholder="Your message..."
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 rounded-lg transition-colors duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
