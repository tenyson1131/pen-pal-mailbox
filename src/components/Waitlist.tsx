
import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Waitlist: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('waitlist');
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll notify you when we launch!",
      });
    }, 1500);
  };
  
  return (
    <section id="waitlist" className="py-20 md:py-32 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="inline-block bg-penworld-olive/10 rounded-full px-3 py-1 text-penworld-forest text-sm font-medium mb-2">
                Join the Waitlist
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-penworld-forest mb-4">
                Be Among the First to Experience PenWorld
              </h2>
              <p className="text-penworld-forest/80">
                Sign up for our waitlist to get early access to PenWorld when we launch. We'll notify you as soon as the platform is ready.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-penworld-caramel" />
                  </div>
                  <div className="ml-3">
                    <p className="text-penworld-forest/80">Early access to the PenWorld platform</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-penworld-caramel" />
                  </div>
                  <div className="ml-3">
                    <p className="text-penworld-forest/80">Exclusive features and premium perks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-penworld-caramel" />
                  </div>
                  <div className="ml-3">
                    <p className="text-penworld-forest/80">Be part of shaping our community from day one</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="bg-penworld-cream rounded-lg p-8 shadow-lg border border-penworld-caramel/20">
                <h3 className="text-xl font-bold text-penworld-forest mb-6 text-center">
                  Join Our Waitlist
                </h3>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-penworld-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-penworld-olive" />
                    </div>
                    <h4 className="text-lg font-bold text-penworld-forest mb-2">Thank You!</h4>
                    <p className="text-penworld-forest/70">
                      You've been added to our waitlist. We'll notify you when we launch!
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-penworld-olive hover:text-penworld-amber underline transition-colors"
                    >
                      Submit another email
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-penworld-forest mb-1">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-penworld-caramel/30 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-penworld-olive"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full btn-primary ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                      </button>
                    </div>
                    
                    <p className="text-xs text-center text-penworld-forest/60 mt-4">
                      By signing up, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
