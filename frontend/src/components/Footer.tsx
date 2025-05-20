import React from 'react';
import { Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 text-white p-6 bg-blue-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-white/80 mb-4 md:mb-0">
          © {new Date().getFullYear()} Bin Mushtaq Travel & Tours. All rights reserved.
        </p>
        
        <div className="flex space-x-8">
          <a 
            href="#" 
            className="text-white/80 hover:text-amber-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="text-white/80 hover:text-amber-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="text-white/80 hover:text-amber-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;