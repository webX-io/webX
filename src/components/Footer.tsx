import { motion } from "motion/react";
import { Github, Twitter, Instagram, Linkedin, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="text-3xl font-display font-bold tracking-tight inline-flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <span className="text-sm">W</span>
              </div>
              <span className="gradient-text">WebX</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Designing the future of digital experiences. We build premium websites for modern businesses and visionary creators.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Instagram, Github, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Pricing", "Portfolio"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-purple-500 group-hover:w-3 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>Pushpraj Singh Rathore</li>
              <li className="hover:text-purple-400 cursor-pointer">hallo.webx@gmail.com</li>
              <li>+91 7877544386</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest architectural insights.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-500/50 transition-all"
              />
              <button className="absolute right-2 top-2 p-1.5 rounded-lg bg-purple-600 text-white hover:bg-purple-500 transition-colors">
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-xs uppercase tracking-widest">
            © {currentYear} WebX. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-xs text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent shadow-[0_0_20px_purple]" />
    </footer>
  );
}
