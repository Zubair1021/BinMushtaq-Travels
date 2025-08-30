import React, { useState } from 'react';
import { TravelPackage } from '../../types';
import { X, Clock, MapPin, Calendar, Check, X as XIcon, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface PackageDetailsProps {
  pack: TravelPackage | null;
  onClose: () => void;
}

const PackageDetails: React.FC<PackageDetailsProps> = ({ pack, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  if (!pack) return null;

  const handleBookNow = () => {
    const message = `Hello! I want to book the "${pack.title}" package. Please provide me with the booking procedure and availability.`;
    const whatsappUrl = `https://wa.me/923224340536?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContact = () => {
    const message = `Hello! I'm interested in the "${pack.title}" package and would like to get more detailed information. Could you please share all the relevant details?`;
    const whatsappUrl = `https://wa.me/923224340536?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextImage = () => {
    if (pack.hotelImages && pack.hotelImages.length > 0) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === pack.hotelImages.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (pack.hotelImages && pack.hotelImages.length > 0) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? pack.hotelImages.length - 1 : prevIndex - 1
      );
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${index < Math.floor(rating)
          ? 'text-yellow-400 fill-yellow-400'
          : index < rating
            ? 'text-yellow-400 fill-yellow-400 opacity-50'
            : 'text-gray-300 dark:text-gray-600'
          }`}
      />
    ));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div
        className="bg-white dark:bg-gray-900 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-xl m-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={pack.hotelImages && pack.hotelImages.length > 0 ? pack.hotelImages[currentImageIndex] : pack.image}
            alt={pack.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          
          {/* Image navigation arrows */}
          {pack.hotelImages && pack.hotelImages.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
          
          {/* Image indicators */}
          {pack.hotelImages && pack.hotelImages.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {pack.hotelImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {pack.title}
              </h2>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{pack.location}</span>
                <span className="mx-2">•</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{pack.duration}</span>
              </div>
              <div className="flex mb-4">
                {renderStars(pack.rating)}
              </div>
            </div>

            <div className="mt-4 md:mt-0 bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300 mb-1">Starting from</p>
              <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {pack.price.toLocaleString()} PKR
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">per person</p>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            {pack.description}
          </p>

          {/* Hotel Images Gallery */}
          {pack.hotelImages && pack.hotelImages.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Hotel Images</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {pack.hotelImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={`cursor-pointer overflow-hidden rounded-lg transition-all duration-200 ${
                      index === currentImageIndex ? 'ring-2 ring-primary-500' : 'opacity-80 hover:opacity-100'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img 
                      src={image} 
                      alt={`Hotel image ${index + 1}`}
                      className="w-full h-24 object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Package Features</h3>
              <ul className="space-y-2">
                {pack.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Included/Not Included */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What's Included</h3>
                <ul className="space-y-2">
                  {pack.included.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Not Included</h3>
                <ul className="space-y-2">
                  {pack.notIncluded.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <XIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>

          {/* Itinerary */}
          {/* <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Itinerary</h3>
            <div className="space-y-4">
              {pack.itinerary.map((day) => (
                <div key={day.day} className="border-l-2 border-primary-500 pl-4 pb-4">
                  <div className="flex items-center">
                    <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">
                      {day.day}
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{day.title}</h4>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{day.description}</p>
                </div>
              ))}
            </div>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleBookNow} className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-md transition-colors flex items-center justify-center">
              <Calendar className="mr-2 h-5 w-5" />
              Book Now
            </button>
            <button onClick={handleContact} className="border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white px-8 py-3 rounded-md transition-colors">
              Contact for details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;