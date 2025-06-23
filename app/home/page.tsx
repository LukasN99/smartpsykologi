"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import HomeSection from '../components/HomeSection';
import FormsSection from '../components/FormsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Check if the user has entered the correct password
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/');
      return;
    }
    setIsAuthorized(true);

    // Handle initial hash navigation if present
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [router]);

  // Don't render anything until we confirm authorization
  if (!isAuthorized) {
    return null;
  }

  return (
    <main 
      className="flex-1 overflow-y-auto scroll-smooth"
      style={{ 
        scrollSnapType: 'y mandatory',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <HomeSection />
      <FormsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
} 