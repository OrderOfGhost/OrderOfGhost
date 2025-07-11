import { motion } from 'framer-motion';
import { featureRelics } from '../data/features';
import { Card } from '../components/Card';
import { GlowingTooltip } from '../components/GlowingTooltip';

export const Features = () => (
  <section className="py-20" data-scroll-section>
    <h2 className="text-3xl font-bold text-center mb-8">Ngũ Bảo</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featureRelics.map(relic => (
        <motion.div key={relic.id} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}>
          <GlowingTooltip text={relic.description}>
            <Card title={`${relic.icon} ${relic.name}`} />
          </GlowingTooltip>
        </motion.div>
      ))}
    </div>
  </section>
);
