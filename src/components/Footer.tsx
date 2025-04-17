import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

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
              href="#"
              className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Icon className="h-5 w-5 text-white/70 hover:text-white" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/[0.05] mt-8 pt-4" />

        {/* Bottom Links */}
        <div className="flex flex-wrap justify-center items-center gap-3 text-[15px] text-white/50 font-medium">
          {[
            ["Terms & Conditions", "#"],
            ["Delete Account", "#"],
            ["Support", "#"],
            ["Privacy Policy", "#"],
            ["Newsletter Signup (Substack)", "#"],
          ].map(([label, link], index, arr) => (
            <span key={label} className="flex items-center space-x-2">
              <a href={link} className="hover:text-white transition-colors">
                {label}
              </a>
              {index < arr.length - 1 && <span className="text-white/30">●</span>}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/40 mt-3">
          © {new Date().getFullYear()} SPICE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
