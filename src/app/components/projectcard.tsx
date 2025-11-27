import Image from 'next/image';

interface DeconProjectCardProps {
  project: {
    title: string;
    description: string;
    mainImage: string;
    liveLink?: string;
    previewLink?: string;
  };
  onClick: () => void; // A function to handle clicks
}

const DeconProjectCard: React.FC<DeconProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="bg-slate-800/50 rounded-xl border border-white/10 overflow-hidden cursor-pointer group"
    >
      <div className="relative aspect-video"> {/* Changed from h-52 */}
        <Image
          src={project.mainImage}
          alt={project.title}
          fill={true}
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="text-slate-400 mt-2">{project.description}</p>
        
        <div className="mt-4 flex gap-3">
          {project.previewLink && (
            <a
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg border border-slate-600 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Preview
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center px-4 py-2 bg-teal-500 hover:bg-teal-600 text-black text-sm font-bold rounded-lg transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeconProjectCard;