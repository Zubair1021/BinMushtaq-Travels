import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (

    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-3'
      : 'bg-transparent py-6'
      }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex flex-col items-start">
          <span
            className={`text-2xl font-bold typewriter-text ${isScrolled || theme === 'dark'
              ? 'text-primary-600 dark:text-primary-400'
              : 'text-white'
              }`}
          >
            Bin Mushtaq
          </span>

          <span className={`text-xs font-medium mt-0.5 ${isScrolled || theme === 'dark'
            ? 'text-gray-500 dark:text-gray-300'
            : 'text-white/80'
            }`}>
            Travels & Tours
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks isScrolled={isScrolled} theme={theme} />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-full transition-colors ${isScrolled
              ? 'hover:bg-gray-200 dark:hover:bg-gray-700'
              : 'hover:bg-white/20 dark:hover:bg-gray-700/30'
              }`}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-full transition-colors ${isScrolled
              ? 'hover:bg-gray-200 dark:hover:bg-gray-700'
              : 'hover:bg-white/20 dark:hover:bg-gray-700/30'
              }`}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>

          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className={`p-2 rounded-full transition-colors ${isScrolled
              ? 'hover:bg-gray-200 dark:hover:bg-gray-700'
              : 'hover:bg-white/20 dark:hover:bg-gray-700/30'
              }`}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled || theme === 'dark'
                ? 'text-gray-800 dark:text-white'
                : 'text-white'
                }`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled || theme === 'dark'
                ? 'text-gray-800 dark:text-white'
                : 'text-white'
                }`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'
        }`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="\" className="block py-2 text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
            Home
          </a>
          <a href="\packages" className="block py-2 text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
            Packages
          </a>
          <a href="\about" className="block py-2 text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
            About
          </a>
          <a href="\contact" className="block py-2 text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
            Contact
          </a>
          <a href="#book" className="block py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-center transition-colors">
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

interface NavLinksProps {
  isScrolled: boolean;
  theme: 'light' | 'dark';
}

const NavLinks: React.FC<NavLinksProps> = ({ isScrolled, theme }) => {
  const linkClasses = `transition-colors ${isScrolled || theme === 'dark'
    ? 'text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400'
    : 'text-white hover:text-primary-200'
    }`;

  return (
    <>
      <a href="\" className={linkClasses}>Home</a>
      <a href="\packages" className={linkClasses}>Packages</a>
      <a href="\about" className={linkClasses}>About</a>
      <a href="\contact" className={linkClasses}>Contact</a>
      <a
        href="#book"
        className={`py-2 px-4 rounded-md transition-colors ${isScrolled
          ? 'bg-primary-600 hover:bg-primary-700 text-white'
          : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
          }`}
      >
        Book Now
      </a>


      {/* Typewritter Animation */}


      <style>
        {`
        @keyframes typewriter {
      0% { width: 0 }
      45% { width: 100% }
      55% { width: 100% }
      100% { width: 0 }
        }

        @keyframes blinkCaret {
      0%, 100% { border-color: transparent }
      50% { border-color: orange }
        }

        .typewriter-text {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      border-right: 2px solid orange;
      animation: typewriter 6s steps(30) infinite,
             blinkCaret 1s step-end infinite;
      animation-delay: 2s, 2s;
        }
      `}
      </style>



    </>
  );



};

export default Navbar;