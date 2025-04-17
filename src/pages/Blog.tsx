import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Search, Clock, User, Tag, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right Health Insurance Plan",
    excerpt: "A comprehensive guide to understanding health insurance options and selecting the best plan for your needs.",
    category: "Insurance",
    author: "Priya Mehra",
    date: "April 13, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Term Life Insurance",
    excerpt: "Everything you need to know about term life insurance, from coverage options to choosing the right policy.",
    category: "Insurance",
    author: "Aditya Shah",
    date: "April 10, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "5 Financial Habits to Build in Your 20s",
    excerpt: "Start your financial journey right with these essential habits that will set you up for future success.",
    category: "Financial Planning",
    author: "Vikram Desai",
    date: "April 5, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    title: "Understanding Mutual Funds: A Beginner's Guide",
    excerpt: "A simple breakdown of mutual funds, how they work, and why they might be a good investment option for you.",
    category: "Investments",
    author: "Priya Mehra",
    date: "April 1, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 5,
    title: "How to Prepare for Financial Emergencies",
    excerpt: "Build a robust emergency fund and create a financial safety net with these practical tips.",
    category: "Financial Planning",
    author: "Aditya Shah",
    date: "March 28, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    title: "The Digital Transformation of Insurance",
    excerpt: "How technology is reshaping the insurance industry and what it means for consumers.",
    category: "Industry Trends",
    author: "Vikram Desai",
    date: "March 25, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const categories = [
  "All Posts",
  "Insurance",
  "Financial Planning",
  "Investments",
  "Industry Trends",
  "Personal Finance"
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#0c0c0a]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Spice Blog</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Insights, guides, and expert advice to help you make informed financial decisions.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Search and Filter Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
              <div className="relative max-w-md w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-amber-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="block w-full pl-10 pr-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 text-white outline-none transition-colors"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm ${
                      index === 0
                        ? "bg-gradient-to-r from-amber-500 to-rose-500 text-white"
                        : "bg-white/[0.03] text-white/70 border border-white/[0.08] hover:bg-white/[0.05]"
                    } transition-colors`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0a]/90 to-[#0c0c0a]/40 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Featured post"
                className="w-full h-96 object-cover object-center"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <span className="bg-gradient-to-r from-amber-500 to-rose-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-4 w-fit">
                  FEATURED
                </span>
                <h2 className="text-3xl font-bold text-white mb-3">
                  Understanding the New Health Insurance Regulations of 2025
                </h2>
                <p className="text-white/90 mb-4 max-w-3xl">
                  A deep dive into the latest health insurance policy changes and what they mean for you and your family's coverage.
                </p>
                <div className="flex items-center text-white/80 text-sm">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    Aditya Shah
                  </span>
                  <span className="mx-3">•</span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    8 min read
                  </span>
                  <span className="mx-3">•</span>
                  <span>April 15, 2025</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-white/[0.03] border border-white/[0.08] text-amber-400 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {post.title}
                    </h3>
                    <p className="text-white/60 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-white/50 mb-4">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <Link to="#" className="text-amber-400 font-medium flex items-center hover:text-amber-300">
                      Read Article <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-[#15151e]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Get the latest articles, guides, and financial insights delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center max-w-md mx-auto gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 text-white outline-none transition-colors"
                />
                <button className="whitespace-nowrap px-6 py-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
              <p className="text-white/40 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}