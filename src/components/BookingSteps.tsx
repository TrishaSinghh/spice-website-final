import { motion } from "framer-motion";

export function BookingSteps() {
  const steps = [
    {
      number: 1,
      title: "Choose Your Experience",
      description: "Browse our curated experiences and select the one that resonates with your spirit of adventure.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    },
    {
      number: 2,
      title: "Customize Your Journey",
      description: "Tailor your experience with add-ons, special requests, and personalized touches.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      )
    },
    {
      number: 3,
      title: "Confirm & Enjoy",
      description: "Secure your booking, receive your personalized itinerary, and prepare for transformation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#0c0c0a] to-[#0a0a08]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-rose-200">
            How to Book an Experience
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Our simple booking process ensures a seamless journey from selection to experience.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 md:p-8 text-center relative"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 flex items-center justify-center text-white font-bold shadow-lg">
                  {step.number}
                </div>
                <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{step.title}</h3>
                <p className="text-white/60">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-1">
                    <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 5H38M38 5L34 1M38 5L34 9" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <a
              href="#"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2 shadow-lg shadow-amber-900/20"
            >
              Book Your Experience
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>
    </section>
  );
}