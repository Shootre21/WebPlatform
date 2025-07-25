import React from 'react';

const SectionWrapper: React.FC<{id: string, title: string, children: React.ReactNode}> = ({ id, title, children }) => (
    <section id={id} className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
      </div>
      {children}
    </section>
);


const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="max-w-4xl mx-auto text-lg text-slate-300 space-y-6 text-left md:text-center">
        <p>
          As a Cybersecurity Analyst with 6 years of experience in threat analysis, incident response, and security compliance, I have demonstrated expertise in managing complex IT environments, utilizing skills in PKI, SIEM, and network security to enhance system reliability and minimize risks.
        </p>
        <p>
          I am adept at leveraging advanced threat detection techniques and scripting languages like Python to drive operational efficiency and safeguard data integrity. My goal is to apply my skills to protect systems and data from evolving cyber threats.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;
