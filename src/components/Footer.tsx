
import React from 'react';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-penworld-forest text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h1 className="text-2xl font-penworld italic font-bold text-white mb-4">PenWorld</h1>
            <p className="text-white/70 text-sm">
              Reimagining social connections through the art of letter writing. Create meaningful relationships in your personalized world.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white/70 hover:text-penworld-caramel transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-penworld-caramel transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-penworld-caramel transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-penworld-caramel transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Features</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-white/70 hover:text-penworld-caramel transition-colors text-sm">Personalized PenWorlds</a></li>
              <li><a href="#features" className="text-white/70 hover:text-penworld-caramel transition-colors text-sm">Selective Sharing</a></li>
              <li><a href="#features" className="text-white/70 hover:text-penworld-caramel transition-colors text-sm">Global Exploration</a></li>
              <li><a href="#features" className="text-white/70 hover:text-penworld-caramel transition-colors text-sm">Privacy & Security</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/70 hover:text-penworld-caramel transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-white/70 hover:text-penworld-caramel transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-penworld-caramel transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-penworld-caramel transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Join</h3>
            <ul className="space-y-3">
              <li><a href="#waitlist" className="text-white/70 hover:text-penworld-caramel transition-colors text-sm">Join Waitlist</a></li>
              <li><a href="#coming-soon" className="text-white/70 hover:text-penworld-caramel transition-colors text-sm">Coming Soon</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-white/60 text-sm">© 2023 PenWorld. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 justify-center md:justify-start">
              <li><a href="#" className="text-white/60 hover:text-penworld-caramel transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-white/60 hover:text-penworld-caramel transition-colors text-sm">Terms</a></li>
              <li><a href="#" className="text-white/60 hover:text-penworld-caramel transition-colors text-sm">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
