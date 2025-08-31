import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-2 sm:py-3'
          : theme === 'dark'
            ? 'bg-transparent py-4 sm:py-6'
            : 'bg-white/80 backdrop-blur-sm py-4 sm:py-6'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          {/* Company Name */}
          <div className="flex flex-col items-start">
            <span
              className={`text-lg sm:text-xl lg:text-2xl font-bold typewriter-text ${isScrolled || theme === 'dark'
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-800'
                }`}
            >
              Bin Mushtaq
            </span>
            <span
              className={`text-xs font-medium mt-0.5 hidden sm:block ${isScrolled || theme === 'dark'
                  ? 'text-gray-500 dark:text-gray-300'
                  : 'text-gray-600'
                }`}
            >
              Travels & Tours
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks isScrolled={isScrolled} theme={theme} />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-full transition-colors ${isScrolled
                ? 'hover:bg-gray-200 dark:hover:bg-gray-700'
                : 'hover:bg-gray-200 dark:hover:bg-gray-700/30'
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
        <div className="md:hidden flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-full transition-colors ${isScrolled
                ? 'hover:bg-gray-200 dark:hover:bg-gray-700'
                : 'hover:bg-gray-200 dark:hover:bg-gray-700/30'
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
                : 'hover:bg-gray-200 dark:hover:bg-gray-700/30'
              }`}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${isScrolled || theme === 'dark'
                    ? 'text-gray-800 dark:text-white'
                    : 'text-gray-800'
                  }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${isScrolled || theme === 'dark'
                    ? 'text-gray-800 dark:text-white'
                    : 'text-gray-800'
                  }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-4">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
          >
            Home
          </Link>
          <Link
            to="/packages"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 blink-dot"
          >
            Packages
          </Link>
          <Link
            to="/visa-services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 blink-dot"
          >
            Visa Services
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
          >
            Contact
          </Link>
          <Link
            to="/packages"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-center transition-colors"
          >
            Book Now
          </Link>
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
      : 'text-gray-800 hover:text-primary-600'
    }`;

  return (
    <>
      <Link to="/" className={linkClasses}>
        Home
      </Link>
      <Link to="/packages" className={`${linkClasses} blink-dot`}>
        Packages
      </Link>
      <Link to="/visa-services" className={`${linkClasses} blink-dot`}>
        Visa Services
      </Link>
      <Link to="/about" className={linkClasses}>
        About
      </Link>
      <Link to="/contact" className={linkClasses}>
        Contact
      </Link>
      <Link
        to="/packages"
        className={`py-2 px-4 rounded-md transition-colors ${isScrolled
            ? 'bg-primary-600 hover:bg-primary-700 text-white'
            : 'bg-primary-600 hover:bg-primary-700 text-white'
          }`}
      >
        Book Now
      </Link>

      {/* Typewriter Animation + Blink Dot Animation */}
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

          @keyframes blinkDot {
            0%, 100% { opacity: 0 }
            50% { opacity: 1 }
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

          .blink-dot::after {
            content: ' •';
            animation: blinkDot 1s infinite;
            margin-left: 4px;
            color: #ef4444; /* Red dot color, adjustable */
          }
        `}
      </style>
    </>
  );
};

export default Navbar;