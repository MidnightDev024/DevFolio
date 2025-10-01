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
            <Link
              href="mailto:chawlaakash024@gmail.com"
              className="bg-teal-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors flex-shrink-0"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContact;