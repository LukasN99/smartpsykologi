"use client";

import { motion } from "framer-motion";

export default function MainSection() {
  return (
    <section
      id="about"
      className="relative w-full h-auto flex flex-col items-center justify-center"
    >
      {/* Main Section Content */}
      <motion.div
        className="flex flex-col items-center text-center max-w-4xl px-6 mb-16"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-[#ffffff] text-6xl font-extrabold leading-tight">
          Welcome to Smart Psychology
        </h1>
        <p className="text-[#ffffff] text-xl mt-4 max-w-3xl">
          Discover the future of psychology with cutting-edge tools and insights.
        </p>
      </motion.div>
    </section>
  );
}