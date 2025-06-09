import React from 'react'
import { motion } from 'framer-motion';

const WhatsappChat = () => {
    return (
        <div>
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
        </div>
    )
}

export default WhatsappChat