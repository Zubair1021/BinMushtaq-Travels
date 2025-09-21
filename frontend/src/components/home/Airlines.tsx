import React from 'react';
import { motion } from 'framer-motion';
import emiratesLogo from '../../media/Emirates.png'; 
import qatarLogo from '../../media/Qatar.png'; 
import saudiLogo from '../../media/Saudi.png'; 
import etihadLogo from '../../media/Etihad.png'; 
import pialogo from '../../media/PIA.png'; 
import turkishlogo from '../../media/Turkish.png'; 
import airbluelogo from '../../media/AirBlue.png'; 
import airsiallogo from '../../media/AirSial.png'; 
import airinduslogo from '../../media/AirIndus.png'; 
import airarabialogo from '../../media/AirArabia.png'; 



const airlineLogos = [
  {
    name: 'Emirates',
    logo: emiratesLogo,
  },
  {
    name: 'Qatar Airways',
    logo: qatarLogo,
  },
  {
    name: 'PIA Airlines',
    logo: pialogo ,
  },
  {
    name: 'Etihad Airways',
    logo:  etihadLogo,
  },
  {
    name: 'Saudia Airline',
    logo: saudiLogo,
  },
    {
    name: 'Turkish Airline',
    logo: turkishlogo,
  },
  {
    name: 'Airblue Airline',
    logo: airbluelogo,
  },
  {
    name: 'AirSial Airline',
    logo: airsiallogo,
  },
  {
    name: 'AirIndus Airline',
    logo: airinduslogo,
  },
  {
    name: 'AirArabia Airline',
    logo: airarabialogo,
  },
];

const Airlines = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12 tracking-tight"
        >
          Our Airline Partners
        </motion.h2>

        {/* Left & Right Blur Overlays */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white dark:from-gray-800 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white dark:from-gray-800 to-transparent z-10 pointer-events-none" />

        <div className="relative h-48 overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
            }}
            className="flex space-x-10 absolute"
          >
            {[...airlineLogos, ...airlineLogos].map((airline, index) => (
              <motion.div
                key={`${airline.name}-${index}`}
                whileHover={{ scale: 1.1 }}
                className="w-44 h-44 flex-shrink-0 flex items-center justify-center p-3 transition-transform duration-300 ease-in-out"
              >
                <img
                  src={airline.logo}
                  alt={`${airline.name} logo`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  width="176"
                  height="176"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Airlines;



