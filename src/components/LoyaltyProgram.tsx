import { motion } from "framer-motion";

export function LoyaltyProgram() {
  const benefits = [
    {
      title: "Earn SpicePoints",
      description: "Accumulate points with every experience that can be redeemed for future adventures.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      gradient: "from-amber-500/20 to-yellow-500/20"
    },
    {
      title: "VIP Retreat Access",
      description: "Exclusive access to limited capacity wellness retreats and cultural immersions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.75 3.54a.7.7 0 0 0-1.5 0L9.679 9.13l-6 .549a.7.7 0 0 0-.4 1.203l4.456 4.108-.968 6.377a.7.7 0 0 0 1.047.746L12 18.9l5.187 3.213a.7.7 0 0 0 1.046-.746l-.967-6.377 4.456-4.108a.7.7 0 0 0-.4-1.203l-6-.549-1.57-5.59z"></path>
        </svg>
      ),
      gradient: "from-rose-500/20 to-pink-500/20"
    },
    {
      title: "Exclusive Cultural Events",
      description: "Invitations to members-only cultural showcases, artist collaborations, and culinary evenings.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M3 9h18"></path>
          <path d="M9 21V9"></path>
        </svg>
      ),
      gradient: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1]
      }
    })
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-rose-200">
            Loyalty Program Benefits
          </h2>
          <p className="text-white/60 text-lg">
            Join our Spice Circle loyalty program and unlock a world of exclusive benefits 
            designed to enhance your experiential journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-6 md:p-8 text-center relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-40 transition-opacity group-hover:opacity-60`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center text-amber-400">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{benefit.title}</h3>
                <p className="text-white/60">{benefit.description}</p>
              </div>
              
              <motion.div 
                className="absolute top-0 left-0 w-full h-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -inset-[100%] opacity-50 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] animate-[shine_3s_ease-in-out_infinite]" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="text-amber-400 inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            <span>Learn more about our Loyalty Program</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>

      <div className="absolute top-20 left-0 w-full h-full -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-amber-500/30 blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-rose-500/20 blur-3xl"
        />
      </div>
    </section>
  );
}