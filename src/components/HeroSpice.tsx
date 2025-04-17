import { motion } from "framer-motion";
import { ArrowDown, Circle } from "lucide-react";

export function HeroSpice() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const balloons = [
    {
      src: "/images/balloon1.png",
      style: "top-10 left-[10%] w-20 sm:w-28 opacity-80",
      speed: 0.3,
    },
    { 
      src: "/images/balloon1.png",
      style: "top-[30%] right-[5%] w-24 sm:w-32 opacity-70",
      speed: 0.5,
    },
    {
      src: "/images/balloon1.png",
      style: "bottom-[10%] left-[20%] w-16 sm:w-24 opacity-60",
      speed: 0.2,
    },
  ];

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 bg-[url('/images/spice.jpg')] bg-cover bg-center opacity-80" />

      
      {/* Blurred Dark Overlay */}
      <div className="absolute inset-0 bg-[#0c0c0a]/60 backdrop-blur-sm" />
      
      {/* Gradient Layer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.05, 0.1, 0.05, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 5, 
          ease: "easeInOut" 
        }}
        className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-rose-500/10"
      />

      {/* 🌈 Floating Hot Air Balloons */}
      {balloons.map((balloon, i) => (
        <motion.img
          key={i}
          src={balloon.src}
          className={`absolute z-0 ${balloon.style}`}
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 10 * balloon.speed,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Foreground Text + CTA */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-amber-500/80" />
            <span className="text-sm text-white/60 tracking-wide">
              Curated Experiences
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Welcome to the
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-white/90 to-rose-300">
                Spice Experience
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/60 mb-12 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Discover immersive journeys blending culture, wellness, and adventure
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <a 
              href="#about-spice" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-medium hover:opacity-90 transition-all hover:gap-3"
            >
              Begin Your Journey
              <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1.8,
          ease: "easeOut"
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 bg-white/50 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}
