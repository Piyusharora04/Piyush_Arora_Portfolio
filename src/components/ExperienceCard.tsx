import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  return (
    <motion.article
      className="spotlight-panel group rounded-3xl p-5 sm:p-6"
      initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ y: -6 }}
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-lg shadow-cyan-950/20 transition group-hover:scale-105 group-hover:bg-cyan-300/15">
            <Briefcase size={20} />
          </div>
          <div className="min-w-0">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">{experience.role}</h3>
            <p className="mt-1 text-sm font-medium text-cyan-200">
              {experience.company}
              {experience.team ? <span className="text-slate-500"> / {experience.team}</span> : null}
            </p>
          </div>
        </div>
        <span className="w-fit rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-slate-300 shadow-inner">
          {experience.period}
        </span>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">{experience.summary}</p>

      <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-300">
        {experience.highlights.map((highlight, highlightIndex) => (
          <motion.li
            key={highlight}
            className="flex gap-3"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.35, delay: index * 0.08 + highlightIndex * 0.04 }}
            viewport={{ once: true }}
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.7)]" />
            <span>{highlight}</span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {experience.tech.map((item) => (
          <span className="chip" key={item}>
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
