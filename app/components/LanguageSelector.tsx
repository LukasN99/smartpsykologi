"use client";

import { useState, useRef, useEffect } from "react";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-24 px-4 py-2 bg-white text-black rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition"
      >
        <span>{selectedLanguage}</span>
        <svg
          className={`w-4 h-4 ml-2 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-24 bg-white rounded-lg shadow-lg border border-gray-200">
          <ul className="py-1">
            <li>
              <button
                onClick={() => selectLanguage("EN")}
                className="block w-full px-4 py-2 text-left text-black hover:bg-gray-100"
              >
                EN
              </button>
            </li>
            <li>
              <button
                onClick={() => selectLanguage("SWE")}
                className="block w-full px-4 py-2 text-left text-black hover:bg-gray-100"
              >
                SWE
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}