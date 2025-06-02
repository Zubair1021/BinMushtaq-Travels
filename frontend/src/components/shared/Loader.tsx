import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
      <div className="relative">
        <motion.div
          className="w-32 h-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Plane */}
          <motion.div
            className="absolute"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-32 h-32 rounded-full border-4 border-primary-600 dark:border-primary-400 border-dashed" />
          </motion.div>
          
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              rotate: [0, 45, 0],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="text-4xl">✈️</div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xl font-medium text-primary-600 dark:text-primary-400">
            Preparing Your Journey...
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;