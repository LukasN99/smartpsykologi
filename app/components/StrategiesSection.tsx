"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StrategiesSection() {
  const [activeTab, setActiveTab] = useState<'option1' | 'option2'>('option1');

  return (
    <section
      id="strategies"
      className="min-h-screen bg-[#faefe0] snap-start snap-always py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab('option1')}
            className={`px-8 py-3 rounded-full text-lg transition-all ${
              activeTab === 'option1'
                ? 'bg-[#E85C3A] text-white'
                : 'border-2 border-[#E85C3A] text-[#E85C3A] hover:bg-[#E85C3A] hover:text-white'
            }`}
          >
            Option 1
          </button>
          <button
            onClick={() => setActiveTab('option2')}
            className={`px-8 py-3 rounded-full text-lg transition-all ${
              activeTab === 'option2'
                ? 'bg-[#E85C3A] text-white'
                : 'border-2 border-[#E85C3A] text-[#E85C3A] hover:bg-[#E85C3A] hover:text-white'
            }`}
          >
            Option 2
          </button>
        </div>

        {/* Content Sections */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            {activeTab === 'option1' && (
              <motion.div
                key="option1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full">
                  <h2 className="text-4xl text-[#072707] font-bold mb-6">Strategic Approach</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        title: "Evidence-Based",
                        description: "Our methods are grounded in scientific research and proven effectiveness.",
                        icon: "📚"
                      },
                      {
                        title: "Personalized Care",
                        description: "Tailored approaches that adapt to individual needs and circumstances.",
                        icon: "🎯"
                      },
                      {
                        title: "Continuous Growth",
                        description: "Regular assessment and adaptation of strategies for optimal results.",
                        icon: "🌱"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center text-center p-4">
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-xl text-[#072707] font-bold mb-2">{item.title}</h3>
                        <p className="text-[#072707]">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'option2' && (
              <motion.div
                key="option2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full">
                  <h2 className="text-4xl text-[#072707] font-bold mb-6">Implementation Tools</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/20 rounded-lg p-6">
                      <h3 className="text-2xl text-[#072707] font-bold mb-4">Digital Resources</h3>
                      <ul className="space-y-3 text-[#072707]">
                        <li className="flex items-center">
                          <span className="mr-2">✓</span>
                          Interactive self-assessment tools
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">✓</span>
                          Progress tracking dashboard
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">✓</span>
                          Guided meditation sessions
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white/20 rounded-lg p-6">
                      <h3 className="text-2xl text-[#072707] font-bold mb-4">Professional Support</h3>
                      <ul className="space-y-3 text-[#072707]">
                        <li className="flex items-center">
                          <span className="mr-2">✓</span>
                          Expert consultation sessions
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">✓</span>
                          Group workshop access
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">✓</span>
                          Personalized strategy planning
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
} 