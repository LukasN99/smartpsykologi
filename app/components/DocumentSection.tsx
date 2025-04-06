"use client";
import { motion } from "framer-motion";

interface DocumentSectionProps {
  title: string;
  content: string[];
}

export default function DocumentSection({ title, content }: DocumentSectionProps) {
  return (
    <motion.div
      className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 overflow-y-auto"
      style={{ maxHeight: 'calc(40vh)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl text-[#E85C3A] mb-4">{title}</h3>
      <div className="space-y-3">
        {content.map((paragraph, index) => (
          <p key={index} className="text-[#072707] text-base">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  );
} 