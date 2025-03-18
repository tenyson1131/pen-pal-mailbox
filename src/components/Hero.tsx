
import React, { useEffect, useState } from 'react';
import { Mail, Clock, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 paper-bg overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 letter-pattern"></div>
      </div>
      <div className="absolute inset-0 vintage-pattern pointer-events-none"></div>
      <div className="absolute inset-0 bg-hero-pattern bg-repeat opacity-10 pointer-events-none"></div>
      
      {/* Content */}
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out`}>
            <div className="inline-block bg-penworld-olive/10 rounded-full px-3 py-1 text-penworld-forest text-sm font-medium mb-2 dark:bg-penworld-caramel/10 dark:text-penworld-cream">
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-penworld-forest dark:text-penworld-cream">
              Reconnect with <span className="italic text-penworld-amber dark:text-penworld-caramel">Authentic</span> Communication
            </h1>
            <p className="text-lg md:text-xl text-penworld-forest/90 max-w-xl dark:text-penworld-cream/90">
              Experience the joy of real connections through digital letters that take time to arrive. Reduce screen time and create meaningful relationships.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a href="#waitlist" className="btn-primary">
                Join Waitlist
              </a>
              <a href="#about" className="btn-secondary">
                Learn More
              </a>
            </div>
            
            <div className="pt-4 flex items-center space-x-8">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-penworld-olive mr-2 dark:text-penworld-caramel" />
                <span className="text-sm text-penworld-forest dark:text-penworld-cream">Time-Delayed</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-penworld-olive mr-2 dark:text-penworld-caramel" />
                <span className="text-sm text-penworld-forest dark:text-penworld-cream">Private Letters</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-penworld-olive mr-2 dark:text-penworld-caramel" />
                <span className="text-sm text-penworld-forest dark:text-penworld-cream">Global Connections</span>
              </div>
            </div>
          </div>
          
          <div className={`relative ${loaded ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 ease-out delay-300`}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-penworld-caramel/20 rounded-full animate-pulse-slow dark:bg-penworld-olive/20"></div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-penworld-olive/20 rounded-full animate-pulse-slow delay-1000 dark:bg-penworld-caramel/20"></div>
              
              {/* Envelope illustration */}
              <div className="relative z-20 bg-white p-8 rounded-lg shadow-xl rotate-3 animate-float dark:bg-penworld-forest/80">
                <div className="border-2 border-penworld-forest p-6 rounded dark:border-penworld-caramel">
                  <div className="border-b border-penworld-forest/30 pb-4 mb-4 dark:border-penworld-caramel/30">
                    <div className="font-caveat text-2xl font-bold text-penworld-forest dark:text-penworld-cream">Dear Friend,</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-penworld-forest/10 rounded w-full dark:bg-penworld-cream/10"></div>
                    <div className="h-3 bg-penworld-forest/10 rounded w-5/6 dark:bg-penworld-cream/10"></div>
                    <div className="h-3 bg-penworld-forest/10 rounded w-4/6 dark:bg-penworld-cream/10"></div>
                    <div className="h-3 bg-penworld-forest/10 rounded w-full dark:bg-penworld-cream/10"></div>
                    <div className="h-3 bg-penworld-forest/10 rounded w-3/4 dark:bg-penworld-cream/10"></div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <div className="font-caveat text-2xl text-penworld-amber dark:text-penworld-caramel">PenWorld</div>
                  </div>
                  <div className="absolute top-4 right-4 w-16 h-16 border-2 border-penworld-olive/50 rounded flex items-center justify-center dark:border-penworld-caramel/50">
                    <div className="font-caveat text-xs text-penworld-olive/70 rotate-12 dark:text-penworld-caramel/70">STAMP</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute z-10 -bottom-4 right-12 bg-white p-6 rounded-lg shadow-lg -rotate-6 animate-float dark:bg-penworld-forest/80" style={{ animationDelay: '2s' }}>
                <div className="border border-penworld-caramel/40 p-4 rounded dark:border-penworld-caramel/60">
                  <div className="space-y-2">
                    <div className="h-2 bg-penworld-caramel/20 rounded w-5/6 dark:bg-penworld-caramel/30"></div>
                    <div className="h-2 bg-penworld-caramel/20 rounded w-4/6 dark:bg-penworld-caramel/30"></div>
                    <div className="h-2 bg-penworld-caramel/20 rounded w-full dark:bg-penworld-caramel/30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 flex items-center justify-center text-penworld-forest dark:text-penworld-cream">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
