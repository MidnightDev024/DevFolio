'use client';

import { useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiTypescript,
  SiObsidian,
  SiStackblitz,
  SiC,
  SiCplusplus,
  SiCloudinary
} from 'react-icons/si';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const programmingSkills = [
    { icon: <SiC size={48} />, name: 'C' },
    { icon: <SiCplusplus size={48} />, name: 'C++' },
  ];

  const techSkills = [
    { icon: <FaHtml5 size={48} />, name: 'HTML5' },
    { icon: <FaCss3Alt size={48} />, name: 'CSS3' },
    { icon: <FaJsSquare size={48} />, name: 'JavaScript' },
    { icon: <SiTypescript size={48} />, name: 'TypeScript' },
    { icon: <FaReact size={48} />, name: 'React' },
    { icon: <SiNextdotjs size={48} />, name: 'Next.js' },
    { icon: <SiTailwindcss size={48} />, name: 'Tailwind' },
    { icon: <FaNodeJs size={48} />, name: 'Node.js' },
    { icon: <SiExpress size={48} />, name: 'Express' },
    { icon: <SiMongodb size={48} />, name: 'MongoDB' },
    { icon: <FaGitAlt size={48} />, name: 'Git' },
    { icon: <SiObsidian size={48} />, name: 'Obsidian' },
    { icon: <SiStackblitz size={48} />, name: 'StackBlitz' },
    { icon: <SiCloudinary size={48} />, name: 'Cloudinary' },
  ];

  return (
    <section id="skills" className="py-16 md:py-24"> {/* Reduced overall padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10"> {/* Reduced margin */}
          Skills & Qualifications
        </h2>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10"> {/* Reduced margin */}
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-6 py-2 text-lg font-semibold border-b-4 transition-colors duration-300 ${
              activeTab === 'skills'
                ? 'border-yellow-400 text-yellow-400'
                : 'border-transparent text-gray-400 hover:text-yellow-400'
            }`}
          >
            Skill Set
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-6 py-2 text-lg font-semibold border-b-4 transition-colors duration-300 ${
              activeTab === 'experience'
                ? 'border-yellow-400 text-yellow-400'
                : 'border-transparent text-gray-400 hover:text-yellow-400'
            }`}
          >
            Qualification
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'skills' ? (
            <div>
              <h3 className="text-2xl font-bold text-white text-center mb-6">Programming Languages</h3> {/* Reduced margin */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12"> {/* Reduced margin */}
                {programmingSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center justify-center p-4 bg-slate-800 rounded-lg text-slate-300 hover:text-yellow-400 hover:bg-slate-700 transition-all duration-300">
                    {skill.icon}
                    <span className="mt-2 text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-white text-center mb-6">Tools & Technologies</h3> {/* Reduced margin */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {techSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center justify-center p-4 bg-slate-800 rounded-lg text-slate-300 hover:text-yellow-400 hover:bg-slate-700 transition-all duration-300">
                    {skill.icon}
                    <span className="mt-2 text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <div className="relative border-l-2 border-slate-700 pl-8 py-4">
                <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2 top-4"></div>
                <p className="text-sm text-slate-400 mb-1">Jan 2024 - Present</p>
                <h3 className="text-xl font-bold text-white">Full-Stack Developer</h3>
                <p className="text-md text-slate-300 mb-2">A Cool Tech Company</p>
              </div>
              <div className="relative border-l-2 border-slate-700 pl-8 py-4">
                 <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2 top-4"></div>
                <p className="text-sm text-slate-400 mb-1">Jun 2023 - Dec 2023</p>
                <h3 className="text-xl font-bold text-white">Frontend Intern</h3>
                <p className="text-md text-slate-300 mb-2">A Startup</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;