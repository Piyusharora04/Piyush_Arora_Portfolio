import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Education } from '../types';

interface EducationCardProps {
  education: Education;
  index: number;
}

const EducationCard = ({ education, index }: EducationCardProps) => {
  return (
    <motion.article
      className="rounded-xl border border-white/10 bg-white/[0.045] p-4"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200">
          <GraduationCap size={18} />
        </div>
        <div>
          <h3 className="font-semibold text-white">{education.degree}</h3>
          <p className="mt-1 text-sm text-slate-400">{education.institution}</p>
          <p className="mt-2 text-sm text-slate-300">
            {education.detail} <span className="text-slate-500">/ {education.period}</span>
          </p>
        </div>
      </div>
    </motion.article>
  );
};

export default EducationCard;
