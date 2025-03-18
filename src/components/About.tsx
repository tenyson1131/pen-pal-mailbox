
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const About: React.FC = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (section) {
        const top = section.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="about" className="relative py-20 md:py-32 bg-white">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-penworld-cream to-transparent"></div>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className={`inline-block bg-penworld-olive/10 rounded-full px-3 py-1 text-penworld-forest text-sm font-medium mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0ms' }}>
            Our Vision
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-penworld-forest mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
            Reimagining Social Connections Through the Art of Letter Writing
          </h2>
          <p className={`text-lg text-penworld-forest/80 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            PenWorld was born from a simple observation: modern social media has made us more connected yet less connected than ever before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className={`space-y-6 order-2 md:order-1 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-penworld-forest">A Different Approach to Connection</h3>
              <p className="text-penworld-forest/80">
                Instead of endless scrolling and superficial interactions, PenWorld encourages thoughtful communication through time-delayed letters. Each message is delivered with purpose, creating anticipation and meaningful exchange.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-penworld-forest">Reducing Screen Time</h3>
              <p className="text-penworld-forest/80">
                Our platform is designed to liberate you from the addictive cycle of instant gratification. By introducing intentional delays, we help you break free from constant notifications and foster a healthier relationship with technology.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-penworld-forest">Preserving the Art of Correspondence</h3>
              <p className="text-penworld-forest/80">
                We're bringing back the thoughtfulness and intimacy of traditional letter writing in a digital format. This encourages more meaningful and personal sharing between connections.
              </p>
            </div>
          </div>
          
          <div className={`relative h-[400px] md:h-[500px] order-1 md:order-2 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-penworld-caramel/20 rounded-full"></div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-xl w-72 rotate-3 z-20">
              <div className="border-2 border-penworld-forest p-6 rounded letter-pattern">
                <div className="border-b border-penworld-forest/30 pb-4 mb-4">
                  <div className="font-penworld text-xl font-bold text-penworld-forest">Our Philosophy</div>
                </div>
                <p className="text-sm text-penworld-forest/90 italic leading-relaxed">
                  "We believe that by slowing down our digital interactions, we create space for more meaningful connections. When we take time to craft our thoughts, we communicate with greater intention and authenticity."
                </p>
                <div className="mt-6 flex justify-end">
                  <div className="font-penworld italic text-lg text-penworld-amber">The PenWorld Team</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-10 right-10 bg-white p-5 rounded-lg shadow-lg -rotate-6 w-48 z-10">
              <div className="space-y-2">
                <div className="h-2 bg-penworld-olive/20 rounded w-5/6"></div>
                <div className="h-2 bg-penworld-olive/20 rounded w-4/6"></div>
                <div className="h-2 bg-penworld-olive/20 rounded w-full"></div>
                <div className="h-2 bg-penworld-olive/20 rounded w-3/4"></div>
              </div>
            </div>
            
            <div className="absolute top-10 left-10 bg-white p-4 rounded-lg shadow-lg rotate-6 w-40 z-10">
              <div className="space-y-2">
                <div className="h-2 bg-penworld-caramel/20 rounded w-full"></div>
                <div className="h-2 bg-penworld-caramel/20 rounded w-5/6"></div>
                <div className="h-2 bg-penworld-caramel/20 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
