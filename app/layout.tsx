"use client";

import { useEffect, useRef } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const sections = Array.from(container.querySelectorAll("section")) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeSection = entry.target;
            const navLink = document.querySelector(
              `a[href="#${activeSection.id}"]`
            ) as HTMLElement;
            const underline = document.querySelector(
              ".nav-underline"
            ) as HTMLElement;

            if (navLink && underline) {
              underline.style.left = `${navLink.offsetLeft}px`;
              underline.style.width = `${navLink.offsetWidth}px`;

              if (window.location.hash !== `#${activeSection.id}`) {
                window.history.replaceState(null, "", `#${activeSection.id}`);
              }
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <html lang="en" className="overflow-hidden">
      <body className="flex flex-col min-h-screen bg-[#f8f5f0]">
        <Header />
        <div ref={scrollContainerRef} className="flex-grow overflow-y-auto relative">
          {/* About Section */}
          <section id="about" className="w-full h-screen flex items-center justify-center relative">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6">
              <div className="flex-1 text-left">
                <h1 className="text-gray-800 text-5xl font-bold leading-tight">
                  Små steg, <br />
                  stora förändringar.
                </h1>
                <p className="text-gray-600 text-lg mt-4">
                  Vi kombinerar vetenskap och teknik för att göra psykologi tillgängligt för alla.
                </p>
                <div className="flex space-x-4 mt-6">
                  <button className="bg-black text-white px-6 py-3 rounded-lg font-medium">
                    Börja din resa
                  </button>
                  <button className="bg-black text-white px-6 py-3 rounded-lg font-medium">
                    Läs mer
                  </button>
                </div>
              </div>
            </div>
            <img
              src="/phone-mockup.png"
              alt="Phone Mockup"
              className="absolute top-[60%] right-[10%] w-[25%] max-w-lg h-auto"
            />
          </section>

          {/* Products Section */}
          <section id="products" className="w-full h-screen">
            <div className="h-full bg-green-500 flex items-center justify-center">
              <h1 className="text-white text-4xl font-bold">Våra Tjänster</h1>
            </div>
          </section>

          <section id="articles" className="w-full h-screen">
            <div className="h-full bg-red-500 flex items-center justify-center">
              <h1 className="text-white text-4xl font-bold">Artiklar</h1>
            </div>
          </section>

          <section id="values" className="w-full h-screen">
            <div className="h-full bg-yellow-500 flex items-center justify-center">
              <h1 className="text-white text-4xl font-bold">Våra Värderingar</h1>
            </div>
          </section>

          <section id="careers" className="w-full">
            <div className="h-screen bg-purple-500 flex items-center justify-center">
              <h1 className="text-white text-4xl font-bold">Karriär</h1>
            </div>
          </section>

          <Footer />
        </div>
      </body>
    </html>
  );
}
