import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Trust from "./components/Trust";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {loading ? (
          <Intro onComplete={() => setLoading(false)} />
        ) : (
          <main key="main-content" className="bg-[#050505] min-h-screen selection:bg-purple-500/30">
            <Navbar />
            <Hero />
            <Trust />
            <About />
            <Services />
            <Pricing />
            <Contact />
            <Footer />
            <Chatbot />
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}
