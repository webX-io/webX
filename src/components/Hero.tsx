import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with interactive glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]" />
        <div 
          className="absolute inset-0 opacity-30 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`,
          }}
        />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.4, 0],
                y: [0, -100],
                x: [0, Math.random() * 50 - 25],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-1 h-1 bg-purple-400 rounded-full blur-[1px]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-8"
          >
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-purple-300">
              ESTD. 2026
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-8xl font-display font-bold leading-[1.1] mb-8 max-w-5xl">
            Building <span className="gradient-text italic">Premium</span> Digital Experiences For Modern Businesses
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            We create modern, fast and visually stunning websites designed to help businesses grow online with powerful user experiences and premium branding.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-10 py-4 rounded-2xl font-bold flex items-center gap-2 group overflow-hidden relative"
            >
              <span className="relative z-10 transition-colors group-hover:text-black">Get Started</span>
              <ArrowUpRight size={20} className="relative z-10" />
              <div className="absolute inset-0 bg-purple-400 transition-transform duration-500 scale-x-0 group-hover:scale-x-100 origin-left opacity-10" />
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ x: 5 }}
              className="text-white font-semibold flex items-center gap-2 group"
            >
              Explore Services
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-purple-400/50 group-hover:text-purple-400 transition-all">
                <ArrowUpRight size={16} />
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements for Premium Feel */}
      <div className="absolute bottom-20 left-10 hidden lg:block opacity-20">
        <div className="w-64 h-64 rounded-full bg-purple-600 blur-[120px] animate-pulse" />
      </div>
      <div className="absolute top-40 right-10 hidden lg:block opacity-20">
        <div className="w-80 h-80 rounded-full bg-indigo-600 blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
}
