
import React, { useEffect, useState } from 'react';

const ComingSoon: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [days, setDays] = useState(30);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('coming-soon');
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
  
  // Simulated countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (days > 0) {
        setDays(days - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [days, hours, minutes, seconds]);
  
  const TimeUnit: React.FC<{ value: number; label: string; delay: number }> = ({ value, label, delay }) => (
    <div 
      className={`flex flex-col items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-white w-20 h-20 md:w-24 md:h-24 rounded-lg shadow-md flex items-center justify-center mb-2">
        <span className="text-3xl md:text-4xl font-bold text-penworld-forest">{value}</span>
      </div>
      <span className="text-sm text-penworld-forest/80">{label}</span>
    </div>
  );
  
  return (
    <section id="coming-soon" className="py-20 md:py-32 bg-penworld-forest text-white relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[url('/paper-texture.png')] bg-repeat"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className={`inline-block bg-white/10 rounded-full px-3 py-1 text-white text-sm font-medium mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Coming Soon
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
            The Journey Begins Soon
          </h2>
          <p className={`text-lg text-white/80 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            We're putting the finishing touches on PenWorld to create a truly special experience. Join our waitlist to be the first to know when we launch.
          </p>
        </div>
        
        <div className="flex justify-center space-x-4 md:space-x-8 mb-16">
          <TimeUnit value={days} label="Days" delay={450} />
          <TimeUnit value={hours} label="Hours" delay={600} />
          <TimeUnit value={minutes} label="Minutes" delay={750} />
          <TimeUnit value={seconds} label="Seconds" delay={900} />
        </div>
        
        <div className={`max-w-md mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1050ms' }}>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-penworld-forest mb-4 text-center">Be the First to Experience PenWorld</h3>
            <p className="text-penworld-forest/70 mb-6 text-center">
              Join our waitlist and get exclusive early access when we launch.
            </p>
            <div className="flex flex-col space-y-4">
              <a 
                href="#waitlist" 
                className="btn-primary w-full bg-penworld-forest hover:bg-penworld-olive"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
