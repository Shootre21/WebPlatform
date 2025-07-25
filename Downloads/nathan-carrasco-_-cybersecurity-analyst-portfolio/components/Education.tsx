import React from 'react';
import { EDUCATION_DATA } from '../constants';
import { AcademicCapIcon } from './icons';

const Education: React.FC = () => {
    return (
      <section id="education" className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_DATA.map((item, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 flex items-center space-x-4 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex-shrink-0 p-3 bg-slate-700/50 rounded-full">
                  <AcademicCapIcon className="h-8 w-8 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{item.degree}</h3>
                <p className="text-slate-300">{item.school}</p>
                <p className="text-slate-400 text-sm mt-1">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
export default Education;
