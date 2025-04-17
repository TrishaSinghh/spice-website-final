import { motion } from "framer-motion";
import { LightNavigation } from "@/components/LightNavigation";
import { Shield, Heart, LifeBuoy, Briefcase, Check, Award, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Insurance = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="bg-white min-h-screen">
      <LightNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6"
            >
              Insurance that truly <span className="text-blue-600">cares</span> for you
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-blue-700/80 mb-8 max-w-2xl mx-auto"
            >
              Simple, transparent, and designed with you in mind. 
              Find the perfect coverage without the confusing jargon.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                Explore Plans
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Health Insurance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Health Insurance" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                <div className="inline-block p-3 bg-blue-100 rounded-lg mb-2">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-blue-900">Health Insurance</h2>
                <p className="text-blue-700/80">
                  Comprehensive health coverage designed for your specific needs. We believe healthcare should be accessible and straightforward.
                </p>
                <ul className="space-y-3">
                  {["Family Coverage", "Individual Plans", "Senior Care Options", "Maternity Benefits"].map((item, index) => (
                    <motion.li 
                      key={index}
                      custom={index}
                      variants={fadeInUpVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-blue-800">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-4 border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Plans
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Term Life Insurance Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="space-y-4">
                <div className="inline-block p-3 bg-blue-100 rounded-lg mb-2">
                  <LifeBuoy className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-blue-900">Term Life Insurance</h2>
                <p className="text-blue-700/80">
                  Simple and affordable term life insurance to protect what matters most. No complicated terms, just reliable coverage.
                </p>
                <ul className="space-y-3">
                  {["Flexible Terms", "Quick Application", "Affordable Premiums", "High Coverage Options"].map((item, index) => (
                    <motion.li 
                      key={index}
                      custom={index}
                      variants={fadeInUpVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-blue-800">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-4 border-blue-600 text-blue-600 hover:bg-blue-50">
                  Explore Coverage
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Term Life Insurance" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Insurance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-blue-100 rounded-lg mb-2">
              <Briefcase className="h-6 w-6 text-blue-600 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Other Insurance Options</h2>
            <p className="text-blue-700/80 max-w-2xl mx-auto mt-4">
              We offer a variety of specialized insurance products to meet your diverse needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Travel Insurance",
                description: "Coverage for unexpected events during your journeys.",
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80"
              },
              {
                title: "Gadget Insurance",
                description: "Protect your valuable electronics from damage and theft.",
                image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1624&q=80"
              },
              {
                title: "Home Insurance",
                description: "Comprehensive coverage for your most valuable asset.",
                image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                    <p className="text-blue-700/80 mb-4">{item.description}</p>
                    <Button variant="ghost" className="text-blue-600 p-0 hover:text-blue-800 hover:bg-transparent">
                      Learn more →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Spice Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-blue-100 rounded-lg mb-2">
              <Shield className="h-6 w-6 text-blue-600 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Why Choose Spice Insurance?</h2>
            <p className="text-blue-700/80 max-w-2xl mx-auto mt-4">
              We believe in transparency, simplicity, and putting our customers first.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-blue-600" />,
                title: "Trusted & Reliable",
                description: "With years of experience and countless satisfied customers, we've built a reputation for reliability."
              },
              {
                icon: <Check className="h-8 w-8 text-blue-600" />,
                title: "Easy Process",
                description: "From quote to claim, our processes are designed to be straightforward and hassle-free."
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
                title: "Expert Support",
                description: "Our knowledgeable team is always ready to help you find the perfect coverage for your needs."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-blue-700/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900">Trusted by Leading Providers</h2>
            <p className="text-blue-700/80 max-w-2xl mx-auto mt-4">
              We partner with the best insurance companies to bring you top-quality coverage options.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <div className="text-gray-500 font-semibold">Partner {item}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Process Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900">Simple Claim Process</h2>
            <p className="text-blue-700/80 max-w-2xl mx-auto mt-4">
              We've streamlined our claims process to get you the support you need, when you need it.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row">
              {[
                {
                  step: "01",
                  title: "Notify Us",
                  description: "Contact our claims department through the app, website, or phone."
                },
                {
                  step: "02",
                  title: "Submit Details",
                  description: "Provide the necessary information and documentation."
                },
                {
                  step: "03",
                  title: "Verification",
                  description: "Our team reviews your claim quickly and efficiently."
                },
                {
                  step: "04",
                  title: "Settlement",
                  description: "Receive your benefit directly to your preferred account."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex-1 relative p-6"
                >
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-blue-200 -z-10 transform translate-y-4"></div>
                  )}
                  <div className="bg-white rounded-xl p-6 shadow-sm relative z-10 h-full">
                    <div className="text-3xl font-bold text-blue-600 mb-3">{item.step}</div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                    <p className="text-blue-700/80">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900">What Our Customers Say</h2>
            <p className="text-blue-700/80 max-w-2xl mx-auto mt-4">
              Don't just take our word for it—hear from people who have experienced our service firsthand.
            </p>
          </div>
          
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {[
                {
                  name: "Sarah Johnson",
                  location: "Mumbai",
                  quote: "Spice made finding the right health insurance for my family incredibly easy. Their team was patient and knowledgeable, explaining everything clearly without the confusing jargon.",
                  image: "https://randomuser.me/api/portraits/women/32.jpg"
                },
                {
                  name: "Rahul Mehta",
                  location: "Delhi",
                  quote: "Filing a claim was surprisingly simple! I was worried it would be a long, complicated process, but Spice guided me through each step and I received my settlement faster than expected.",
                  image: "https://randomuser.me/api/portraits/men/22.jpg"
                },
                {
                  name: "Priya Sharma",
                  location: "Bangalore",
                  quote: "I've been with Spice for three years now, and I appreciate how transparent they are about policies and coverage. No hidden fees or surprises—just honest insurance service.",
                  image: "https://randomuser.me/api/portraits/women/44.jpg"
                }
              ].map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <div className="p-6">
                    <Card className="p-8 h-full">
                      <div className="flex flex-col h-full">
                        <div className="mb-6">
                          <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-200">
                            <path d="M13.296 35.376C10.112 35.376 7.328 34.144 4.944 31.68C2.656 29.12 1.512 25.92 1.512 22.08C1.512 18.624 2.32 15.424 3.936 12.48C5.648 9.536 7.84 7.04 10.512 4.992C13.28 2.944 16.368 1.536 19.776 0.768L20.544 3.312C17.856 4.08 15.552 5.28 13.632 6.912C11.712 8.448 10.4 10.272 9.696 12.384C9.088 14.4 9.04 16.368 9.552 18.288C10.064 18.096 10.768 18 11.664 18C15.024 18 17.712 18.912 19.728 20.736C21.744 22.464 22.752 24.816 22.752 27.792C22.752 30.48 21.792 32.64 19.872 34.272C17.952 35.008 15.792 35.376 13.296 35.376ZM35.088 35.376C31.904 35.376 29.12 34.144 26.736 31.68C24.448 29.12 23.304 25.92 23.304 22.08C23.304 18.624 24.112 15.424 25.728 12.48C27.44 9.536 29.632 7.04 32.304 4.992C35.072 2.944 38.16 1.536 41.568 0.768L42.336 3.312C39.648 4.08 37.344 5.28 35.424 6.912C33.504 8.448 32.192 10.272 31.488 12.384C30.88 14.4 30.832 16.368 31.344 18.288C31.856 18.096 32.56 18 33.456 18C36.816 18 39.504 18.912 41.52 20.736C43.536 22.464 44.544 24.816 44.544 27.792C44.544 30.48 43.584 32.64 41.664 34.272C39.744 35.008 37.584 35.376 35.088 35.376Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <p className="text-blue-800 mb-6 flex-grow">"{testimonial.quote}"</p>
                        <div className="flex items-center mt-auto">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
                            <p className="text-blue-600 text-sm">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to protect what matters most?</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Join thousands of satisfied customers who trust Spice for their insurance needs.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insurance;
