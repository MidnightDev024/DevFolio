import Image from 'next/image';
// THE FIX IS HERE: Added SiTypescript to the import list
import { SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss, SiHtml5, SiGithub, SiGit, SiCss3, SiExpress } from 'react-icons/si';

const NewAbout = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          A Glimpse Into My World
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
          Learn more about who I am, what I do, and what inspires me.
        </p>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Introduction */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-white mb-4">Hello!</h3>
            <p className="text-slate-300 leading-relaxed">
              My name is Akash Chawla, and I'm a passionate Full-Stack Developer based in Delhi. I specialize in building modern, high-performance web applications from concept to deployment.
            </p>
          </div>
          
          {/* Card 2: My Toolbox */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">My Toolbox</h3>
            <p className="text-slate-400 mb-4">The tools and technologies I use to create.</p>
            <div className="flex flex-wrap gap-4 text-slate-300">
              <SiHtml5 size={24} title="HTML5" />
              <SiCss3 size={24} title="CSS3" />
              <SiTailwindcss size={24} title="Tailwind CSS" />
              <SiJavascript size={24} title="JavaScript" />
              <SiReact size={24} title="React" />
              <SiNodedotjs size={24} title="Node.js" />
              <SiExpress size={24} title="Express.js" />
              <SiMongodb size={24} title="MongoDB" />
              <SiNextdotjs size={24} title="Next.js" />
              <SiGit size={24} title="Git" />
              <SiGithub size={24} title="GitHub" />
              
            </div>
          </div>

          {/* Card 3: Beyond the Code */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Beyond the Code</h3>
            <p className="text-slate-400 mb-4">My passions and hobbies outside of programming.</p>
            <div className="flex flex-wrap gap-2">
              {['Painting', 'Traveling', 'Music', 'Gaming'].map(hobby => (
                <span key={hobby} className="bg-teal-500/10 text-teal-300 text-sm px-3 py-1 rounded-full">{hobby}</span>
              ))}
            </div>
          </div>

          {/* Card 4: Map */}
          <div className="lg:col-span-3 bg-slate-800/50 p-6 rounded-xl border border-white/10 h-80">
            <iframe 
              title="My Location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486713.414752478!2d76.76358322284956!3d28.643684747418888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e1!3m2!1sen!2sin!4v1758738250771!5m2!1sen!2sin"
              className="w-full h-full border-0 rounded-lg" 
              allowFullScreen={true}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewAbout;