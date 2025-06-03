import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { travelPackages, packageCategories } from '../data/TravelData';
import PackageCard from '../components/home/PackageCard';
import PackageDetails from '../components/home/PackageDetails';
import { Search, Filter } from 'lucide-react';
import { TravelPackage } from '../types';

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredPackages = travelPackages.filter(pack => {
    const matchesCategory = selectedCategory === 'all' || pack.categoryId === selectedCategory;
    const matchesSearch = pack.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pack.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = pack.price >= priceRange[0] && pack.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Click to WhatsApp Button */}
      <motion.a
        href="https://wa.me/923224340536?text=Hi%20Bin%20Mushtaq%20Travel%20%26%20Trours%20%0AI%20want%20some%20details%20related%20your%20Packages%20"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-2"
        aria-label="Click to WhatsApp"
        role="link"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: 1,
        }}
        transition={{
          scale: { duration: 5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
          opacity: { duration: 0.6, delay: 0.6 },
        }}
        whileHover={{ scale: 1.15 }}
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.002 2.003C6.478 2.003 2 6.482 2 12.004a9.963 9.963 0 001.487 5.29l-1.54 5.623 5.78-1.517A10 10 0 1012.002 2.003zm.037 17.902a8.01 8.01 0 01-4.068-1.123l-.292-.172-3.43.9.918-3.342-.19-.307a7.95 7.95 0 01-1.253-4.205c0-4.414 3.588-8.002 8.002-8.002 4.414 0 8.002 3.588 8.002 8.002a7.983 7.983 0 01-7.69 7.91zm4.432-5.83c-.243-.122-1.442-.711-1.664-.792-.222-.082-.383-.122-.544.122-.16.243-.623.791-.764.954-.14.161-.283.182-.525.06a6.536 6.536 0 01-1.92-1.18 7.204 7.204 0 01-1.336-1.646c-.14-.243-.015-.375.106-.497.11-.11.243-.283.365-.424.12-.14.16-.243.243-.405.08-.162.04-.304-.02-.425-.06-.122-.544-1.312-.745-1.794-.2-.482-.402-.416-.544-.416H8.42c-.141 0-.365.06-.556.283-.19.223-.73.713-.73 1.737s.748 2.016.853 2.154c.104.14 1.472 2.254 3.563 3.16 2.09.905 2.09.603 2.466.565.376-.04 1.207-.494 1.375-.97.17-.475.17-.88.122-.97-.049-.09-.202-.141-.445-.263z" />
        </svg>
        <span>Click to WhatsApp</span>
      </motion.a>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Travel Packages
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Discover our carefully curated selection of travel experiences
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by destination or package name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden px-4 py-2 bg-primary-600 text-white rounded-lg flex items-center gap-2"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          <div className={`md:flex gap-6 ${showFilters ? 'block' : 'hidden md:flex'}`}>
            <div className="mb-4 md:mb-0">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800"
              >
                <option value="all">All Categories</option>
                {packageCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Price Range (${priceRange[0]} - ${priceRange[1]})
              </label>
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map(pack => (
            <PackageCard
              key={pack.id}
              pack={pack}
              onClick={() => setSelectedPackage(pack)}
            />
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No packages found matching your criteria.
            </p>
          </div>
        )}

        {selectedPackage && (
          <PackageDetails
            pack={selectedPackage}
            onClose={() => setSelectedPackage(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Packages;