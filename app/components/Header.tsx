"use client";

import { useEffect, useRef, useState } from "react";

export default function Header() {
  const underlineRef = useRef<HTMLSpanElement>(null);
  const [headerStyle, setHeaderStyle] = useState({});
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Articles", href: "#articles" },
    { name: "Contact", href: "#contact" }, // Updated "Values" to "Contact"
  ];

  const setUnderlinePosition = (target: DOMRect) => {
    if (underlineRef.current) {
      underlineRef.current.style.left = `${target.left}px`;
      underlineRef.current.style.width = `${target.width}px`;
    }
  };

  const updateUnderlineToActiveLink = () => {
    const sections = navItems.map((item) =>
      document.querySelector(item.href)
    ) as HTMLElement[];
    const currentScroll = window.scrollY + window.innerHeight / 2;

    const activeSection = sections.find(
      (section) =>
        section.offsetTop <= currentScroll &&
        section.offsetTop + section.offsetHeight > currentScroll
    );

    if (activeSection) {
      const navLink = document.querySelector(
        `a[href="#${activeSection.id}"]`
      ) as HTMLElement;
      if (navLink) {
        const rect = navLink.getBoundingClientRect();
        setUnderlinePosition(rect);
        if (window.location.hash !== `#${activeSection.id}`) {
          window.history.replaceState(null, "", `#${activeSection.id}`);
        }
      }
    }
  };

  useEffect(() => {
    const initializeUnderline = () => {
      const activeLink = document.querySelector(`a[href="#about"]`) as HTMLElement;
      if (activeLink && underlineRef.current) {
        const rect = activeLink.getBoundingClientRect();
        underlineRef.current.style.left = `${rect.left}px`;
        underlineRef.current.style.width = `${rect.width}px`;
        underlineRef.current.style.transition = "none"; // No transition on initialization
      }
    };

    initializeUnderline();

    // Add transition after initialization
    setTimeout(() => {
      if (underlineRef.current) {
        underlineRef.current.style.transition = "left 0.3s ease, width 0.3s ease";
      }
    }, 0);

    window.addEventListener("scroll", updateUnderlineToActiveLink);

    return () => {
      window.removeEventListener("scroll", updateUnderlineToActiveLink);
    };
  }, []);

  useEffect(() => {
    const calculateScrollbarWidth = () => {
      const container = document.querySelector("body > div.flex-grow") as HTMLElement;
      if (!container) return;

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

  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget.getBoundingClientRect();
    setUnderlinePosition(target);
  };

  const handleMouseLeave = () => {
    updateUnderlineToActiveLink();
  };

  return (
    <header
      className="fixed top-0 z-50 box-border w-full"
      style={{ ...headerStyle, backgroundColor: "rgba(0, 0, 0, 0.005)" }}
    >
      <nav className="relative mx-auto flex justify-end py-4 px-6">
        <span
          ref={underlineRef}
          className="nav-underline absolute bottom-0 h-[2px] bg-[#ffffff]"
        ></span>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="relative px-6 text-lg font-medium text-[#ffffff] hover:font-bold transition-all"
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