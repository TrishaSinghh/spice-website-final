import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  location: string;
  text: string;
  image: string;
};

export function SpiceTestimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "The Wellness Retreat was truly transformative. The blend of traditional practices and modern techniques created a perfect balance. I returned home feeling renewed and centered.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      name: "Raj Patel",
      location: "London, UK",
      text: "As someone of Indian heritage, I was skeptical about the authenticity of the Indian Experience. I was pleasantly surprised by the depth of cultural immersion and the attention to detail.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      location: "Barcelona, Spain",
      text: "The Cultural Package exceeded all expectations. From cooking with local families to participating in traditional ceremonies, every moment felt genuine and special.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#0a0a08] to-[#0c0c0a]">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-rose-200">
            What Our Guests Say
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Authentic experiences shared by those who've embarked on the Spice journey.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="h-[400px] md:h-[350px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                current === index && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 glass-card p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center"
                  >
                    <div className="shrink-0">
                      <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/10">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <div className="mb-4 flex items-center justify-center md:justify-start gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        ))}
                      </div>
                      <p className="text-lg text-white/80 italic mb-5 leading-relaxed">"{testimonial.text}"</p>
                      <div>
                        <h4 className="text-white font-medium">{testimonial.name}</h4>
                        <div className="inline-flex items-center gap-2 text-white/60 text-sm mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-amber-500" : "bg-white/20"
                } transition-colors`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -10, 0], 
            opacity: [0.1, 0.3, 0.1] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 10, 0], 
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5 
          }}
          className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-rose-500/10 blur-3xl"
        />
      </div>
    </section>
  );
}
