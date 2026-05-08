import { motion } from "motion/react";
import founderImg from "../assets/images/regenerated_image_1778236363666.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="glass-dark rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden group border border-white/5 hover:border-purple-500/30 transition-colors duration-700"
        >
          {/* Animated background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full group-hover:bg-purple-600/20 transition-all duration-700" />
          
          {/* Left: Founder Photo Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-purple-500/30 group-hover:border-purple-500 transition-all duration-700 animate-pulse" />
              
              {/* Photo Container */}
              <div className="absolute inset-4 rounded-[2rem] overflow-hidden group/img cursor-pointer shadow-[0_0_50px_rgba(139,92,246,0)] group-hover/img:shadow-[0_0_50px_rgba(139,92,246,0.3)] transition-shadow duration-700">
                <motion.img
                  src={founderImg}
                  alt="Pushpraj Singh Rathore"
                  className="w-full h-full object-cover grayscale brightness-75 group-hover/img:grayscale-0 group-hover/img:brightness-100 group-hover/img:scale-110 transition-all duration-1000 ease-out"
                />
                
                {/* Overlay Glow */}
                <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Decorative Floating Squares */}
              <div className="absolute -top-4 -left-4 w-12 h-12 glass border-purple-500/20 rounded-xl" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-600/40 blur-lg rounded-full" />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-purple-400 font-display tracking-[0.2em] text-xs uppercase mb-6 flex items-center justify-center lg:justify-start gap-3">
                <span className="w-8 h-[1px] bg-purple-400" />
                About Our Founder
              </h4>
              
              <h2 className="text-5xl md:text-6xl font-signature text-purple-200 mb-2 drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">
                Pushpraj Singh Rathore
              </h2>
              
              <p className="text-gray-300 font-display text-sm md:text-base uppercase tracking-wider mb-8">
                Founder & Creative Developer at <span className="text-white font-bold">WebX</span>
              </p>

              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                WebX is a modern web development agency focused on creating premium digital experiences for startups, businesses and creators. We combine creativity, performance and modern technology to build websites that truly stand out online.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <div className="glass px-6 py-3 rounded-2xl flex items-center gap-3 group/item cursor-default">
                  <div className="w-2 h-2 rounded-full bg-purple-500 group-hover/item:scale-150 transition-all shadow-[0_0_8px_white]" />
                  <span className="text-sm font-medium text-gray-200 uppercase tracking-widest">Innovation</span>
                </div>
                <div className="glass px-6 py-3 rounded-2xl flex items-center gap-3 group/item cursor-default">
                  <div className="w-2 h-2 rounded-full bg-purple-500 group-hover/item:scale-150 transition-all shadow-[0_0_8px_white]" />
                  <span className="text-sm font-medium text-gray-200 uppercase tracking-widest">Performance</span>
                </div>
                <div className="glass px-6 py-3 rounded-2xl flex items-center gap-3 group/item cursor-default">
                  <div className="w-2 h-2 rounded-full bg-purple-500 group-hover/item:scale-150 transition-all shadow-[0_0_8px_white]" />
                  <span className="text-sm font-medium text-gray-200 uppercase tracking-widest">Quality</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative ambient background particles */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.05)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
}
