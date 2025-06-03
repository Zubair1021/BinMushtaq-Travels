import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Plane, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      await emailjs.sendForm(
        'service_plm0sa9', // EmailJS service ID
        'template_oqdhilj', // EmailJS template ID
        form.current,
        {
          publicKey: 'Ay99eNc8a2x626yrH', // EmailJS public key
        }
      );
      setSubmitSuccess(true);
      form.current.reset();
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error: any) {
      setSubmitError('Failed to send message. Please try again.');
      setTimeout(() => setSubmitError(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Click to WhatsApp Button */}

      <motion.a
        href="https://wa.me/923224340536?text=Hi%20Bin%20Mushtaq%20Travel%20%26%20Trours%20%0AI%20want%20some%20details%20related%20your%20Packages%20"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-2"
        aria-label="Click to WhatsApp"
        role="link"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: 1,
        }}
        transition={{
          scale: { duration: 5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
          opacity: { duration: 0.6, delay: 0.6 },
        }}
        whileHover={{ scale: 1.15 }}
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.002 2.003C6.478 2.003 2 6.482 2 12.004a9.963 9.963 0 001.487 5.29l-1.54 5.623 5.78-1.517A10 10 0 1012.002 2.003zm.037 17.902a8.01 8.01 0 01-4.068-1.123l-.292-.172-3.43.9.918-3.342-.19-.307a7.95 7.95 0 01-1.253-4.205c0-4.414 3.588-8.002 8.002-8.002 4.414 0 8.002 3.588 8.002 8.002a7.983 7.983 0 01-7.69 7.91zm4.432-5.83c-.243-.122-1.442-.711-1.664-.792-.222-.082-.383-.122-.544.122-.16.243-.623.791-.764.954-.14.161-.283.182-.525.06a6.536 6.536 0 01-1.92-1.18 7.204 7.204 0 01-1.336-1.646c-.14-.243-.015-.375.106-.497.11-.11.243-.283.365-.424.12-.14.16-.243.243-.405.08-.162.04-.304-.02-.425-.06-.122-.544-1.312-.745-1.794-.2-.482-.402-.416-.544-.416H8.42c-.141 0-.365.06-.556.283-.19.223-.73.713-.73 1.737s.748 2.016.853 2.154c.104.14 1.472 2.254 3.563 3.16 2.09.905 2.09.603 2.466.565.376-.04 1.207-.494 1.375-.97.17-.475.17-.88.122-.97-.049-.09-.202-.141-.445-.263z" />
        </svg>
        <span>Click to WhatsApp</span>
      </motion.a>


      <div className="container mx-auto px-4 py-12 relative">
        {/* Animated Planes */}
        <motion.div
          className="absolute top-40 right-10 text-primary-200 dark:text-primary-800 opacity-20 pointer-events-none"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          aria-hidden="true"
        >
          <Plane size={120} />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-10 text-primary-200 dark:text-primary-800 opacity-20 pointer-events-none"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          aria-hidden="true"
        >
          <Plane size={80} />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We're here to help plan your perfect journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <Phone className="w-5 h-5" />,
                    title: 'Phone',
                    info: '+92 322 4340536',
                    subInfo: 'Mon-Sat 9am-8pm',
                  },
                  {
                    icon: <Mail className="w-5 h-5" />,
                    title: 'Email',
                    info: 'Binmushtaqtravel@gmail.com',
                    subInfo: '24/7 Online Support',
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    title: 'Office',
                    info: 'Office G4 heaven mall near Askari 9',
                    subInfo: 'Zarar shaheed Road, Lahore',
                  },
                  {
                    icon: <Clock className="w-5 h-5" />,
                    title: 'Working Hours',
                    info: 'Monday - Saturday',
                    subInfo: '9:00 AM - 8:00 PM',
                  },
                  {
                    icon: <MessageCircle className="w-5 h-5" />,
                    title: 'WhatsApp',
                    info: '+92 322 4340536',
                    subInfo: 'Chat with us anytime',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start group"
                    role="region"
                    aria-label={item.title}
                  >
                    <motion.div
                      className="text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      {item.title === 'WhatsApp' ? (
                        <a
                          href="https://wa.me/923224340536?text=Hi%20Bin%20Mushtaq%20Travel%20%26%20Trours%20%0AI%20want%20some%20details%20related%20your%20Packages%20"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300">{item.info}</p>
                      )}
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.subInfo}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-6 text-gray-600 dark:text-gray-300 text-center"
              >
                You can also{' '}
                <a
                  href="https://wa.me/923224340536?text=Hi%20Bin%20Mushtaq%20Travel%20%26%20Trours%20%0AI%20want%20some%20details%20related%20your%20Packages%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  contact us on WhatsApp
                </a>
                !
              </motion.p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Send us a Message
              </h2>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white transition-all duration-300"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white transition-all duration-300"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white transition-all duration-300"
                    required
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  aria-label="Send message"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center text-green-600 dark:text-green-400"
                    role="alert"
                  >
                    Message sent successfully!
                  </motion.div>
                )}

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center text-red-600 dark:text-red-400"
                    role="alert"
                  >
                    {submitError}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;