import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, User, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Contact Info */}
          <div className="lg:w-2/5">
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-purple-400 font-display tracking-[0.3em] text-xs uppercase mb-4"
            >
              Get in Touch
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-display font-bold mb-12"
            >
              Let's Create Something <span className="gradient-text italic">Extraordinary</span>
            </motion.h2>

            <div className="space-y-6">
              {[
                { icon: User, label: "Founder", value: "Pushpraj Singh Rathore" },
                { icon: Mail, label: "Email", value: "hallo.webx@gmail.com", link: "mailto:hallo.webx@gmail.com" },
                { icon: Phone, label: "WhatsApp", value: "+91 7877544386", link: "https://wa.me/917877544386" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 rounded-2xl border-white/5 flex items-center gap-6 group hover:border-purple-500/50 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(168,85,247,0)] group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} className="text-lg font-semibold text-white hover:text-purple-400 transition-colors uppercase tracking-tight">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-white uppercase tracking-tight">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass-dark p-8 md:p-12 rounded-[40px] border border-white/5 h-full"
            >
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 animate-bounce">
                      <CheckCircle2 size={48} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-gray-400">Thank you for reaching out. We will get back to you shortly.</p>
                    </div>
                    <button 
                      onClick={() => setFormState("idle")}
                      className="text-purple-400 font-bold underline underline-offset-4"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-2 transition-colors group-focus-within:text-purple-400">Full Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500/50 focus:bg-white/[0.08] transition-all text-white"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-2 transition-colors group-focus-within:text-purple-400">Email Address</label>
                        <input 
                          required
                          type="email" 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500/50 focus:bg-white/[0.08] transition-all text-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-2 transition-colors group-focus-within:text-purple-400">Service Selection</label>
                      <select 
                        required
                        defaultValue=""
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500/50 focus:bg-white/[0.08] transition-all text-white appearance-none"
                      >
                        <option value="" disabled className="bg-black text-gray-400">Select a Service</option>
                        <option value="custom" className="bg-black">Custom Web Development</option>
                        <option value="ecommerce" className="bg-black">E-Commerce Solution</option>
                        <option value="redesign" className="bg-black">Website Redesign</option>
                        <option value="landing" className="bg-black">Landing Page</option>
                        <option value="other" className="bg-black">Other Services</option>
                      </select>
                    </div>

                    <div className="group">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-2 transition-colors group-focus-within:text-purple-400">Your Message</label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500/50 focus:bg-white/[0.08] transition-all text-white resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <motion.button
                      disabled={formState === "submitting"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-5 rounded-2xl bg-purple-600 text-white font-bold text-lg flex items-center justify-center gap-2 group shadow-xl shadow-purple-900/40 relative overflow-hidden disabled:opacity-50"
                    >
                      <span className="relative z-10">{formState === "submitting" ? "Sending..." : "Send Message"}</span>
                      {formState !== "submitting" && <Send size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                      <div className="absolute inset-0 bg-white/20 transition-transform duration-500 translate-y-full group-hover:translate-y-0" />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Glow balls */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] -ml-64 -mb-64" />
    </section>
  );
}
