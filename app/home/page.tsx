"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MainSection from '../components/MainSection';
import ProductsSection from '../components/ProductsSection';
import StrategiesSection from '../components/StrategiesSection';
import Footer from '../components/Footer';

export default function HomePage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(true);

  useEffect(() => {
    // Check if the user has entered the correct password
    // const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    // if (!isAuthenticated) {
    //   router.push('/');
    //   return;
    // }
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
      <MainSection />
      <ProductsSection />
      <StrategiesSection />
      <Footer />
    </main>
  );
} 