"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useState, memo } from 'react';
import PopupModal from './PopupModal';

const features = [
  {
    title: "ANVÄNDARDRIVEN FORSKNING",
    description: "Mät effekt över tid – med hjälp av dagliga skattningar, påminnelser och pushnotiser",
    image: "/tracking.png",
    detailedContent: [
      "Appen gör varje användare till en del av något större. Genom att integrera validerade kliniska skattningar som GAD-7, ISI och KSQ i det dagliga användandet möjliggör vi kontinuerlig mätning av effekt – både för individen och forskningen. Användare kan följa sin egen utveckling över tid, samtidigt som anonym data bidrar till att utvärdera och förbättra verktyget. All data hanteras etiskt och säkert enligt MDR och GDPR. Målet är en ny sorts psykologi: där varje insats ger dubbel effekt – personlig insikt och vetenskapligt värde."
    ]
  },
  {
    title: "SMART STRUKTUR & STÖD",
    description: "Smarta alarm, kalenderfunktioner, påminnelser och dagsplanering",
    image: "/materials.png",
    detailedContent: [
      "Appen innehåller ett komplett strukturstöd anpassat för personer med kognitiva utmaningar. Här ingår bland annat smarta alarm, visuella dagsscheman, röstpåminnelser, checklistor och en flexibel kalender – allt utformat för att stärka minne, tidsuppfattning och självständighet. Funktionerna kan anpassas efter individens behov och integreras smidigt i vardagen. Systemet är framtaget enligt gällande krav för medicintekniska hjälpmedel och kombinerar användarvänlighet med klinisk tillförlitlighet."
    ]
  },
  {
    title: "EVIDENSBASERAT MATERIAL",
    description: "Få tillgång till digitala självhjälpsprogram för stress, sömn och ADHD",
    image: "/group.png",
    detailedContent: [
      "Appens innehåll bygger på evidensbaserad psykologi och beteendevetenskap. Användaren får tillgång till självhjälpsmaterial för att hantera stress, förbättra sömn, förstå ADHD eller stärka sin vardagsstruktur. Programmen är uppbyggda i moduler och kan användas självständigt eller i kombination med professionellt stöd. Innehållet är interaktivt, lättillgängligt och anpassningsbart – med påminnelser, delmål och stöd för att skapa hållbar förändring i vardagen."
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
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-3xl font-bold text-center mb-4 text-[#072707] relative">
            <span className="relative z-10">Det vi vill erbjuda</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#E85C3A] rounded-full"></span>
          </h2>
          <p className="text-lg text-[#E85C3A] text-center italic mt-4">
            En plattform för bättre vardag och hälsa
          </p>
        </motion.div>
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