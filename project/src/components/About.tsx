import React from 'react';
import { MapPin, Calendar, Coffee, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const About: React.FC = () => {
  const stats = [
    { icon: <Code2 size={24} />, label: "Years of experience", value: '1+' },
    { icon: <Coffee size={24} />, label: 'Completed projects', value: '5+' },
    { icon: <Calendar size={24} />, label: 'Internships and missions', value: '3+' },
    { icon: <MapPin size={24} />, label: 'Areas explored', value: 'IA, ML, Vision' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About  <span className="text-emerald-400">me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover my background, my passions, and what motivates me in the world of data and artificial intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src={personalInfo.avatar}
                alt="Aymane Ouabdelmoumen"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:bg-slate-900/70 transition-all duration-300"
                >
                  <div className="text-emerald-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Bringing data to life
            </h3>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I’m  <strong className="text-white">Aymane Ouabdelmoumen</strong>, passionate about artificial intelligence, machine learning, and data science.
              </p>
              <p>
                My objective is to design intelligent solutions from raw data, combining analytical rigor with innovative thinking.              </p>
              <p>
                I enjoy exploring fields such as computer vision, time series analysis, and developing interactive tools for decision-making.              </p>
              <p>
                  Curious, rigorous, and creative, I’m always looking for new challenges where I can blend technology, impact, and continuous learning.







              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={20} className="text-emerald-400" />
                <span>Based in {personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar size={20} className="text-emerald-400" />
                <span>Available for freelance collaborations</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
