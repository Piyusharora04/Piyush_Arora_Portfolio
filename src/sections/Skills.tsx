import { motion } from 'framer-motion';
import { Braces, Brain, Cloud, Code, Database, Server } from 'lucide-react';
import { skillGroups } from '../constants';

const icons = [Braces, Code, Server, Brain, Database, Cloud];

const Skills = () => {
  return (
    <section className="section bg-slate-950" id="skills">
      <div className="absolute inset-x-0 top-1/3 h-40 bg-gradient-to-r from-transparent via-cyan-300/5 to-transparent" />
      <div className="section-shell">
        <motion.div
          className="mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-3">Technical Expertise</p>
          <h2 className="heading-lg">A stack shaped around shipping reliable software.</h2>
          <p className="body-copy mt-4">
            No arbitrary percentages, just the tools and systems I use to build full-stack products, backend
            services, AI workflows, and platform automation.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[index] ?? Code;
            return (
              <motion.article
                key={group.title}
                className="spotlight-panel group rounded-3xl p-5"
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition group-hover:scale-105 group-hover:bg-cyan-300/15">
                  <Icon size={21} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{group.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      className="chip"
                      key={skill}
                      initial={{ opacity: 0, scale: 0.94 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, delay: index * 0.04 + skillIndex * 0.025 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
