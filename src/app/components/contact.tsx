import Link from 'next/link';

const NewContact = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-500/10 border border-teal-500/20 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">
                Let's create something amazing together
              </h2>
              <p className="text-slate-300">
                Ready to bring your next project to life? Let's connect.
              </p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <Link
                href="mailto:chawlaakash024@gmail.com"
                className="bg-teal-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors"
              >
                Contact Me
              </Link>
              <a
                href="/AKASH RESUME.pdf?v=2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 text-white font-bold py-3 px-6 rounded-lg border border-slate-600 hover:bg-slate-600 transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContact;