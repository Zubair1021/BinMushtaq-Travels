import React from 'react';
import { useNavigate } from 'react-router-dom';
import transportservice from '../../media/Transport-Service.png'; 
import umrahservice from '../../media/Umrah-Service.png';
import visaService from '../../media/Visa-Service.png';
import logo from '/logo.png';

const services = [
  {
    title: 'Umrah Services',
    image: umrahservice,
    description: 'Comprehensive Umrah packages with visa, flights, accommodation, and guidance for a seamless spiritual journey.',
    link: '/packages',
  },
  {
    title: 'Visa Services',
    image: visaService,
    description: 'Expert assistance for Saudi visas, ensuring a smooth and hassle-free application process for all travelers.',
    link: '/visa-services',
  },
  {
    title: 'Transport Services in Saudia',
    image: transportservice,
    description: 'Reliable and comfortable transport solutions within Saudi Arabia for pilgrims and tourists.',
    link: '/transport-services',
  },
];

const OurServices: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section id="our-services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <button
              key={service.title}
              className="relative rounded-xl overflow-hidden shadow-lg group h-72 flex items-end justify-center bg-gray-200 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
              onClick={() => navigate(service.link)}
              type="button"
              tabIndex={0}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Logo: only show on md+ screens */}
              <img
                src={logo}
                alt="Logo"
                className="absolute top-4 right-4 w-12 h-12 z-30 opacity-80"
                style={{ pointerEvents: 'none' }}
              />
              {/* Overlay for darken effect on hover */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-colors duration-300 z-10" />
              {/* Title always visible */}
              <div className="relative z-20 w-full bg-gradient-to-t from-black/70 to-transparent p-6 flex justify-center">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg text-center">{service.title}</h3>
              </div>
              {/* Description appears on hover with animation */}
              <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300">
                <p className="text-white text-lg font-medium text-center px-6 drop-shadow-lg bg-black/60 rounded-lg py-4 max-w-xs">{service.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
