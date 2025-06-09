import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Globe, Clock, FileCheck } from 'lucide-react';

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
    id: 'indonesia',
    title: 'Indonesia E-Visa (2 Months)',
    description: 'E-Visa services for Indonesia with scenic destinations.',
    image: 'https://images.unsplash.com/photo-1533805994737-558461dcb28e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW5kb25lc2lhJTIwZmxhZ3xlbnwwfHwwfHx8MA%3D%3D',
    requirements: [
      'Scanned Passport (first page)',
      'Bank statement for the last 1 year (closing balance 600,000)',
      'Picture in dark shirt (white background)',
      'Processing time 8 - 10 Working days'
    ],
    processingTime: '8 - 10 working days',
    fee: 26000,
    validity: '2 months'
  },
  {
    id: 'singapore',
    title: 'Singapore E-Visa (1 Month)',
    description: 'E-Visa services for Singapore with modern attractions.',
    image: 'https://images.unsplash.com/photo-1562300735-b1f7f50e774b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    requirements: [
      'Scanned Passport (first & second page)',
      'Bank statement for the last 1 year (closing balance 400,000)',
      'Picture in dark shirt (white background)',
      'Cnic copy scanned',
      'Email Address',
      'Processing time: 15 - 18 Working days'
    ],
    processingTime: '15 - 18 working days',
    fee: 14500,
    validity: '1 month'
  },
  {
    id: 'nepal',
    title: 'Nepal E-Visa (1 Month)',
    description: 'E-Visa services for Nepal with cultural landmarks.',
    image: 'https://plus.unsplash.com/premium_photo-1670782711832-bf4d7638114a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE5lcGFsfGVufDB8fDB8fHww',
    requirements: [
      'Valid Passport (Minimum 6 months scanned copy)',
      'Cnic copy scanned',
      '4 Pictures in dark shirt (white background)',
      'Bank statement for the last 6 months (closing balance 300,000)',
      'Account Maintenance Letter',
      'NTN',
      'Processing time 8 - 10 Working days'
    ],
    processingTime: '8 - 10 working days',
    fee: 22000,
    validity: '1 month'
  },
  {
    id: 'vietnam',
    title: 'Vietnam E-Visa',
    description: 'E-Visa services for Vietnam with stunning landscapes.',
    image: 'https://images.unsplash.com/photo-1544562258-d7a25aa0e669?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmlldG5hbSUyMGZsYWd8ZW58MHx8MHx8fDA%3D',
    requirements: [
      'Passport first page scanned',
      'Picture in dark shirt (white background)',
      'Processing time 8 - 10 Working days'
    ],
    processingTime: '8 - 10 working days',
    fee: 16000,
    validity: '1 month'
  },
  {
    id: 'cambodia',
    title: 'Cambodia E-Visa',
    description: 'E-Visa services for Cambodia with historical sites.',
    image: 'https://images.unsplash.com/photo-1588678097695-81d2d8b40e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FtYm9kaWElMjBmbGFnfGVufDB8fDB8fHww', 
    requirements: [
      'Passport first page scanned',
      'Cnic copy scanned',
      'Picture in dark shirt (white background)',
      'Air ticket & Hotel booking',
      'The bank statement for the last 6 months has a closing balance of approximately 3 lac',
      'Processing time 15 - 20 working days'
    ],
    processingTime: '15 - 20 working days',
    fee: 15000,
    validity: '1 month'
  },
  {
    id: 'kenya',
    title: 'Kenya E-Visa',
    description: 'E-Visa services for Kenya with wildlife adventures.',
    image: 'https://plus.unsplash.com/premium_photo-1670689708073-995104fd2e8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8S2VueWElMjBmbGFnfGVufDB8fDB8fHww', 
    requirements: [
      'Passport first page scanned',
      'Cnic copy scanned',
      'Picture in dark shirt (white background)',
      'Air ticket & Hotel booking',
      'Processing time: 7 working days'
    ],
    processingTime: '7 working days',
    fee: 22000,
    validity: '1 month'
  },
  {
    id: 'thailand',
    title: 'Thailand E-Visa',
    description: 'E-Visa services for Thailand with tropical beauty.',
    image: 'https://plus.unsplash.com/premium_photo-1670689707741-834c162fdba1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGhhaWxhbmQlMjBmbGFnfGVufDB8fDB8fHww',
    requirements: [
      'Valid Passport (Minimum 6 months scanned copy)',
      'Picture in dark shirt (white background)',
      'Cnic copy Scanned',
      'Processing time 8 - 10 working days'
    ],
    processingTime: '8 - 10 working days',
    fee: 18000,
    validity: '1 month'
  },
  {
    id: 'srilanka',
    title: 'Sri Lanka E-Visa',
    description: 'E-Visa services for Sri Lanka with rich heritage.',
    image: 'https://plus.unsplash.com/premium_photo-1670552850883-5cd071a7a77d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3JpbGFua2ElMjBmbGFnfGVufDB8fDB8fHww', 
    requirements: [
      'Passport first page scanned',
      'Cnic copy scanned',
      'Picture in dark shirt (white background)',
      'Processing time 7 - 8 working days'
    ],
    processingTime: '7 - 8 working days',
    fee: 13000,
    validity: '1 month'
  },
  {
    id: 'azerbaijan',
    title: 'Azerbaijan E-Visa (1 Month)',
    description: 'E-Visa services for Azerbaijan with vibrant culture.',
    image: 'https://images.unsplash.com/photo-1603555591682-edff5a42bf02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXplcmJhaWphbiUyMGZsYWd8ZW58MHx8MHx8fDA%3D', 
    requirements: [
      'Valid Passport (Minimum 6 months computer-scanned copy), first page signed duly by the passport holder',
      '1 scanned photograph with a white background',
      'CNIC copy front & back',
      'Processing time 4 - 5 working days'
    ],
    processingTime: '4 - 5 working days',
    fee: 14000,
    validity: '1 month'
  },
  {
    id: 'malaysia',
    title: 'Malaysia E-Visa (1 Month)',
    description: 'E-Visa services for Malaysia with diverse attractions.',
    image: 'https://plus.unsplash.com/premium_photo-1670855108637-d98722738a92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsYXlzaWElMjBmbGFnfGVufDB8fDB8fHww', 
    requirements: [
      'Valid Passport (Minimum 6 months computer-scanned copy)',
      '1 scanned photograph with a white background',
      'Bank statement for the last 6 months with a minimum balance of approx. PKR 100,000',
      'CNIC copy',
      'Processing time 7-10 working days'
    ],
    processingTime: '7-10 working days',
    fee: 15000,
    validity: '1 month'
  },
  {
  id: 'uae',
  title: 'UAE 5-Year Multiple Visa',
  description: 'E-Visa services for UAE with modern attractions.',
  image: 'https://plus.unsplash.com/premium_photo-1670552850982-28cd863230ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VUFFJTIwZmxhZ3xlbnwwfHwwfHx8MA%3D%3D0',
  requirements: [
    'Personal Appearance is required for Biometric after Visa Approval at UAE Embassy',
    'Valid Passport (Minimum 8 Months) (Computer Scanned Copy)',
    'Valid Smart CNIC (Computer Scanned Copy)',
    'Photo with White Background (Soft Copy)',
    'Applicant Cell No., Email ID, & Profession',
    'Applicant’s Previous U.A.E Visa Copy (If Any)',
    'Bank Statement For the Last 6 Months with Closing Balance of Approx. PKR 15 Lac (Bank Stamp/Sign on Each Page)',
    'Account Balance Confirmation Certificate (Mentioning Closing Balance In Both PKR & USD)',
    'Processing Time: 15 to 20 Working Days'
  ],
  processingTime: '15 to 20 working days',
  fee: 16000,
  validity: '5 years'
}
];

const VisaServices = () => {
  const [selectedVisa, setSelectedVisa] = useState<VisaType | null>(null);

  const handleApplyNow = (visa: VisaType) => {
    const countryName = visa.title.split(' ')[0];
    const message = encodeURIComponent(`Hi BinMushtaq Travels and Tours\nI want more about ${countryName} visa`);
    window.open(`https://wa.me/923224340536?text=${message}`, '_blank');
  };

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
                    {visa.fee} pkr
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

                  <button
                    onClick={() => handleApplyNow(selectedVisa)}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
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