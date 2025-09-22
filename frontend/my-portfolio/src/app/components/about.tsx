import Image from 'next/image';
import { SiJavascript, SiReact, SiNextdotjs, SiCss3, SiHtml5 } from 'react-icons/si';

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
          
          {/* Card 1: My Reads */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">My Reads</h3>
            <p className="text-slate-400 mb-4">Exploring the books shaping my perspectives.</p>
            {/* Example Book */}
            <div className="bg-slate-700/50 p-4 rounded-lg flex items-center gap-4">
              <Image src="/atomic-habits.jpg" alt="Atomic Habits book cover" width={50} height={70} className="rounded" />
              <div>
                <p className="font-semibold text-white">Atomic Habits</p>
                <p className="text-sm text-slate-400">James Clear</p>
              </div>
            </div>
          </div>
          
          {/* Card 2: My Toolbox */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">My Toolbox</h3>
            <p className="text-slate-400 mb-4">The tools and technologies I use to create.</p>
            <div className="flex flex-wrap gap-4">
              <SiHtml5 size={24} color="#cbd5e1" title="HTML5" />
              <SiCss3 size={24} color="#cbd5e1" title="CSS3" />
              <SiJavascript size={24} color="#cbd5e1" title="JavaScript" />
              <SiReact size={24} color="#cbd5e1" title="React" />
              <SiNextdotjs size={24} color="#cbd5e1" title="Next.js" />
            </div>
          </div>

          {/* Card 3: Beyond the Code */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Beyond the Code</h3>
            <p className="text-slate-400 mb-4">My passions and hobbies outside of programming.</p>
            <div className="flex flex-wrap gap-2">
              {['Painting', 'Traveling', 'Photography', 'Music', 'Gaming'].map(hobby => (
                <span key={hobby} className="bg-teal-500/10 text-teal-300 text-sm px-3 py-1 rounded-full">{hobby}</span>
              ))}
            </div>
          </div>

          {/* Card 4: Map (Spanning 2 columns on large screens) */}
          <div className="lg:col-span-3 bg-slate-800/50 p-6 rounded-xl border border-white/10 h-80">
             {/* Paste your iframe code here and add the className */}
              {/* <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.526320295!2d76.81307299667618!3d28.64368463556491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1726986812833!5m2!1sen!2sin" 
                className="w-full h-full border-0 rounded-lg" 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5258152316!2d76.76358322284956!3d28.643684747418888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1758557196257!5m2!1sen!2sin"
                className="w-full h-full border-0 rounded-lg" 
                allowFullScreen={true}
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