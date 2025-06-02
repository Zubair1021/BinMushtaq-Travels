import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">Bin Mustaq</h3>
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
              <FooterLink href="#about" text="About Us" />
              <FooterLink href="#packages" text="Our Packages" />
              <FooterLink href="#destinations" text="Destinations" />
              <FooterLink href="#testimonials" text="Testimonials" />
              <FooterLink href="#faq" text="FAQs" />
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <FooterLink href="#contact" text="Contact Us" />
              <FooterLink href="#terms" text="Terms & Conditions" />
              <FooterLink href="#privacy" text="Privacy Policy" />
              <FooterLink href="#refund" text="Refund Policy" />
              <FooterLink href="#help" text="Help Center" />
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
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Bin Mustaq Travel. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Terms
              </a>
              <a href="#privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Privacy
              </a>
              <a href="#cookies" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
    >
      {text}
    </a>
  </li>
);

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
  <a 
    href="#" 
    className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
  >
    {icon}
  </a>
);

export default Footer;