"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

export default function StrategiesSection() {
  const [activeTab, setActiveTab] = useState<'path1' | 'path2'>('path1');

  return (
    <section
      id="strategies"
      className="bg-[#faefe0] snap-start snap-always py-16 px-6"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Navigation Button */}
        <div className="absolute top-24 -right-4 z-10">
          <button
            onClick={() => setActiveTab(activeTab === 'path1' ? 'path2' : 'path1')}
            className="w-28 h-28 relative transition-transform hover:scale-105"
          >
            <Image
              src={activeTab === 'path1' ? '/topath2.png' : '/topath1.png'}
              alt={activeTab === 'path1' ? 'Go to Path 2' : 'Go to Path 1'}
              fill
              style={{ objectFit: 'contain' }}
            />
          </button>
        </div>

        {/* Content Sections */}
        <div className="relative min-h-[1000px]">
          <AnimatePresence mode="wait">
            {activeTab === 'path1' && (
              <motion.div
                key="path1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute w-full"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-16">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl text-[#072707] font-bold mb-4 text-center">
                      Path 1 – The Self-Help App
                    </h2>
                    <h3 className="text-lg text-[#E85C3A] font-medium mb-8 text-center italic">
                      From Everyday Support to Scalable Global Reach
                    </h3>
                   
                    <div className="space-y-6 text-[#072707]">
                      <div className="space-y-4">
                        <p className="text-base leading-relaxed">
                          This path begins with the launch of a mobile app aimed directly at individuals seeking better routines, improved sleep, stress management, or increased daily structure. It is not classified as healthcare, but functions as a practical, evidence-based behavioral support tool. The app includes features rooted in psychological research, such as movement- or heart-rate-triggered alarms, structured planning tools for users with executive function challenges, and step-by-step guidance for improving sleep and focus.
                        </p>
                        <p className="text-base leading-relaxed">
                          Unlike healthcare-bound solutions, this app is available globally via the App Store and Google Play, removing administrative and regulatory barriers. That allows for faster launch, easier user access, and early user data generation to guide development. It also provides a way to begin building a brand and engage users before the more complex healthcare-oriented product is finalized.
                        </p>
                        <p className="text-base leading-relaxed">
                          Though initially standalone, the app is designed to evolve – with features like Connect Rooms, where users with similar challenges can join structured programs together. These programs would mirror the content from the clinical platform but in a self-guided, subscription-based format.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/30 rounded-lg p-6 shadow-sm">
                          <h3 className="text-xl font-bold mb-4 text-[#E85C3A]">Advantages</h3>
                          <ul className="space-y-2">
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              Can be launched quickly without regulatory approval
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              Global accessibility from day one
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              Builds awareness and brand trust
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              Revenue potential through subscriptions
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              Real-world feedback from end users
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white/30 rounded-lg p-6 shadow-sm">
                          <h3 className="text-xl font-bold mb-4 text-[#E85C3A]">Challenges</h3>
                          <ul className="space-y-2">
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">•</span>
                              Needs a clear identity to stand out among competing apps
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">•</span>
                              Must deliver real value early to retain users
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">•</span>
                              Long-term development and content upkeep are essential
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'path2' && (
              <motion.div
                key="path2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute w-full"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-16">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl text-[#072707] font-bold mb-4 text-center">
                      Path 2 – The Clinical Platform
                    </h2>
                    <h3 className="text-lg text-[#E85C3A] font-medium mb-8 text-center italic">
                      A Scalable Tool for Public Health Services
                    </h3>
                   
                    <div className="space-y-6 text-[#072707]">
                      <div className="space-y-4">
                        <p className="text-base leading-relaxed">
                          The second path takes a different route: building a platform for clinics and public healthcare providers. This platform is designed to facilitate structured, evidence-based psychological treatment in digital form – including psychoeducation modules, interactive group sessions, and built-in assessment tools using validated instruments like KSQ, GAD-7, and ISI.
                        </p>
                        <p className="text-base leading-relaxed">
                          This solution is not aimed at the individual but at institutions – regions, health centers, or university clinics – that want to offer high-quality, low-threshold digital support. The platform is delivered as a ready-to-use system, including content, hosting, technical support, and secure user handling in accordance with GDPR and Swedish healthcare law.
                        </p>
                        <p className="text-base leading-relaxed">
                          This approach requires more time to implement but comes with academic legitimacy, strong ties to research, and the possibility to directly contribute to clinical outcomes and new scientific knowledge. It positions the project as a serious actor in the future of digital mental health.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/30 rounded-lg p-6 shadow-sm">
                          <h3 className="text-xl font-bold mb-4 text-[#E85C3A]">Advantages</h3>
                          <ul className="space-y-2">
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              Rooted in academic research and ethical standards
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              Fulfills a real need in Swedish healthcare
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              Enables collaborations with universities and licensed psychologists
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              Supports data-driven treatment and real-time measurement
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white/30 rounded-lg p-6 shadow-sm">
                          <h3 className="text-xl font-bold mb-4 text-[#E85C3A]">Challenges</h3>
                          <ul className="space-y-2">
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">•</span>
                              Slower rollout due to public procurement and negotiations
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">•</span>
                              Higher technical and legal requirements
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">•</span>
                              Greater initial investment in platform infrastructure
                            </li>
                          </ul>
                        </div>
                      </div>
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