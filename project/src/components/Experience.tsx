import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-emerald-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made at various organizations
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-blue-500"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-2">
                        <Calendar size={16} />
                        {experience.duration}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {experience.position}
                      </h3>
                      <p className="text-gray-300 font-medium">
                        {experience.company}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="space-y-3 mb-6">
                      {experience.description.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-3">
                          <ArrowRight size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-400 text-sm leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-700/50 text-emerald-400 text-xs rounded-full border border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for larger screens */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20 pt-16 border-t border-slate-700/50">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Education & <span className="text-emerald-400">Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    Scientific Baccalaureate – Specialization in Physical Sciences
                  </h4>
                  <p className="text-gray-400">Ennahda High School, Ahfir</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    Bac+2 (Associate Degree) in Decision Support Systems and Machine Learning
                  </h4>
                  <p className="text-gray-400">School of Technology, Oujda (2023–2025)</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;