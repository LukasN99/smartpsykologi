"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function Header() {
  const underlineRef = useRef<HTMLSpanElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [headerStyle, setHeaderStyle] = useState({});
  const [isInitialized, setIsInitialized] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "The Platform", href: "#platform" },
    { name: "The Strategies", href: "#strategies" },
  ];

  const setUnderlinePosition = useCallback((target: DOMRect, immediate = false) => {
    if (underlineRef.current && headerRef.current) {
      const navBounds = headerRef.current.getBoundingClientRect();
      const relativeLeft = target.left - navBounds.left;
      
      underlineRef.current.style.transition = immediate ? 'none' : 'all 0.3s ease';
      underlineRef.current.style.left = `${relativeLeft}px`;
      underlineRef.current.style.width = `${target.width}px`;

      if (immediate) {
        underlineRef.current.getBoundingClientRect();
      }
    }
  }, []);

  const updateUnderlineToActiveLink = useCallback(() => {
    if (!isInitialized) return;

    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const viewportMid = scrollY + viewportHeight / 2;

    const activeSection = sections.find((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = scrollY + rect.top;
      const sectionBottom = sectionTop + rect.height;
      
      return viewportMid >= sectionTop && viewportMid < sectionBottom;
    }) || sections[0];

    if (activeSection) {
      const currentNavLink = document.querySelector(
        `a[href="#${activeSection.id}"]`
      ) as HTMLElement;
      
      if (currentNavLink) {
        const currentRect = currentNavLink.getBoundingClientRect();
        setUnderlinePosition(currentRect);

        if (window.location.hash !== `#${activeSection.id}`) {
          window.history.replaceState(null, "", `#${activeSection.id}`);
        }
      }
    }
  }, [isInitialized, setUnderlinePosition]);

  useEffect(() => {
    const initializeUnderline = () => {
      const hash = window.location.hash || "#about";
      const activeLink = document.querySelector(`a[href="${hash}"]`) || 
                        document.querySelector('a[href="#about"]');
      
      if (activeLink instanceof HTMLElement) {
        const rect = activeLink.getBoundingClientRect();
        setUnderlinePosition(rect, true);
        
        setTimeout(() => {
          if (underlineRef.current) {
            underlineRef.current.style.transition = 'all 0.3s ease';
          }
          setIsInitialized(true);
        }, 0);
      }
    };

    initializeUnderline();
    
    const handleScroll = () => {
      requestAnimationFrame(updateUnderlineToActiveLink);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", initializeUnderline);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", initializeUnderline);
    };
  }, [isInitialized, setUnderlinePosition, updateUnderlineToActiveLink]);

  useEffect(() => {
    const calculateScrollbarWidth = () => {
      const container = document.querySelector("body > div.flex-grow");
      if (!container || !(container instanceof HTMLElement)) return;

      const scrollbarWidth = container.offsetWidth - container.clientWidth;
      setHeaderStyle({
        width: `calc(100% - ${scrollbarWidth}px)`,
        margin: "0 auto",
      });
    };

    calculateScrollbarWidth();
    window.addEventListener("resize", calculateScrollbarWidth);
    return () => {
      window.removeEventListener("resize", calculateScrollbarWidth);
    };
  }, []);

  const handleHover = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setUnderlinePosition(rect);
  }, [setUnderlinePosition]);

  const handleMouseLeave = useCallback(() => {
    updateUnderlineToActiveLink();
  }, [updateUnderlineToActiveLink]);

  return (
    <header
      ref={headerRef}
      className="absolute top-[48px] z-50 box-border w-full max-w-[80%] left-1/2 -translate-x-1/2"
      style={headerStyle}
    >
      <nav className="relative mx-auto flex justify-end py-2">
        <span
          ref={underlineRef}
          className="nav-underline absolute bottom-0 h-[2px] bg-[#E85C3A] transition-all duration-300 ease-in-out"
          style={{ left: 0, width: 0 }}
        ></span>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="relative px-6 text-base text-[#072707] transition-all"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}