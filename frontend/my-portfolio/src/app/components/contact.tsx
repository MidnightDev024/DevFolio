const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-400 mb-8">
            Have a project in mind or just want to say hello? My inbox is always open.
            I'll get back to you as soon as possible!
          </p>
          
          <form className="w-full max-w-lg mx-auto">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input 
                  className="appearance-none block w-full bg-slate-800 text-slate-300 border border-slate-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-700 focus:border-yellow-400" 
                  id="grid-first-name" 
                  type="text" 
                  placeholder="Your Name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input 
                  className="appearance-none block w-full bg-slate-800 text-slate-300 border border-slate-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-700 focus:border-yellow-400" 
                  id="grid-email" 
                  type="email" 
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <textarea 
                  className="appearance-none block w-full bg-slate-800 text-slate-300 border border-slate-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-700 focus:border-yellow-400 h-48 resize-none" 
                  id="grid-message" 
                  placeholder="Your Message"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button 
                className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300" 
                type="button" // Type is 'button' for now, will be 'submit' later
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;