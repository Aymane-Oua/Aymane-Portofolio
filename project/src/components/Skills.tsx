import React from 'react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const categories = {
    frontend: 'Frontend',
    backend: 'AI & Data Science',
    tools: 'Outils Pro & DevOps',
    design: 'Visualisation & BI',
  };

  const categoryColors = {
    frontend: 'from-sky-500 to-cyan-400',
    backend: 'from-green-600 to-emerald-400',
    tools: 'from-purple-600 to-pink-500',
    design: 'from-yellow-500 to-red-500'
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
             Aymane'<span className="text-emerald-400">s Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              An overview of my technical expertise, acquired through passion, practice and concrete projects.          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="bg-slate-800/60 backdrop-blur-md border border-slate-700/40 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {categories[category as keyof typeof categories]}
                </h3>
                <div className={`h-1 w-20 bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} rounded-full`}></div>
              </div>

              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-emerald-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%`, animation: 'slideIn 1.5s ease-out' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8 inline-block max-w-xl mx-auto">
            <p className="text-gray-300 mb-4">
              As a passionate developer, I believe in continuous evolution.
            </p>
            <p className="text-emerald-400 font-semibold">
              Currently, I am training on Web3, AI applied to the web, and Serverless architectures.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
