"use client";

import { useEffect, useRef, useCallback } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import ProductsSection from "./components/ProductsSection";
import ContactSection from "./components/ContactSection";

export default function RootLayout() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const updateNavUnderline = useCallback((activeSection: Element) => {
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
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const sections = Array.from(container.querySelectorAll("section")) as HTMLElement[];
    let observer: IntersectionObserver;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateNavUnderline(entry.target);
        }
      });
    };

    observer = new IntersectionObserver(observerCallback, {
      root: container,
      threshold: 0.5,
    });

    sections.forEach((section) => observer.observe(section));

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [updateNavUnderline]);

  return (
    <html lang="en" className="overflow-hidden">
      <body className="flex flex-col h-screen overflow-hidden bg-[#faefe0]">
        <Header />
        <main 
          ref={scrollContainerRef} 
          className="flex-1 overflow-y-auto scroll-smooth"
          style={{ 
            scrollSnapType: 'y mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <MainSection />
          <ProductsSection />
          <ContactSection />
          <Footer />
        </main>
      </body>
    </html>
  );
}