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
              src={activeTab === 'path1' ? '/flip.png' : '/flip.png'}
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
                      Vår Vision
                    </h2>
                    <h3 className="text-lg text-[#E85C3A] font-medium mb-8 text-center italic">
                      En digital medicinteknisk app för personer med kognitiva svårigheter
                    </h3>
                   
                    <div className="space-y-6 text-[#072707]">
                      <div className="space-y-4">
                        <p className="text-base leading-relaxed">
                          Vi utvecklar ett smart verktyg som ersätter traditionella hjälpmedel som klockor, kalendrar, larm och anteckningsblock. Appen samlar dessa funktioner i en användarvänlig, intelligent plattform med målet att:
                        </p>
                        <ul className="space-y-2 list-disc pl-6">
                          <li>Öka struktur, självständighet och trygghet i vardagen</li>
                          <li>Stärka individens egen förmåga genom påminnelser, planeringsstöd och självskattningar</li>
                          <li>Kombinera funktionellt stöd med evidensbaserat innehåll för psykologisk egenvård</li>
                          <li>Möjliggöra datainsamling för forskning och kontinuerlig produktförbättring</li>
                        </ul>
                        <p className="text-base leading-relaxed mt-4">
                          Appen riktar sig till både privatpersoner och vårdgivare, med särskild potential inom neuropsykiatri, rehabilitering och stödboenden.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/30 rounded-lg p-6 shadow-sm">
                          <h3 className="text-xl font-bold mb-4 text-[#E85C3A]">Regulatoriska Krav</h3>
                          <ul className="space-y-2">
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              CE-märkning (klass IIa enligt MDR)
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              IEC 62304 för mjukvaruutveckling
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              ISO 14971 för riskhantering
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              PRRC (ansvarig person)
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white/30 rounded-lg p-6 shadow-sm">
                          <h3 className="text-xl font-bold mb-4 text-[#E85C3A]">Dataskydd & Forskning</h3>
                          <ul className="space-y-2">
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              GDPR-efterlevnad
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              Säker datahantering
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              Kliniska samarbeten
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              Vetenskaplig publicering
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
                      Att Lansera en Medicinteknisk App
                    </h2>
                    <h3 className="text-lg text-[#E85C3A] font-medium mb-8 text-center italic">
                      En omfattande process med stora möjligheter
                    </h3>
                   
                    <div className="space-y-6 text-[#072707]">
                      <div className="space-y-4">
                        <p className="text-base leading-relaxed">
                          Att lansera en medicinteknisk app kräver noggrann planering, särskilt om appen har ett medicinskt syfte – såsom att stödja kognitiv funktion och självständighet hos personer med neuropsykiatriska svårigheter. För att uppfylla EU:s MDR-förordning måste man först fastställa att appen omfattas av regelverket, därefter klassificera risknivån (i vårt fall sannolikt klass IIa), och planera CE-märkningsstrategi därefter.
                        </p>
                        <p className="text-base leading-relaxed">
                          Även om processen är omfattande innebär det också en konkurrensfördel: få aktörer tar sig igenom regulatoriska nålsögat, vilket stärker både trovärdighet och affärsposition.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white/30 rounded-lg p-6 shadow-sm">
                          <h3 className="text-xl font-bold mb-4 text-[#E85C3A]">Nyckelsteg</h3>
                          <ul className="space-y-2">
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">1</span>
                              Identifiera appen som medicinteknisk produkt
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">2</span>
                              Riskklassificera enligt MDR (klass IIa)
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">3</span>
                              Planera CE-märkningsstrategi
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">4</span>
                              Utforma teknisk dokumentation
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">5</span>
                              Hantera forskningsdata
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">6</span>
                              Utse PRRC
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white/30 rounded-lg p-6 shadow-sm">
                          <h3 className="text-xl font-bold mb-4 text-[#E85C3A]">Affärsmässiga Slutsatser</h3>
                          <ul className="space-y-2">
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              Klass IIa kräver mer resurser men ger starkare medicinskt värde
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              CE-märkning är en konkurrensfördel
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              Klinisk evidens stärker marknadsposition
                            </li>
                            <li className="flex items-center text-base">
                              <span className="mr-2 text-[#E85C3A]">✓</span>
                              Löpande uppföljning krävs efter lansering
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