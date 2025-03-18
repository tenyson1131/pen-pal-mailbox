
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-penworld-cream/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-penworld italic font-bold text-penworld-forest">PenWorld</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#coming-soon" className="nav-link">Coming Soon</a>
            <a href="#waitlist" className="btn-primary">Join Waitlist</a>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-penworld-forest hover:text-penworld-amber"
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
        <div className="md:hidden bg-penworld-cream/95 backdrop-blur-md shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <a 
              href="#about" 
              className="block py-2 text-penworld-forest hover:text-penworld-amber"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#features" 
              className="block py-2 text-penworld-forest hover:text-penworld-amber"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#coming-soon" 
              className="block py-2 text-penworld-forest hover:text-penworld-amber"
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
