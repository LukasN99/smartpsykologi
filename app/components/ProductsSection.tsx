"use client";
import { motion } from "framer-motion";

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative w-full h-[150vh] flex items-start justify-start p-8" // Align to top-left with padding
    >
      <motion.div
        className="flex flex-col items-start text-left max-w-4xl"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-[#ffffff] text-6xl font-extrabold leading-tight">
          Our Products
        </h1>
        <p className="text-[#ffffff] text-xl mt-4 max-w-3xl">
          Explore our innovative products designed to enhance your mental well-being.
        </p>
      </motion.div>
    </section>
  );
}