import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type ExperienceType = {
  id: string;
  emoji: string;
  title: string;
  description: string;
  image: string;
  color: string;
};

export function ExperienceTypes() {
  const [activeTab, setActiveTab] = useState("indian");

  const experiences: ExperienceType[] = [
    {
      id: "indian",
      emoji: "",
      title: "Indian Experience",
      description: "A soulful dive into vibrant Indian culture.",
      image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1936&auto=format&fit=crop",
      color: "from-amber-500/20 to-red-500/20"
    },
    {
      id: "western",
      emoji: "",
      title: "Western Experience",
      description: "Global comfort with a touch of spice.",
      image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1780&auto=format&fit=crop",
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      id: "wellness",
      emoji: "",
      title: "Wellness Retreats",
      description: "Reconnect. Rejuvenate. Rediscover.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1770&auto=format&fit=crop",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: "travel",
      emoji: "",
      title: "Travel + Cultural Packages",
      description: "Curated cultural immersions across continents.",
      image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1770&auto=format&fit=crop",
      color: "from-rose-500/20 to-purple-500/20"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-rose-200">
              Types of Experiences
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Discover our carefully curated experiences designed to engage all your senses
              and create unforgettable memories.
            </p>
          </motion.div>

          <Tabs
            defaultValue="indian"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <TabsList className="w-full flex overflow-x-auto gap-2 p-1 h-auto bg-transparent justify-center mb-12">
                {experiences.map((exp) => (
                  <TabsTrigger
                    key={exp.id}
                    value={exp.id}
                    className={cn(
                      "px-5 py-3 rounded-full data-[state=active]:bg-white/10",
                      "border border-white/10 data-[state=active]:border-white/20",
                      "text-white/60 data-[state=active]:text-white",
                      "transition-all duration-300"
                    )}
                  >
                    <span className="mr-2">{exp.emoji}</span>
                    {exp.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>

            <AnimatePresence mode="wait">
              {experiences.map((exp) => (
                <TabsContent
                  key={exp.id}
                  value={exp.id}
                  className="mt-0 outline-none"
                >
                  {activeTab === exp.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="grid md:grid-cols-2 gap-8 items-center"
                    >
                      <div className="order-2 md:order-1">
                        <motion.h3
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="text-2xl md:text-3xl font-medium mb-4 text-white"
                        >
                          {exp.emoji} {exp.title}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="text-white/70 text-lg mb-6"
                        >
                          {exp.description}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="text-white/60 space-y-4"
                        >
                          <p className="flex items-start gap-3">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span>
                            Immersive cultural activities led by local experts
                          </p>
                          <p className="flex items-start gap-3">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span>
                            Authentic culinary adventures to tantalize your taste buds
                          </p>
                          <p className="flex items-start gap-3">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span>
                            Customizable itineraries tailored to your preferences
                          </p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="mt-8"
                        >
                          <a
                            href="#"
                            className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-colors inline-flex items-center gap-2"
                          >
                            Explore {exp.title}
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 12L10 8L6 4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </motion.div>
                      </div>
                      <div className="order-1 md:order-2">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6 }}
                          className="relative rounded-2xl overflow-hidden aspect-[4/3]"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-70 mix-blend-multiply`} />
                          <img
                            src={exp.image}
                            alt={exp.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
