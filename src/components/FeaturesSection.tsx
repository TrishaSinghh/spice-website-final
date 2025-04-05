
import { motion } from "framer-motion";
import { Layers, Zap, Compass, RefreshCw, ShieldCheck, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-amber-500" />,
    title: "Lightning Fast",
    description: "Experience rapid deployment and performance that exceeds expectations."
  },
  {
    icon: <Compass className="h-6 w-6 text-amber-500" />,
    title: "Intuitive Design",
    description: "Navigate with ease through our carefully crafted interfaces."
  },
  {
    icon: <Layers className="h-6 w-6 text-amber-500" />,
    title: "Scalable Solutions",
    description: "Built to grow with your business, from startup to enterprise."
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-amber-500" />,
    title: "Continuous Updates",
    description: "Stay ahead with regular feature enhancements and improvements."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-amber-500" />,
    title: "Enterprise Security",
    description: "Your data protected with industry-leading security protocols."
  },
  {
    icon: <Users className="h-6 w-6 text-amber-500" />,
    title: "Collaborative Tools",
    description: "Foster teamwork with our suite of collaborative features."
  }
];

export function FeaturesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#030303] to-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute right-0 bottom-0 w-[200px] h-[200px] bg-amber-500/10 rounded-full blur-[120px]" />
      <div className="absolute left-0 top-0 w-[300px] h-[300px] bg-rose-500/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-rose-300">
            Our Premium Services
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            Discover how SPICE can transform your digital presence with our innovative solutions and expert services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.05] rounded-xl p-6 hover:border-amber-500/20 transition-colors"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/10 to-rose-500/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white/90">{feature.title}</h3>
              <p className="text-white/40">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
