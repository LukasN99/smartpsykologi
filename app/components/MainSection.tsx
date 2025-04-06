"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MainSection() {
  return (
    <section
      id="about"
      className="relative w-full h-screen flex items-center justify-center snap-start snap-always bg-[#faefe0]"
      style={{
        height: 'calc(100vh - 64px)', // Account for header height
      }}
    >
      <div className="relative w-[80%] aspect-[2/1] bg-[#879D8B] rounded-lg overflow-hidden mx-auto mt-4">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/background.png"
            alt="Magnifying glass"
            fill
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center 40%'
            }}
            priority
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-[7%] left-[4%]">
            <motion.h1 
              className="text-[#E85C3A] text-4xl md:text-6xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Smart
              <br />
              Psychology
            </motion.h1>
            <motion.p 
              className="text-white text-base md:text-lg max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              A digital platform that simplifies access to evidence-based psychological treatment and self-help materials.
            </motion.p>
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="px-6 py-2 bg-[#E85C3A] text-white text-sm font-medium rounded-full hover:bg-[#d54c2d] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('platform');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                LEARN MORE
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}