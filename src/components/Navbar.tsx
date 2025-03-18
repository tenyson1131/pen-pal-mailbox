
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check if dark mode is enabled in local storage
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    setIsDark(darkModeEnabled);
    if (darkModeEnabled) {
      document.documentElement.classList.add('dark');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-penworld-cream/95 backdrop-blur-md shadow-md py-2 dark:bg-penworld-forest/95' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-caveat font-bold text-penworld-forest dark:text-penworld-cream">PenWorld</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#coming-soon" className="nav-link">Coming Soon</a>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-penworld-cream/50 text-penworld-forest hover:bg-penworld-cream/80 transition-colors dark:bg-penworld-forest/50 dark:text-penworld-cream dark:hover:bg-penworld-forest/80"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#waitlist" className="btn-primary">Join Waitlist</a>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-penworld-cream/50 text-penworld-forest hover:bg-penworld-cream/80 transition-colors dark:bg-penworld-forest/50 dark:text-penworld-cream dark:hover:bg-penworld-forest/80"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-penworld-forest hover:text-penworld-amber dark:text-penworld-cream dark:hover:text-penworld-caramel"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-penworld-cream/95 backdrop-blur-md shadow-md dark:bg-penworld-forest/95">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <a 
              href="#about" 
              className="block py-2 text-penworld-forest hover:text-penworld-amber dark:text-penworld-cream dark:hover:text-penworld-caramel"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#features" 
              className="block py-2 text-penworld-forest hover:text-penworld-amber dark:text-penworld-cream dark:hover:text-penworld-caramel"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#coming-soon" 
              className="block py-2 text-penworld-forest hover:text-penworld-amber dark:text-penworld-cream dark:hover:text-penworld-caramel"
              onClick={() => setIsMenuOpen(false)}
            >
              Coming Soon
            </a>
            <a 
              href="#waitlist" 
              className="block btn-primary w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
