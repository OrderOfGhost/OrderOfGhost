import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface GlowingTooltipProps {
  text: string;
  children: ReactNode;
}

/**
 * GlowingTooltip displays text above its children when hovered.
 */
export const GlowingTooltip = ({ text, children }: GlowingTooltipProps) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <AnimatePresence>
        {show && (
          <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-sm rounded bg-indigo-600 text-white shadow-lg shadow-indigo-500/50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};
