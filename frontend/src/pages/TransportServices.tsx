import React from 'react';
import transportService from '../media/Transport-Service.png';
import { VehicleCards, BusRates } from '../components/home/TransportServiceCards';



const TransportServices: React.FC = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 mt-20">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-4 text-center">Transport Services in Saudia</h1>
          <p className="text-gray-700 dark:text-gray-200 text-lg mb-4 text-center max-w-2xl mx-auto">
            We offer reliable, comfortable, and affordable transport solutions for all your travel needs in Saudi Arabia. Choose from a range of vehicles and routes to suit your journey, whether for Umrah, Ziyarat, or city transfers.
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1 max-w-xl mx-auto mb-8">
            <li>Modern fleet: Sedan, Staria, GMC, Hiace, and Buses</li>
            <li>Professional drivers</li>
            <li>Flexible routes and competitive rates</li>
            <li>Group and individual bookings</li>
          </ul>
        </div>
        <VehicleCards />
        <BusRates />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">* All rates are in SAR and subject to change.</p>
      </div>
    </section>
  );
};

export default TransportServices;
