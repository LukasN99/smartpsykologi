"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import ProductsSection from "./components/ProductsSection";
import StrategiesSection from "./components/StrategiesSection";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check authentication for all routes except the root path
    if (pathname !== '/') {
      const isAuthenticated = sessionStorage.getItem('isAuthenticated');
      if (!isAuthenticated) {
        router.push('/');
      }
    }
  }, [pathname, router]);

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
    if (!container || pathname === '/') return;

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
  }, [updateNavUnderline, pathname]);

  // If we're on the root path ('/'), render just the landing page
  if (pathname === '/') {
    return (
      <html lang="en">
        <body className="bg-[#faefe0]">
          {children}
        </body>
      </html>
    );
  }

  // For authenticated routes, render the full layout with header
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
          <StrategiesSection />
          <Footer />
        </main>
      </body>
    </html>
  );
}