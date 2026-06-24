import { motion } from 'framer-motion';
import { Megaphone, Users } from 'lucide-react';
import { leadership } from '../constants';

const Leadership = () => {
  return (
    <section className="section bg-slate-950" id="leadership">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-3">Leadership</p>
            <h2 className="heading-lg">Technical initiative beyond individual contribution.</h2>
            <p className="body-copy mt-4">
              Community work that demonstrates ownership, communication, and the ability to organize people around
              technical learning.
            </p>
          </motion.div>

          <motion.article
            className="spotlight-panel rounded-3xl p-5 sm:p-6"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.45, delay: 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                <Users size={22} />
              </div>
              <div>
                <p className="text-sm font-medium text-cyan-200">{leadership.role}</p>
                <h3 className="mt-1 text-2xl font-semibold text-white">{leadership.organization}</h3>
              </div>
            </div>

            <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-300 sm:text-base">
              {leadership.highlights.map((highlight, index) => (
                <motion.li
                  key={highlight}
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.06 }}
                  viewport={{ once: true }}
                >
                  <Megaphone className="mt-1 shrink-0 text-cyan-200" size={17} />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
