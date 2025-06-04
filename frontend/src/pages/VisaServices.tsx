import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Globe, Clock, DollarSign, FileCheck } from 'lucide-react';

interface VisaType {
  id: string;
  title: string;
  description: string;
  image: string;
  requirements: string[];
  processingTime: string;
  fee: number;
  validity: string;
}

const visaTypes: VisaType[] = [
  {
    id: 'saudi',
    title: 'Saudi Arabia Visa',
    description: 'Tourist and Umrah visas for Saudi Arabia with fast processing.',
    image: 'https://images.pexels.com/photos/3617460/pexels-photo-3617460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requirements: [
      'Valid passport with 6 months validity',
      'Passport-size photographs',
      'Bank statements',
      'Travel insurance',
      'Hotel bookings',
      'Return flight tickets'
    ],
    processingTime: '5-7 working days',
    fee: 300,
    validity: '1 year multiple entry'
  },
  {
    id: 'uae',
    title: 'UAE Visa',
    description: 'Tourist and business visas for the United Arab Emirates.',
    image: 'https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requirements: [
      'Valid passport',
      'Colored photographs',
      'Bank statements',
      'Travel insurance',
      'Hotel reservations',
      'Return tickets'
    ],
    processingTime: '3-5 working days',
    fee: 250,
    validity: '30 days single entry'
  },
  {
    id: 'uk',
    title: 'UK Visa',
    description: 'Standard visitor and business visas for the United Kingdom.',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    requirements: [
      'Valid passport',
      'Proof of accommodation',
      'Bank statements',
      'Employment letter',
      'Travel insurance',
      'Detailed itinerary'
    ],
    processingTime: '15 working days',
    fee: 500,
    validity: '6 months multiple entry'
  },
  // Add more visa types as needed
];

const VisaServices = () => {
  const [selectedVisa, setSelectedVisa] = useState<VisaType | null>(null);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Visa Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Fast and reliable visa processing for your travel needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaTypes.map((visa, index) => (
            <motion.div
              key={visa.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setSelectedVisa(visa)}
            >
              <div className="relative h-48">
                <img
                  src={visa.image}
                  alt={visa.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{visa.title}</h3>
                    <p className="text-white/80 text-sm">{visa.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {visa.processingTime}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    ${visa.fee}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedVisa && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedVisa(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedVisa.image}
                    alt={selectedVisa.title}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => setSelectedVisa(null)}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedVisa.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedVisa.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                      <Clock className="w-5 h-5 text-primary-500" />
                      <div>
                        <p className="font-medium">Processing Time</p>
                        <p>{selectedVisa.processingTime}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                      <Globe className="w-5 h-5 text-primary-500" />
                      <div>
                        <p className="font-medium">Validity</p>
                        <p>{selectedVisa.validity}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Requirements
                    </h3>
                    <ul className="space-y-3">
                      {selectedVisa.requirements.map((req, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <FileCheck className="w-5 h-5 text-green-500 mr-2" />
                          {req}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <span>Apply Now</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VisaServices;