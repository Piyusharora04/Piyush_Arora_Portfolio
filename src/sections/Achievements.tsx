import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';
import { achievements } from '../constants';

const Achievements = () => {
  return (
    <section className="section bg-[linear-gradient(180deg,#020617_0%,#0b1220_100%)]" id="achievements">
      <div className="section-shell">
        <motion.div
          className="mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-3">Proof</p>
          <h2 className="heading-lg">Signals that matter in engineering hiring.</h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.id}
              className={`spotlight-panel rounded-3xl p-5 ${index === 0 ? 'md:col-span-1 md:row-span-2' : ''}`}
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                {index === 0 ? <Trophy size={21} /> : <Award size={21} />}
              </div>
              <h3 className={`${index === 0 ? 'text-3xl' : 'text-xl'} mt-5 font-semibold text-white`}>
                {achievement.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{achievement.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
