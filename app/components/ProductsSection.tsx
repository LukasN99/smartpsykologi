"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useState, memo } from 'react';
import PopupModal from './PopupModal';

const features = [
  {
    title: "TRACK TREATMENT OUTCOMES OVER TIME",
    description: "Enabling continuous effect measurement. Works smoothly with push notifications and reminders.",
    image: "/tracking.png",
    detailedContent: [
      "Our advanced tracking system enables both practitioners and clients to monitor treatment progress in real-time, providing valuable insights into the effectiveness of interventions.",
      "The platform uses sophisticated algorithms to analyze treatment outcomes, helping identify patterns and adjust approaches for optimal results. This data-driven approach ensures that treatment strategies can be refined and personalized for each individual.",
      "Regular push notifications and smart reminders help maintain engagement and ensure consistent tracking, while respecting user privacy and preferences. The system adapts to user behavior patterns to optimize notification timing and frequency.",
      "Comprehensive reporting features allow for detailed analysis of progress over time, with visual representations that make it easy to understand and share results with relevant stakeholders."
    ]
  },
  {
    title: "EVIDENCE-BASED TREATMENT MATERIALS",
    description: "In a user-friendly interface, where content is presented step-by-step or in weekly modules.",
    image: "/materials.png",
    detailedContent: [
      "Our treatment materials are carefully curated and based on the latest research in psychological interventions and therapeutic techniques. Each module is designed to deliver maximum impact while remaining accessible and engaging.",
      "The step-by-step approach ensures that users can progress at their own pace, with each concept building naturally upon previous learning. This structured approach helps maintain motivation and ensures thorough understanding.",
      "Weekly modules are designed to provide a perfect balance between learning new concepts and practical application. Each module includes interactive elements, exercises, and reflection opportunities.",
      "The content is regularly updated to reflect new research findings and best practices in psychological treatment, ensuring users always have access to the most current and effective materials."
    ]
  },
  {
    title: "STRUCTURED GROUP THERAPY SESSIONS ONLINE",
    description: "Led by psychology students or licensed professionals within regions.",
    image: "/group.png",
    detailedContent: [
      "Our online group therapy sessions create a supportive and collaborative environment where participants can share experiences and learn from each other under professional guidance.",
      "Sessions are carefully structured to ensure all participants can engage meaningfully while maintaining appropriate boundaries and professional standards. The online format makes it easy to join from anywhere while maintaining privacy.",
      "Groups are led by qualified professionals or advanced psychology students under supervision, ensuring high-quality therapeutic experiences that adhere to best practices and ethical guidelines.",
      "The platform provides specialized tools for group facilitators to manage sessions effectively, including features for breakout rooms, shared resources, and progress tracking across group members."
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
    className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full"
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
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-lg mb-2 text-[#E85C3A] text-center">
        {feature.title}
      </h3>
      <p className="text-[#072707] text-base text-center mb-4">
        {feature.description}
      </p>
      <div className="flex justify-center items-center mt-auto">
        <button 
          onClick={() => onSelect(index)}
          className="text-[#E85C3A] text-2xl cursor-pointer hover:scale-110 transition-transform"
        >
          ↓
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
      className="w-full snap-start snap-always bg-[#faefe0]"
      style={{
        height: 'calc(100vh - 64px)',
      }}
    >
      <div className="h-full flex flex-col py-8 px-4">
        <motion.h2 
          className="text-3xl text-center mb-8 text-[#072707]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Project idea "The Platform"
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto flex-1 px-2">
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