
import React from 'react';
import { SKILL_DATA } from '../constants';
import type { SkillCategory } from '../types';

const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 h-full">
    <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
    <ul className="space-y-3">
      {category.skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          <span className="text-cyan-400 mr-3">{skill.icon}</span>
          <span className="text-slate-300">{skill.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILL_DATA.map((category, index) => (
          <SkillCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
