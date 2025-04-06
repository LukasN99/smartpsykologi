"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string[];
}

export default function PopupModal({ isOpen, onClose, title, content }: PopupModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto z-50"
          >
            <div className="bg-[#faefe0] rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-[#072707] hover:text-[#E85C3A] transition-colors"
                aria-label="Close modal"
              >
                <span className="text-xl">×</span>
              </button>
              <div className="p-8">
                <h2 className="text-2xl text-[#E85C3A] pr-8 mb-6">{title}</h2>
                <div className="space-y-4">
                  {content.map((paragraph, index) => (
                    <p key={index} className="text-[#072707] text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 