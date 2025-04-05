
import { motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "SPICE transformed our digital strategy completely. Their innovative approach delivered results beyond our expectations.",
    author: "Sarah Johnson",
    role: "Marketing Director, TechVision"
  },
  {
    quote: "Working with the SPICE team has been a game-changer for our startup. Their solutions are elegant, effective, and scalable.",
    author: "Michael Chen",
    role: "Founder, NexusWave"
  },
  {
    quote: "The attention to detail and commitment to excellence sets SPICE apart. They don't just deliver projects – they deliver experiences.",
    author: "Amara Patel",
    role: "Product Lead, Elemental"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#030303] relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/5 to-rose-500/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-rose-300">
            What Our Clients Say
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            Don't just take our word for it – hear from the businesses we've helped transform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-xl p-6 relative"
            >
              <QuoteIcon className="absolute top-4 right-4 h-6 w-6 text-amber-500/20" />
              <p className="text-white/60 mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="font-medium text-white/80">{testimonial.author}</p>
                <p className="text-sm text-white/40">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
