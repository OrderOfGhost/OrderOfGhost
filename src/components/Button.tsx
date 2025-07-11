import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-4 py-2 bg-indigo-600 rounded text-white"
    onClick={onClick}
  >
    {children}
  </motion.button>
);
