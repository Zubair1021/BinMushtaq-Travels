import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
  id: 1,
  image: 'https://images.unsplash.com/photo-1627728734379-a5f8c099763e?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVjY2ElMjBrYWFiYXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000g',
  title: 'Umrah Experience',
  subtitle: 'A sacred journey to Makkah'
 },

  {
    id: 2,
    image: 'https://images.pexels.com/photos/1310788/pexels-photo-1310788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Journey of a Lifetime',
    subtitle: 'Discover spiritual destinations '
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Explore Natural Wonders',
    subtitle: 'Adventure tours to the most breathtaking destinations'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/3217663/pexels-photo-3217663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Cultural Immersion',
    subtitle: 'Embrace local traditions and create lasting memories'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToNextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="h-full">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            
            <div className="relative z-20 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/80 mb-8">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a 
                      href="/packages" 
                      className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-md transition-colors inline-flex items-center justify-center"
                    >
                      Explore Packages
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                    <a 
                      href="/contact" 
                      className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-md transition-colors inline-flex items-center justify-center"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;