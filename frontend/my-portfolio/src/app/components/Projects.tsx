

'use client';

import { useState, useEffect } from 'react';
import DeconProjectCard from './ProjectCard'; // Make sure this is the correct component name
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import { IProjectComponent } from '@/models/Project';
import localProjects from '@/app/data/projects';

type ClientProject = {
  _id: string;
  title: string;
  description: string;
  mainImage: string;
  components?: IProjectComponent[];
};

const DeconstructedProjects = () => {
  const [projects, setProjects] = useState<ClientProject[]>([]);
  const [selectedProject, setSelectedProject] = useState<ClientProject | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();
        const fetched: ClientProject[] = (data?.data ?? []).map((p: any) => ({
          _id: String(p._id ?? p.id ?? crypto.randomUUID()),
          title: p.title,
          description: p.description,
          mainImage: p.mainImage,
          components: p.components,
        }));
        if (fetched.length > 0) {
          setProjects(fetched);
          return;
        }
        // Fallback to local data if API returns empty
        const fallback: ClientProject[] = (localProjects as any[]).map((p: any) => ({
          _id: String(p._id ?? p.id),
          title: p.title,
          description: p.description,
          mainImage: p.mainImage,
          components: p.components,
        }));
        setProjects(fallback);
      } catch {
        // On error, use local data
        const fallback: ClientProject[] = (localProjects as any[]).map((p: any) => ({
          _id: String(p._id ?? p.id),
          title: p.title,
          description: p.description,
          mainImage: p.mainImage,
          components: p.components,
        }));
        setProjects(fallback);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          My Work
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
          Click on a project to see a deconstruction of its components and the thinking behind them.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div key={project._id} layoutId={`project-card-${String(project._id)}`}>
              <DeconProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              layoutId={`project-card-${selectedProject._id}`}
              className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md p-8 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-white z-10"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.5 } }}
              >
                <FaTimes size={32} />
              </motion.button>
              
              <div className="relative w-full h-full">
                {(selectedProject.components ?? []).map((component, index) => {
                  const cardSizeClass = component.size === 'large' 
                    ? 'max-w-xl md:max-w-3xl'
                    : 'max-w-xs md:max-w-md';

                  return (
                    <motion.div
                      key={component.id ?? `${index}`}
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