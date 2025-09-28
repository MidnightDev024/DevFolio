'use client';

import { useState } from 'react';
import projects from '../data/projects';
import DeconProjectCard from './ProjectCard'; // Make sure this path is correct
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

const DeconstructedProjects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const selectedProject = projects.find(p => p.id === selectedProjectId);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- ADD THESE LINES BACK IN --- */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          My Work
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
          Click on a project to see a deconstruction of its components and the thinking behind them.
        </p>
        {/* ---------------------------------- */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div key={project.id} layoutId={`project-card-${project.id}`}>
              <DeconProjectCard
                project={project}
                onClick={() => setSelectedProjectId(project.id)}
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              layoutId={`project-card-${selectedProject.id}`}
              className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md p-8 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.button
                onClick={() => setSelectedProjectId(null)}
                className="absolute top-6 right-6 text-white z-10"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.5 } }}
              >
                <FaTimes size={32} />
              </motion.button>
              
              <div className="relative w-full h-full">
                {selectedProject.components.map((component, index) => {
                  const cardSizeClass = component.size === 'large' 
                    ? 'max-w-xl md:max-w-3xl'
                    : 'max-w-xs md:max-w-md';

                  return (
                    <motion.div
                      key={component.id}
                      className="absolute"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{
                        x: `${component.position.x}%`,
                        y: `${component.position.y}%`,
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        delay: 0.3 + index * 0.15,
                        type: 'spring',
                        stiffness: 100,
                      }}
                      style={{ top: '50%', left: '50%' }}
                    >
                      <div className={`relative ${cardSizeClass}`}>
                        <Image
                          src={component.image}
                          alt={component.name}
                          width={800}
                          height={450}
                          className="w-full h-auto rounded-lg border border-white/10 shadow-lg"
                        />
                        <div className="mt-2 text-center bg-black/50 p-2 rounded-md">
                          <p className="font-bold text-white">{component.name}</p>
                          <p className="text-sm text-slate-300">{component.annotation}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DeconstructedProjects;