import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AboutSpice() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about-spice" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          style={{ opacity, y, scale }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className="text-3xl md:text-5xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-rose-200"
          >
            What is Spice Experience?
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className="relative"
          >
            <div 
              className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-rose-500/10 rounded-3xl -z-10 blur-xl"
              style={{ 
                transform: "translate(-50%, -50%) rotate(-5deg)",
                width: "120%",
                height: "120%",
                left: "50%",
                top: "50%",
              }}
            />
            
            <div className="glass-card p-8 md:p-10">
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6 font-light tracking-wide">
                The Spice Experience is a sensorial journey that transcends ordinary travel. 
                It's where ancient traditions meet modern wellness, where cultures blend like 
                carefully curated spices, creating something altogether new yet timeless.
              </p>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light tracking-wide">
                Like the gentle flow of silk or the shifting patterns of sand, 
                our experiences move with you, adapting to your rhythm while guiding you 
                through transformative moments that awaken all senses.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 md:mt-16 flex flex-wrap justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
          >
            {["Culture", "Wellness", "Adventure", "Cuisine", "Tradition", "Connection"].map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <motion.div 
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'], 
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            backgroundSize: "400% 400%",
          }}
          className="absolute inset-0 bg-gradient-to-br from-amber-900/5 via-rose-900/5 to-amber-900/5 blur-3xl opacity-30"
        />
      </div>
    </section>
  );
}