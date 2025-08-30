import React from 'react';
import { Users, Award, Globe, Heart, Plane } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO';

const About = () => {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <SEO 
        title="About Us - Bin Mushtaq Travel & Tours | Leading Pakistan Travel Agency"
        description="Learn about Bin Mushtaq Travel & Tours - Pakistan's premier travel agency. Discover our mission, values, and commitment to providing exceptional travel experiences since our establishment."
        keywords="about Bin Mushtaq travels, Pakistan travel agency history, travel company Pakistan, travel agency Karachi, about us travel services"
        url="https://binmushtaqtravel.com/about"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Animated Planes */}
        <motion.div
          className="absolute top-0 right-0 text-primary-200 dark:text-primary-800 opacity-20 pointer-events-none"
          animate={{
            x: [0, 120, 0],
            y: [0, -60, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Plane size={140} aria-hidden="true" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-24 left-0 text-primary-200 dark:text-primary-800 opacity-20 pointer-events-none"
          animate={{
            x: [0, -120, 0],
            y: [0, 60, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >

        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center mb-20 relative"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 relative">
            About Bin Mushtaq Travel
            <motion.div
              className="absolute -right-6 top-0 text-primary-500"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
            </motion.div>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Your trusted partner in creating meaningful travel experiences and spiritual journeys since 2010
          </motion.p>
        </motion.div>

        {/* Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {[
            {
              icon: <Users className="w-10 h-10" />,
              title: 'Expert Guidance',
              description: 'Our experienced team ensures every journey is well-planned and meaningful.',
            },
            {
              icon: <Award className="w-10 h-10" />,
              title: 'Quality Service',
              description: 'Premium accommodations and services tailored to your needs.',
            },
            {
              icon: <Globe className="w-10 h-10" />,
              title: 'Global Reach',
              description: 'Connecting travelers to destinations worldwide with local expertise.',
            },
            {
              icon: <Heart className="w-10 h-10" />,
              title: 'Personal Touch',
              description: 'Customized experiences that cater to your spiritual and travel goals.',
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.25, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
              className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              role="region"
              aria-label={value.title}
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4">{value.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-700 dark:to-primary-800 rounded-2xl p-8 sm:p-10 mb-20 shadow-lg relative overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%22%23ffffff%22 stroke-width=%221%22 opacity=%220.1%22/%3E%3C/svg%3E')] bg-repeat opacity-10"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-white/90 mb-4 text-base sm:text-lg leading-relaxed">
              Founded in 2010, Bin Mushtaq Travel began with a vision to provide meaningful travel experiences that combine spiritual enrichment with world exploration. Our journey started with organizing Umrah trips, and has since expanded to include a wide range of travel services.
            </p>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              Today, we're proud to have helped thousands of travelers achieve their dreams, whether it's performing Umrah, exploring historical sites, or embarking on adventure tours. Our commitment to excellence and personal service remains at the heart of everything we do.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { number: '15+', text: 'Years Experience' },
            { number: '50k+', text: 'Happy Travelers' },
            { number: '100+', text: 'Destinations' },
            { number: '24/7', text: 'Support' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
              className="bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 p-8 rounded-xl text-center text-white shadow-lg relative overflow-hidden group"
              role="region"
              aria-label={stat.text}
            >
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-4xl sm:text-5xl font-bold mb-3"
              >
                {stat.number}
              </motion.div>
              <div className="text-primary-100 font-medium text-base sm:text-lg">
                {stat.text}
              </div>
              <div className="absolute -right--2 -bottom-0 text-primary-400/20 transform rotate-12 scale-150 group-hover:rotate-45 transition-transform duration-500">
                <Plane size={72} aria-hidden="true" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;