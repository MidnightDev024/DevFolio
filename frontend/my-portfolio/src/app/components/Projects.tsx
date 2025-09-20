// // The "import { projects }" here matches the named export from your data file.
// import { projects } from '../data/projects';
// import ProjectCard from './ProjectCard';

// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 md:py-28 bg-slate-900">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
//           My Projects
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* This loop passes each project object as a prop named "project" */}
//           {projects.map((project: any) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

// 'use client';

// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Image from 'next/image';
// import Link from 'next/link';
// import { projects } from '../data/projects';
// import { FaExternalLinkAlt } from 'react-icons/fa';
// import { BsCheck2 } from 'react-icons/bs';

// gsap.registerPlugin(ScrollTrigger);

// const NewProjects = () => {
//   const containerRef = useRef(null);
//   const imageContainerRef = useRef(null);

//   useEffect(() => {
//     const context = gsap.context(() => {
//       ScrollTrigger.create({
//         trigger: containerRef.current,
//         start: 'top top',
//         end: 'bottom bottom',
//         pin: imageContainerRef.current
//       });

//       projects.forEach((_: any, index: number) => {
//         const textSection = document.querySelector(`#project-text-${index}`);
//         const image = document.querySelector(`#project-image-${index}`);
        
//         if (textSection && image) {
//           gsap.timeline({
//             scrollTrigger: {
//               trigger: textSection,
//               start: 'top center',
//               end: 'bottom center',
//               scrub: true,
//             }
//           })
//           .fromTo(image, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, ease: 'power2.inOut' })
//           .to(image, { opacity: 0, scale: 0.95, ease: 'power2.inOut' }, '+=0.5');
//         }
//       });
//     }, containerRef);

//     return () => context.revert();
//   }, []);

//   return (
//     <section id="projects" className="py-20 md:py-28 bg-slate-900">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
//           Featured Projects
//         </h2>
//         <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
//           See how I transformed concepts into engaging digital experiences.
//         </p>

//         <div ref={containerRef} className="flex flex-col md:flex-row gap-8 md:gap-16">
//           {/* Left Column: Text Cards */}
//           <div className="md:w-1/2 flex flex-col gap-16">
//               {projects.map((project: any, index: number) => (
//               <div key={project.id} id={`project-text-${index}`} className="min-h-[60vh] flex flex-col justify-center bg-slate-800/50 p-8 rounded-xl border border-white/10">
//                 <p className="text-sm text-yellow-400 mb-2">{project.tags.join(' • ')}</p>
//                 <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
//                 <ul className="text-slate-300 space-y-3 mb-6">
//                   {project.features.map((feature: string, i: number) => (
//                     <li key={i} className="flex items-start gap-3">
//                       <div className="text-teal-400 mt-1 flex-shrink-0">
//                         <BsCheck2 />
//                       </div>
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <Link href={project.liveLink || '#'} target="_blank" className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 font-semibold transition-colors">
//                   Visit Live Site <FaExternalLinkAlt />
//                 </Link>
//               </div>
//             ))}
//           </div>

//           {/* Right Column: Sticky Mock Browser */}
//           <div ref={imageContainerRef} className="md:w-1/2 h-[30rem] relative">
//             <div className="w-full h-full rounded-lg bg-slate-800 border border-white/10 p-1.5">
//               {/* Browser Top Bar */}
//               <div className="h-8 bg-slate-700 rounded-t-md flex items-center px-3 gap-2">
//                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
//               </div>
//               {/* Browser Content Area */}
//               <div className="h-[calc(100%-2rem)] w-full bg-black relative">
//                 {projects.map((project: any, index: number) => (
//                   <Image
//                     key={project.id}
//                     id={`project-image-${index}`}
//                     src={project.imageUrl}
//                     alt={project.title}
//                     fill={true}
//                     style={{ objectFit: 'cover' }}
//                     className="opacity-0"
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewProjects;

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data/projects';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { BsCheck2 } from 'react-icons/bs';

gsap.registerPlugin(ScrollTrigger);

const NewProjects = () => {
  // --- NEW --- We now have a ref for the left column as well
  const leftColumnRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    // We use a timeout to ensure all elements are rendered and have their final dimensions
    const timeout = setTimeout(() => {
      const context = gsap.context(() => {
        // --- NEW AND IMPROVED PINNING LOGIC ---
        ScrollTrigger.create({
          trigger: leftColumnRef.current, // The trigger is now the left text column itself
          start: 'top top', // Start pinning when the top of the text column hits the top of the screen
          end: 'bottom bottom', // End pinning when the bottom of the text column hits the bottom of the screen
          pin: imageContainerRef.current, // The element to pin is still the right image container
        });

        projects.forEach((_, index) => {
          const textSection = document.querySelector(`#project-text-${index}`);
          const image = document.querySelector(`#project-image-${index}`);
          
          if (textSection && image) {
            gsap.timeline({
              scrollTrigger: {
                trigger: textSection,
                start: 'top center',
                end: 'bottom center',
                scrub: true,
              }
            })
            .fromTo(image, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, ease: 'power2.inOut' })
            .to(image, { opacity: 0, scale: 0.95, ease: 'power2.inOut' }, '+=0.5');
          }
        });
      });

      return () => context.revert();
    }, 100); // A small 100ms delay

    return () => clearTimeout(timeout);
  }, []);

  return (
    // <left>
    <section id="projects" className="py-20 md:py-28 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          See how I transformed concepts into engaging digital experiences.
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* --- NEW --- Added the ref to the left column */}
          <div ref={leftColumnRef} className="md:w-1/2 flex flex-col gap-16">
            {projects.map((project, index) => (
              <div key={project.id} id={`project-text-${index}`} className="min-h-[60vh] flex flex-col justify-center bg-slate-800/50 p-8 rounded-xl border border-white/10">
                <p className="text-sm text-yellow-400 mb-2">{project.tags.join(' • ')}</p>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <ul className="text-slate-300 space-y-3 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="text-teal-400 mt-1 flex-shrink-0">
                        <BsCheck2 />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={project.liveLink || '#'} target="_blank" className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 font-semibold transition-colors">
                  Visit Live Site <FaExternalLinkAlt />
                </Link>
              </div>
            ))}
          </div>

{/* right */}
          <div ref={imageContainerRef} className="md:w-1/2 h-[30rem] relative">
            <div className="w-full h-full rounded-lg bg-slate-800 border border-white/10 p-1.5">
              <div className="h-8 bg-slate-700 rounded-t-md flex items-center px-3 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="h-[calc(100%-2rem)] w-full bg-black relative">
                {projects.map((project, index) => (
                  <Image
                    key={project.id}
                    id={`project-image-${index}`}
                    src={project.imageUrl}
                    alt={project.title}
                    fill={true}
                    style={{ objectFit: 'cover'}}
                    className="opacity-0 rounded-b-md"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProjects;