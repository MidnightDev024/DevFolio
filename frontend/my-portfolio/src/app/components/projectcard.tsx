import Image from 'next/image';

interface DeconProjectCardProps {
  project: {
    title: string;
    description: string;
    mainImage: string;
  };
  onClick: () => void; // A function to handle clicks
}

const DeconProjectCard: React.FC<DeconProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="bg-slate-800/50 rounded-xl border border-white/10 overflow-hidden cursor-pointer group"
    >
      <div className="relative h-52">
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
      </div>
    </div>
  );
};

export default DeconProjectCard;