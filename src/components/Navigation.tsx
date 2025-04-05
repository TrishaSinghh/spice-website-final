
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
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
            ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/[0.05]"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-rose-300">
              SPICE
            </a>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Home
              </a>
              <a href="#services" className="text-white/70 hover:text-white transition-colors">
                Services
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                Contact
              </a>
            </div>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Get Started
              </a>
            </div>

            <button
              className="md:hidden text-white/70 hover:text-white"
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
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 md:hidden"
          >
            <div className="container mx-auto px-4 py-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-rose-300">
                  SPICE
                </a>
                <button
                  className="text-white/70 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-6 text-center">
                <a 
                  href="#" 
                  className="text-xl text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#services" 
                  className="text-xl text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="#" 
                  className="text-xl text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#" 
                  className="text-xl text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="text-xl text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>

              <div className="mt-auto mb-8 flex justify-center">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-medium hover:opacity-90 transition-opacity"
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
