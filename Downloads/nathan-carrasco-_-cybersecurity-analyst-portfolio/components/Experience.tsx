import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { BriefcaseIcon } from './icons';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Work Experience</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
      </div>
      <div className="max-w-3xl mx-auto">
        <ol className="relative border-l border-slate-700">
          {EXPERIENCE_DATA.map((job, index) => (
            <li key={index} className="mb-10 ml-8">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-slate-800 rounded-full -left-4 ring-4 ring-slate-900">
                 <BriefcaseIcon className="w-5 h-5 text-cyan-400" />
              </span>
              <div className="p-4 bg-slate-800 border border-slate-700 rounded-lg shadow-sm">
                <div className="justify-between items-center mb-2 sm:flex">
                    <div className="text-lg font-semibold text-white">{job.role} @ {job.company}</div>
                    <time className="mb-1 text-xs font-normal text-slate-400 sm:order-last sm:mb-0">{job.period}</time>
                </div>
                <div className="mb-3 text-sm font-normal text-slate-400">{job.location}</div>
                <ul className="list-disc list-inside space-y-2 text-slate-300">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
