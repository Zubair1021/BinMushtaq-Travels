import React from 'react';
import { TravelPackage } from '../../types';
import { Clock, MapPin, Star } from 'lucide-react';

interface PackageCardProps {
  pack: TravelPackage;
  onClick: (packageId: string) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ pack, onClick }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${
          index < Math.floor(rating) 
            ? 'text-yellow-400 fill-yellow-400' 
            : index < rating 
              ? 'text-yellow-400 fill-yellow-400 opacity-50' 
              : 'text-gray-300 dark:text-gray-600'
        }`} 
      />
    ));
  };



  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
      onClick={() => onClick(pack.id)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={pack.image} 
          alt={pack.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width="400"
          height="192"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex justify-between items-center">
            <span className="text-white font-semibold">
              {pack.price.toLocaleString()} PKR
            </span>
            <div className="flex">
              {renderStars(pack.rating)}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {pack.title}
        </h3>
        
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3 text-sm">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{pack.location}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{pack.duration}</span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {pack.description}
        </p>
        
        <button className="w-full py-2 rounded-md text-center transition-colors text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium border border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PackageCard;