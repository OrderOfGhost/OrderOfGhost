import { motion } from 'framer-motion';
import { Button } from '../components/Button';

export const AdminCall = () => (
  <section className="py-20" data-scroll-section>
    <h2 className="text-3xl font-bold text-center mb-6">Huyết Lệnh</h2>
    <div className="flex justify-center">
      <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }}>
        <Button onClick={() => alert('Lệnh đã nhận!')}>Nhận lệnh</Button>
      </motion.div>
    </div>
  </section>
);
