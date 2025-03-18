
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import ComingSoon from '@/components/ComingSoon';
import Waitlist from '@/components/Waitlist';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.getElementById(href.substring(1));
          if (element) {
            window.scrollTo({
              top: element.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    setIsLoaded(true);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Set initial theme based on user preference
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-penworld-cream dark:bg-[#1A1F2C] overflow-x-hidden`}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <ComingSoon />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
