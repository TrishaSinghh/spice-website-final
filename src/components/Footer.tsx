
import { cn } from "@/lib/utils";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/[0.05] py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-rose-300">SPICE</h3>
            </div>
            <p className="text-white/40 mb-6 max-w-md">
              Elevating digital experiences through innovative design and technology solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/[0.03] flex items-center justify-center hover:bg-white/[0.05] transition-colors"
              >
                <Twitter className="h-5 w-5 text-white/60" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/[0.03] flex items-center justify-center hover:bg-white/[0.05] transition-colors"
              >
                <Instagram className="h-5 w-5 text-white/60" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/[0.03] flex items-center justify-center hover:bg-white/[0.05] transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white/60" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/[0.03] flex items-center justify-center hover:bg-white/[0.05] transition-colors"
              >
                <Github className="h-5 w-5 text-white/60" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white/90 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/40 hover:text-white/70 transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/40 hover:text-white/70 transition-colors">Our Team</a></li>
              <li><a href="#" className="text-white/40 hover:text-white/70 transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/40 hover:text-white/70 transition-colors">Press Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white/90 mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/40 hover:text-white/70 transition-colors">Digital Strategy</a></li>
              <li><a href="#" className="text-white/40 hover:text-white/70 transition-colors">UX/UI Design</a></li>
              <li><a href="#" className="text-white/40 hover:text-white/70 transition-colors">Web Development</a></li>
              <li><a href="#" className="text-white/40 hover:text-white/70 transition-colors">Mobile Apps</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white/90 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/40 hover:text-white/70 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/40 hover:text-white/70 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/40 hover:text-white/70 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/[0.05] text-center">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} SPICE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
