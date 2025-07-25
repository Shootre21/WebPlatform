import React from 'react';
import { PROJECTS_DATA } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/10">
    <div className="flex-grow">
      <div className="flex justify-between items-start mb-2 gap-4">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="text-sm text-slate-400 flex-shrink-0">{project.period}</p>
      </div>
      <p className="text-slate-400 mb-4">{project.description}</p>
       <ul className="space-y-2 mb-4 list-disc list-inside text-slate-300">
          {project.details.map((detail, index) => <li key={index}>{detail}</li>)}
      </ul>
    </div>
    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
        {project.tags.map((tag, index) => (
          <span key={index} className="bg-slate-700 text-cyan-400 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
