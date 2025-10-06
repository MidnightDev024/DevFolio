import Image from 'next/image';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          About Me
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Hello there! I'm Akash Chawla, a passionate web developer with a knack for creating dynamic and user-friendly websites. With a strong foundation in both front-end and back-end technologies, I specialize in building responsive and efficient web applications that deliver exceptional user experiences. When I'm not coding, you can find me exploring the latest tech trends or contributing to open-source projects. Let's connect and create something amazing together!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-800/50 p-8 rounded-xl border border-white/10">
              <blockquote className="text-slate-300 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonial.avatarUrl}
                    alt={`Avatar of ${testimonial.name}`}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;