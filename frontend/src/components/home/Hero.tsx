import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
{
  id: 5,
  title: 'Luxury Umrah Packages',
  subtitle: 'Comfort, convenience, and devotion combined'
},
{
  id: 6,
  title: 'Family Pilgrimage Plans',
  subtitle: 'Tailored spiritual journeys for your loved ones'
},
{
  id: 7,
  title: 'Ramadan Umrah Specials',
  subtitle: 'Experience the holy month in the heart of Islam'
},
{
  id: 8,
  title: 'Senior-Friendly Umrah',
  subtitle: 'Caring assistance for elderly pilgrims'
},
{
  id: 9,
  title: 'Budget-Friendly Packages',
  subtitle: 'Experience Umrah without financial stress'
},
{
  id: 10,
  title: 'Customizable Umrah Tours',
  subtitle: 'Design your own sacred journey with expert help'
},
{
  id: 11,
  title: 'Best Price Guarantee',
  subtitle: 'We match or beat competitor prices'
},
{
  id: 12,
  title: 'All-Inclusive Deals',
  subtitle: 'No hidden fees – hotels, transport & meals covered'
},

];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Single Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1627728734379-a5f8c099763e?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVjY2ElMjBrYWFiYXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000g')` }}>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Text Overlay */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight transition-opacity duration-500">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 transition-opacity duration-500">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/packages" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-md transition-colors inline-flex items-center justify-center"
              >
                Explore Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-md transition-colors inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8 bg-opacity-100' 
                : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;