import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo, socials } from '../data/portfolio';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Form submitted!', formData);
    alert("Thank you for your message! I'll get back to you soon.");

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={24} />;
      case 'Linkedin':
        return <Linkedin size={24} />;
      case 'Twitter':
        return <Twitter size={24} />;
      case 'Mail':
        return <Mail size={24} />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-100 mb-4">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always interested in new projects and collaborations. Feel free to reach me if you want to work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-6">
                Let's start a conversation
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you’re a company looking to collaborate or someone with a project in mind, I’d love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="text-emerald-400" size={20} />
                </div>
                <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-100 hover:text-emerald-400 transition-colors duration-300">
                    {personalInfo.email}
                    </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Phone className="text-blue-400" size={20} />
                </div>
                <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-gray-100 hover:text-blue-400 transition-colors duration-300">
                    {personalInfo.phone}
                    </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="text-purple-400" size={20} />
                </div>
                <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-gray-100">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-gray-400 mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {socials.map((social) => (
                    <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-100 hover:bg-slate-600 transition-all duration-300 hover:scale-110">
                    {getSocialIcon(social.icon)}
                    </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Name
                    </label>
                    <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                    placeholder="Aymane Ouabdelmoumen"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address
                    </label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                    placeholder="aymane@example.com"
                    />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject
                </label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                    placeholder="Collaboration opportunity"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Describe your project or collaboration opportunity here"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-gray-50 font-semibold rounded-xl hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

