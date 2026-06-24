import { motion } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';
import { experiences } from '../constants';

const Experience = () => {
  return (
    <section className="section bg-slate-950" id="experience">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="section-shell">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-3">Experience</p>
          <h2 className="heading-lg">Production work across AI agents, Evaluation frameworks, and healthcare systems.</h2>
          <p className="body-copy mt-4">
            Practical engineering experience spanning internal tools, evaluation SDKs, automation, monitoring,
            client workflows, and full-stack product modules.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-300/60 via-white/10 to-transparent lg:block" />
        <div className="grid gap-5 lg:gap-6 lg:pl-12">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
