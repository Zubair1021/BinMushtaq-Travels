import React, { useState } from 'react';
import Hero from '../components/home/Hero';
import PackageCategories from '../components/home/PackageCategories';
import PackageCard from '../components/home/PackageCard';
import PackageDetails from '../components/home/PackageDetails';
import Airlines from '../components/home/Airlines';
import Testimonials from '../components/home/Testimonials';
import { packageCategories, travelPackages, testimonials } from '../data/TravelData';
import { TravelPackage } from '../types';

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(packageCategories[0].id);
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);

  const filteredPackages = travelPackages.filter(
    (pack) => pack.categoryId === activeCategory
  );

  const handlePackageClick = (packageId: string) => {
    const pack = travelPackages.find((p) => p.id === packageId);
    if (pack) {
      setSelectedPackage(pack);
      document.body.style.overflow = 'hidden';
    }
  };

  const handleClosePackageDetails = () => {
    setSelectedPackage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <Airlines />
      
      <section id="packages" className="py-20">
        <div className="container mx-auto px-4">
          <PackageCategories 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categories={packageCategories}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pack) => (
              <PackageCard 
                key={pack.id} 
                pack={pack} 
                onClick={handlePackageClick}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Testimonials testimonials={testimonials} />
      
      <section id="newsletter" className="py-20 bg-primary-600 dark:bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Travel Community</h2>
            <p className="text-white/80 mb-8">
              Subscribe to our newsletter and receive exclusive offers, travel tips, and inspiration for your next adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-auto flex-1 sm:max-w-md"
              />
              <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-md transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {selectedPackage && (
        <PackageDetails pack={selectedPackage} onClose={handleClosePackageDetails} />
      )}
    </div>
  );
};

export default Home;