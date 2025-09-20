import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// This defines the structure of the data the component expects
interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    githubLink?: string;
    liveLink?: string;
  };
}

// It receives props and specifically looks for one named "project"
const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden group">
      <div className="relative h-52">
        <Image
          src={project.imageUrl}
          alt={`Screenshot of ${project.title}`}
          fill={true}
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-slate-700 text-yellow-400 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.githubLink && (
            <Link href={project.githubLink} target="_blank" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2">
              <FaGithub size={20} /> Code
            </Link>
          )}
          {project.liveLink && (
            <Link href={project.liveLink} target="_blank" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2">
              <FaExternalLinkAlt size={20} /> Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;