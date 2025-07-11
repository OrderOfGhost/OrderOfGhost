import { motion } from 'framer-motion';

/**
 * LoadingScreen shows a full-screen magical rune spinner on page load.
 */
export const LoadingScreen = () => (
  <motion.div
    className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.svg
      viewBox="0 0 100 100"
      className="w-32 h-32 text-indigo-400"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
    >
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" />
      <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="4" fill="none" />
    </motion.svg>
  </motion.div>
);
