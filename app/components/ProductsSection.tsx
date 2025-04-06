"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useState, memo } from 'react';
import PopupModal from './PopupModal';

const features = [
  {
    title: "USER-POWERED RESEARCH",
    description: "Enabling continuous effect measurement. Works smoothly with push notifications and reminders.",
    image: "/tracking.png",
    detailedContent: [
      "Our platform is designed to make every user part of something bigger. By integrating validated clinical questionnaires directly into the digital experience – such as KSQ, ISI, and GAD-7 – we allow users to track their own development while contributing to science. Every entry, every reflection, every change over time adds to a growing body of data. This creates a unique feedback loop: users gain insight into their own wellbeing, while researchers collect anonymized, real-world data to evaluate interventions, improve digital tools, and drive innovation in mental health. Ethically approved and securely handled, this user-powered research model helps bridge the gap between treatment and discovery – making digital psychology not just accessible, but scientifically valuable."
    ]
  },
  {
    title: "EVIDENCE-BASED TREATMENT MATERIALS",
    description: "In a user-friendly interface, where content is presented step-by-step or in weekly modules.",
    image: "/materials.png",
    detailedContent: [
      "The platform is built on evidence-based psychological content. Users gain access to self-help materials covering stress management, sleep improvement, depression recovery, anxiety, ADHD, and daily structure support. The content is interactive, accessible, and presented step-by-step – either individually or in group settings. Each module is rooted in research from clinical psychology and behavioral science."
    ]
  },
  {
    title: "ONLINE CLOSED SELF-HELP GROUPS",
    description: "Follow the self-help material with others in online video-rooms ",
    image: "/group.png",
    detailedContent: [
      "The platform allows users to join secure, closed self-help groups – called Connect Rooms. These provide a safe space for individuals facing similar challenges to meet anonymously and follow structured, evidence-based programs together. Through guided exercises and shared progress, users experience a sense of belonging and increased motivation. The rooms are designed for international access, with full support for multilingual and culturally adapted experiences."
    ]
  }
];

// Memoize the feature card component to prevent unnecessary re-renders
const FeatureCard = memo(({ feature, index, onSelect }: { 
  feature: typeof features[0], 
  index: number, 
  onSelect: (index: number) => void 
}) => (
  <motion.div
    className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col w-[85%] mx-auto transform scale-75 min-h-[400px]"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="w-full aspect-[16/9] relative">
      <Image
        src={feature.image}
        alt={feature.title}
        fill
        style={{ objectFit: 'contain' }}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
    <div className="flex flex-col h-full relative p-3">
      <div className="mt-2">
        <h3 className="text-lg mb-2 text-[#E85C3A] text-center">
          {feature.title}
        </h3>
        <p className="text-[#072707] text-base text-center">
          {feature.description}
        </p>
      </div>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center">
        <button 
          onClick={() => onSelect(index)}
          className="text-[#E85C3A] text-base font-medium hover:font-bold transition-all cursor-pointer"
        >
          READ MORE
        </button>
      </div>
    </div>
  </motion.div>
));

FeatureCard.displayName = 'FeatureCard';

export default function ProductsSection() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  return (
    <section 
      id="platform" 
      className="w-full snap-start snap-always bg-[#faefe0] py-8 pb-32 pt-24"
    >
      <div className="flex flex-col px-4">
        <motion.h2 
          className="text-3xl text-center mb-6 text-[#072707]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Project idea "The Platform"
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-2">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              onSelect={setSelectedFeature}
            />
          ))}
        </div>

        <PopupModal
          isOpen={selectedFeature !== null}
          onClose={() => setSelectedFeature(null)}
          title={selectedFeature !== null ? features[selectedFeature].title : ''}
          content={selectedFeature !== null ? features[selectedFeature].detailedContent : []}
        />
      </div>
    </section>
  );
}