import { motion } from 'framer-motion';

export const Hero = () => (
  <section className="min-h-screen flex flex-col items-center justify-center" data-scroll-section>
    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl font-bold mb-2">
      Order of Ghost
    </motion.h1>
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
      Nơi hội tụ của những bảo vật thần bí
    </motion.p>
  </section>
);
