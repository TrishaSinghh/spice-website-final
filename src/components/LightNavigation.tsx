
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export function LightNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-md py-4 border-b border-blue-100 shadow-sm"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-blue-900">
              SPICE
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-blue-800/80 hover:text-blue-900 hover:underline transition-colors">
                Home
              </Link>
              <Link to="/insurance" className="text-blue-800/80 hover:text-blue-900 hover:underline transition-colors">
                Insurance
              </Link>
              <Link to="/spice-experience" className="text-blue-800/80 hover:text-blue-900 hover:underline transition-colors">
                Experience
              </Link>
              <Link to="/blog" className="text-blue-800/80 hover:text-blue-900 hover:underline transition-colors">
                Blog
              </Link>
              <Link to="/about-us" className="text-blue-800/80 hover:text-blue-900 hover:underline transition-colors">
                About Us
              </Link>
            </div>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
            </div>

            <button
              className="md:hidden text-blue-800/80 hover:text-blue-900"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 md:hidden"
          >
            <div className="container mx-auto px-4 py-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <Link to="/" className="text-2xl font-bold text-blue-900" onClick={() => setMobileMenuOpen(false)}>
                  SPICE
                </Link>
                <button
                  className="text-blue-800/80 hover:text-blue-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-6 text-center">
                <Link 
                  to="/" 
                  className="text-xl text-blue-800/80 hover:text-blue-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/insurance" 
                  className="text-xl text-blue-800/80 hover:text-blue-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Insurance
                </Link>
                <Link 
                  to="/spice-experience" 
                  className="text-xl text-blue-800/80 hover:text-blue-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </Link>
                <Link 
                  to="/blog" 
                  className="text-xl text-blue-800/80 hover:text-blue-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/about-us" 
                  className="text-xl text-blue-800/80 hover:text-blue-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </div>

              <div className="mt-auto mb-8 flex justify-center">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
