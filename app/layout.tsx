"use client";

import { useEffect, useRef } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/MainSection";
import ProductsSection from "./components/ProductsSection";
import ArticlesSection from "./components/ArticlesSection";
import ContactSection from "./components/ContactSection";

export default function RootLayout() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) {
      console.error("scrollContainerRef is null");
      return;
    }

    const sections = Array.from(container.querySelectorAll("section")) as HTMLElement[];
    console.log("Sections found:", sections);

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
      <body className="flex flex-col min-h-screen">
        <Header />
        <div ref={scrollContainerRef} className="flex-grow overflow-y-auto relative">
          <HeroSection />
          <ProductsSection />
          <ArticlesSection />
          <ContactSection />
          <Footer />
        </div>
      </body>
    </html>
  );
}