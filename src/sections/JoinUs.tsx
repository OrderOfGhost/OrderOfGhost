import { motion } from 'framer-motion';
import { Button } from '../components/Button';

export const JoinUs = () => (
  <section className="py-20" data-scroll-section>
    <h2 className="text-3xl font-bold text-center mb-6">Gia Nhập Hội</h2>
    <div className="flex justify-center">
      <motion.div whileHover={{ rotate: 2 }}>
        <Button onClick={() => alert('Chào mừng bạn!')}>Tham gia ngay</Button>
      </motion.div>
    </div>
  </section>
);
