import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <img
          src="https://ui-avatars.com/api/?name=Nathan+Carrasco&background=0f172a&color=06b6d4&size=200&font-size=0.33&bold=true"
          alt="Nathan Carrasco"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 border-4 border-slate-700 shadow-lg"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2">
          Nathan Carrasco
        </h1>
        <p className="text-xl md:text-2xl font-medium text-cyan-400 mb-6">
          Cybersecurity Analyst
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-slate-800/50 rounded-lg p-6 border border-slate-700">
           <p className="text-slate-300 text-left">
            Cybersecurity Analyst with 6 years of experience in threat analysis, incident response, and security compliance. Adept at leveraging advanced threat detection techniques and scripting languages like Python to drive operational efficiency and safeguard data integrity.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
