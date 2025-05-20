import React, { useState, useEffect } from 'react';
import { Plane } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-4 px-6 md:px-10 
      ${scrolled ? 'glass-effect backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Plane 
            className={`w-8 h-8 transition-all duration-300 ${scrolled ? 'text-amber-400' : 'text-white'} 
            group-hover:text-amber-400 group-hover:scale-110`} 
            strokeWidth={1.5} 
          />
          <span 
            className={`font-semibold text-xl md:text-2xl transition-colors duration-300 
            ${scrolled ? 'text-white' : 'text-white'} group-hover:text-amber-400`}
          >
            Bin Mushtaq
          </span>
        </div>
        <div className={`text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-white/90' : 'text-white/90'}`}>
          Travel & Tours
        </div>
      </div>
    </header>
  );
};

export default Header;