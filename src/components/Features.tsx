
import React, { useEffect, useState } from 'react';
import { Globe, Users, Lock, Clock, PenTool, MessageSquare } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay, isVisible }) => {
  return (
    <div 
      className={`feature-card ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-penworld-olive/10 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-penworld-forest mb-2">{title}</h3>
      <p className="text-penworld-forest/70">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('features');
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
  
  const features = [
    {
      icon: <Globe className="w-6 h-6 text-penworld-olive" />,
      title: "Global Exploration",
      description: "Connect with people from around the world, discovering new cultures and perspectives through meaningful correspondence."
    },
    {
      icon: <Users className="w-6 h-6 text-penworld-olive" />,
      title: "Selective Sharing",
      description: "Choose who receives your letters. Share your thoughts only with those who matter most to you."
    },
    {
      icon: <Lock className="w-6 h-6 text-penworld-olive" />,
      title: "Privacy & Security",
      description: "Your letters remain private and secure. We prioritize your privacy with robust security measures."
    },
    {
      icon: <Clock className="w-6 h-6 text-penworld-olive" />,
      title: "Time-Delivered Content",
      description: "Experience the anticipation of waiting for a letter to arrive, just like traditional mail but in digital form."
    },
    {
      icon: <PenTool className="w-6 h-6 text-penworld-olive" />,
      title: "Personalized PenWorlds",
      description: "Create and customize your own PenWorld, a private space reflecting your personality and interests."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-penworld-olive" />,
      title: "Interactive Elements",
      description: "Enhance your letters with virtual postcards, collaborative projects, and other interactive elements."
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 paper-bg">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className={`inline-block bg-penworld-forest/10 rounded-full px-3 py-1 text-penworld-forest text-sm font-medium mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Key Features
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-penworld-forest mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
            Rediscover Connection Through Intentional Communication
          </h2>
          <p className={`text-lg text-penworld-forest/80 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            PenWorld combines the nostalgic charm of letter writing with modern technology to create a unique social experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 150}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
