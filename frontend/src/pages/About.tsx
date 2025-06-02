import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Bin Mustaq Travel
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your trusted partner in creating meaningful travel experiences and spiritual journeys since 2010
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <ValueCard
            icon={<Users className="w-8 h-8" />}
            title="Expert Guidance"
            description="Our experienced team ensures every journey is well-planned and meaningful"
          />
          <ValueCard
            icon={<Award className="w-8 h-8" />}
            title="Quality Service"
            description="Premium accommodations and services tailored to your needs"
          />
          <ValueCard
            icon={<Globe className="w-8 h-8" />}
            title="Global Reach"
            description="Connecting travelers to destinations worldwide with local expertise"
          />
          <ValueCard
            icon={<Heart className="w-8 h-8" />}
            title="Personal Touch"
            description="Customized experiences that cater to your spiritual and travel goals"
          />
        </div>

        {/* Story Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-16 shadow-soft">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Founded in 2010, Bin Mustaq Travel began with a vision to provide meaningful travel experiences that combine spiritual enrichment with world exploration. Our journey started with organizing Umrah trips, and has since expanded to include a wide range of travel services.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Today, we're proud to have helped thousands of travelers achieve their dreams, whether it's performing Umrah, exploring historical sites, or embarking on adventure tours. Our commitment to excellence and personal service remains at the heart of everything we do.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <StatCard number="15+" text="Years Experience" />
          <StatCard number="50k+" text="Happy Travelers" />
          <StatCard number="100+" text="Destinations" />
          <StatCard number="24/7" text="Support" />
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft">
    <div className="text-primary-600 dark:text-primary-400 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">
      {description}
    </p>
  </div>
);

const StatCard = ({ number, text }: { number: string; text: string }) => (
  <div className="bg-primary-600 dark:bg-primary-700 p-6 rounded-xl text-center text-white">
    <div className="text-3xl font-bold mb-2">{number}</div>
    <div className="text-primary-100">{text}</div>
  </div>
);

export default About;