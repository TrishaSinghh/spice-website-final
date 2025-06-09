import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#030303] relative overflow-hidden pt-16 pb-6 border-t border-white/[0.05]">
      {/* Background gradient blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-rose-500/10 blur-2xl pointer-events-none z-0" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col items-center text-center gap-5">
        {/* Logo */}
        <img src="/logo1.svg" alt="SPICE Logo" className="h-14 w-auto" />

        {/* Tagline */}
        <p className="text-white/60 max-w-md text-base leading-relaxed">
          Follow us to a paradise so green, even our succulents will be jealous.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-2">
          {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
            <a
              key={i}
              href="#" // Replace with your actual social URLs
              className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="h-5 w-5 text-white/70 hover:text-white" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/[0.05] mt-8 pt-4" />

        {/* Bottom Links */}
        <div className="flex flex-wrap justify-center items-center gap-3 text-[15px] text-white/50 font-medium">
          <span className="flex items-center space-x-2">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-white/30">●</span>
          </span>
          <span className="flex items-center space-x-2">
            <Link to="/delete-account" className="hover:text-white transition-colors">
              Delete Account
            </Link>
            <span className="text-white/30">●</span>
          </span>
          <span className="flex items-center space-x-2">
            <Link to="/support" className="hover:text-white transition-colors">
              Support
            </Link>
            <span className="text-white/30">●</span>
          </span>
          <span className="flex items-center space-x-2">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/30">●</span>
          </span>
          <span className="flex items-center space-x-2">
            <a
              href="#"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Newsletter Signup (Substack)
            </a>
          </span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/40 mt-3">
          © {new Date().getFullYear()} SPICE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
