import React, { useState, useEffect } from 'react';
import { travelPackages, packageCategories } from '../data/TravelData';
import PackageCard from '../components/home/PackageCard';
import PackageDetails from '../components/home/PackageDetails';
import { Search, Filter, X } from 'lucide-react';
import { TravelPackage } from '../types';

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Convert USD to PKR (approximate conversion rate)
  const usdToPkr = (usd: number) => usd * 280;

  // Find the maximum and minimum prices to set appropriate range
  const maxPackagePrice = Math.max(...travelPackages.map(pack => usdToPkr(pack.price)));
  const minPackagePrice = Math.min(...travelPackages.map(pack => usdToPkr(pack.price)));
  
  // Set initial price range based on actual package prices
  const [priceRange, setPriceRange] = useState<[number, number]>([minPackagePrice, maxPackagePrice]);

  const filteredPackages = travelPackages.filter(pack => {
    const matchesCategory = selectedCategory === 'all' || pack.categoryId === selectedCategory;
    const matchesSearch = pack.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pack.location.toLowerCase().includes(searchQuery.toLowerCase());
    const pkrPrice = usdToPkr(pack.price);
    const matchesPrice = pkrPrice >= priceRange[0] && pkrPrice <= priceRange[1];
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  // Function to handle package selection by ID
  const handlePackageSelect = (packageId: string) => {
    const selected = travelPackages.find(p => p.id === packageId);
    if (selected) setSelectedPackage(selected);
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceRange([minPackagePrice, maxPackagePrice]);
  };

  // Check if any filters are active
  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all' || 
                          priceRange[0] !== minPackagePrice || priceRange[1] !== maxPackagePrice;

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
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg flex items-center gap-2"
              >
                <Filter className="w-5 h-5" />
                Filters
                {hasActiveFilters && (
                  <span className="bg-white text-primary-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    !
                  </span>
                )}
              </button>
              
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg flex items-center gap-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear All
                </button>
              )}
            </div>
          </div>

          <div className={`md:flex gap-6 ${showFilters ? 'block' : 'hidden md:flex'} p-4 bg-gray-100 dark:bg-gray-800 rounded-lg`}>
            <div className="mb-4 md:mb-0 flex-1">
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

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Price Range: PKR {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()}
              </label>
              <div className="space-y-2">
                <div className="flex gap-4 items-center">
                  <input
                    type="range"
                    min={minPackagePrice}
                    max={maxPackagePrice}
                    step={Math.ceil(maxPackagePrice / 50)}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="flex-1"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[100px] text-right">
                    Max: PKR {priceRange[1].toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>PKR {minPackagePrice.toLocaleString()}</span>
                  <span>PKR {maxPackagePrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results summary */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredPackages.length} of {travelPackages.length} packages
          </p>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map(pack => (
            <PackageCard
              key={pack.id}
              pack={pack}
              onClick={handlePackageSelect}
            />
          ))}
        </div>

        {filteredPackages.length === 0 && travelPackages.length > 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No packages found matching your criteria.
            </p>
            <button 
              onClick={resetFilters}
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {travelPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-red-600 dark:text-red-400">
              No packages available at the moment. Please check back later.
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