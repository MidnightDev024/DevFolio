import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">

          {/* Left Column: Illustration */}
          <div className="md:w-5/12">
            <Image
              src="/pixel_my_avatar.PNG" // Your new avatar file
              alt="A custom avatar of Akash Chawla" // Update the alt text!
              width={400}
              height={400}
              className="w-full h-auto rounded-full" // Optional: Add rounded-full for a circular avatar
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="md:w-6/12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block">
              About Me
              {/* The yellow underline effect */}
              <span className="block w-1/2 h-1 bg-yellow-400 mt-2 mx-auto md:mx-0"></span>
            </h2>
            <h3 className="text-xl font-semibold text-slate-200 mb-4">
              A dedicated Full-Stack Developer based in Delhi, India 📍
            </h3>
            <p className="text-slate-300 leading-relaxed">
              As a Full-Stack Developer, I possess a strong skill set in both front-end and back-end development. I'm proficient in React, Next.js, Node.js, and MongoDB. I specialize in creating intuitive and dynamic user interfaces, as well as building robust and scalable server-side applications. My goal is to deliver high-quality solutions that solve real-world problems and provide an exceptional user experience.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;