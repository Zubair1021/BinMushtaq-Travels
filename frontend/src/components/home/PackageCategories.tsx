import React from 'react';
import { PackageCategory } from '../../types';
import { Plane, Umbrella, Fuel as Mosque, Mountain, GraduationCap,ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PackageCategoriesProps {
  activeCategory: string;
  setActiveCategory: (id: string) => void;
  categories: PackageCategory[];
}

const PackageCategories: React.FC<PackageCategoriesProps> = ({ 
  activeCategory, 
  setActiveCategory,
  categories 
}) => {
  const renderIcon = (iconName: string) => {
    const iconProps = { className: "h-6 w-6" };
    switch (iconName) {
      case 'Plane': return <Plane {...iconProps} />;
      case 'Umbrella': return <Umbrella {...iconProps} />;
      case 'Mosque': return <Mosque {...iconProps} />;
      case 'Mountain': return <Mountain {...iconProps} />;
      case 'GraduationCap': return <GraduationCap {...iconProps} />;
      default: return <Plane {...iconProps} />;
    }
  };

  return (
    <div className="mb-12">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Explore Our Packages</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
          Discover our carefully curated travel experiences tailored to your interests and spiritual needs
        </p>
      </div>
      
      {/* Desktop Categories */}
      <div className="hidden md:flex justify-center space-x-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center px-6 py-3 rounded-full transition-all ${
              activeCategory === category.id
                ? 'bg-primary-600 text-white shadow-md' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <span className="mr-2">
              {renderIcon(category.icon)}
            </span>
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Mobile Categories (Horizontal Scrollable) */}
      <div className="md:hidden overflow-x-auto pb-4 whitespace-nowrap flex space-x-2 px-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center px-4 py-2 rounded-full transition-all ${
              activeCategory === category.id
                ? 'bg-primary-600 text-white shadow-md' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            <span className="mr-2">
              {renderIcon(category.icon)}
            </span>
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <Link 
          to="/packages" 
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
        >
          <span className="mr-2">For more about our packages, explore our complete collection</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default PackageCategories;