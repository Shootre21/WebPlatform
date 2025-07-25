import React from 'react';
import { CERTIFICATIONS_DATA } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CERTIFICATIONS_DATA.map((cert, index) => (
          <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 text-center flex flex-col items-center justify-center h-full transform hover:-translate-y-1 transition-transform duration-300">
             <div className="mb-4 text-cyan-400 h-10 w-10 flex items-center justify-center">{cert.icon}</div>
             <h3 className="text-md font-bold text-white flex-grow">{cert.name}</h3>
             <p className="text-sm text-slate-400 mt-2">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
