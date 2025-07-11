import { motion } from 'framer-motion';

export const CultivationRoom = () => (
  <section className="py-20" data-scroll-section>
    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl font-bold text-center mb-8">
      Tu Đạo
    </motion.h2>
    <p className="text-center">Nâng cao sức mạnh bản thân qua từng nhiệm vụ.</p>
  </section>
);
