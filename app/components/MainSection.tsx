"use client";

import { motion } from "framer-motion";

export default function MainSection() {
  return (
    <section
      id="about"
      className="relative w-full h-screen flex items-center justify-center snap-start snap-always"
      style={{
        height: 'calc(100vh - 64px)', // Account for header height
      }}
    >
      <div className="relative w-full max-w-7xl aspect-[16/9] rounded-lg overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/background.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 p-12 flex flex-col justify-center h-full">
          <motion.h1 
            className="text-6xl md:text-7xl mb-4 text-[#E85C3A] font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Smart
            <br />
            Psychology
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 max-w-xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A digital platform that simplifies access to evidence-based psychological treatment and self-help materials.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="px-8 py-3 bg-[#E85C3A] text-white rounded-lg hover:bg-[#d54c2d] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LEARN MORE
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}