import React, { useState } from 'react';
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