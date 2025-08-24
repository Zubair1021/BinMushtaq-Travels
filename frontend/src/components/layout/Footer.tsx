import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {

  const handleDeveloperClick = () => {
    const message = "Hi ZJ Developers (Muhammad Zubair), I saw your work on Bin Mushtaq Travel website. I'm interested in discussing a website development project. Can you please share more information about your services?";
    const whatsappUrl = `https://wa.me/923268550359?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">Bin Mushtaq</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Discover spiritual journeys and unforgettable adventures with our premium travel experiences.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink to="/about" text="About Us" />
              <FooterLink to="/packages" text="Our Packages" />
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <FooterLink to="/contact" text="Contact Us" />
              <FooterLink to="/" text="Terms & Conditions" />
              <FooterLink to="/" text="Privacy Policy" />
              <FooterLink to="/" text="Refund Policy" />
              <FooterLink to="/" text="Help Center" />
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Newsletter</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Subscribe to our newsletter for special deals and updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
                required
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                <Mail size={16} className="mr-2" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-2 mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Bin Mushtaq Travel. All rights reserved.
              </p>
              <span className="hidden md:block text-gray-400">•</span>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Developed by{" "}
                <button
                  onClick={handleDeveloperClick}
                  className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                >
                  ZJ Developer
                </button>
              </p>
            </div>
            <div className="flex space-x-4 sm:mr-10">
              <Link to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Terms
              </Link>
              <Link to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Privacy
              </Link>
              <Link to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, text }) => (
  <li>
    <Link
      to={to}
      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
    >
      {text}
    </Link>
  </li>
);

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
  <Link
    to="#"
    className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
  >
    {icon}
  </Link>
);

export default Footer;