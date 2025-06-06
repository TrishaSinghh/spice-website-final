import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Apple, PlaySquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
            <Link to="/">
      <img
        src="/logo1.svg"
        alt="SPICE Logo"
        className="h-10 w-auto"
      />
      </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/insurance" className="text-white/70 hover:text-white transition-colors">
                Insurance
              </Link>
              <Link to="/spice-experience" className="text-white/70 hover:text-white transition-colors">
                Experience
              </Link>
              <Link to="/blog" className="text-white/70 hover:text-white transition-colors">
                Blog
              </Link>
              <Link to="/about-us" className="text-white/70 hover:text-white transition-colors">
                About Us
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://apps.apple.com/in/app/spice-split-bills-earn-big/id6581488142"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <img src="/apple.png" alt="Apple Logo" className="h-5 w-5" />
                <span className="text-white text-sm">App Store</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=in.spiceclub&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <img src="/android.png" alt="Android Logo" className="h-5 w-5" />
                <span className="text-white text-sm">Play Store</span>
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
                <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-rose-300" onClick={() => setMobileMenuOpen(false)}>
                  SPICE
                </Link>
                <button
                  className="text-white/70 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-6 text-center">
                <Link 
                  to="/" 
                  className="text-xl text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/insurance" 
                  className="text-xl text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Insurance
                </Link>
                <Link 
                  to="/spice-experience" 
                  className="text-xl text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </Link>
                <Link 
                  to="/blog" 
                  className="text-xl text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/about-us" 
                  className="text-xl text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </div>

              <div className="mt-auto mb-8 flex flex-col space-y-4">
                <a
                  href="https://apps.apple.com/in/app/spice-split-bills-earn-big/id6581488142"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Apple className="h-5 w-5" />
                  <span className="text-white">App Store</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=in.spiceclub&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <PlaySquare className="h-5 w-5" />
                  <span className="text-white">Play Store</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
