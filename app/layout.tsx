"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FormsSection from "./components/FormsSection";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          // Update URL hash without triggering scroll
          const newHash = `#${entry.target.id}`;
          if (window.location.hash !== newHash) {
            window.history.replaceState(null, '', newHash);
          }
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
    <html lang="sv" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>Smart Psykologi | Digitala verktyg för vardagen</title>
        <meta name="description" content="Vi skapar digitala verktyg för vardagen – anpassade för personer med (och utan) NPF." />
      </head>
      <body className="font-roboto text-gray-900 antialiased">
        <Header />
        <main 
          ref={scrollContainerRef} 
          className="flex-1 w-full overflow-y-auto scroll-smooth"
          style={{ 
            scrollSnapType: 'y mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollPaddingTop: '64px', // Adjust for mobile header
          }}
        >
          <HomeSection />
          <FormsSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </main>
      </body>
    </html>
  );
}