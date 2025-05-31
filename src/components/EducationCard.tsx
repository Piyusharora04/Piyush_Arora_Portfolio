import { motion } from 'framer-motion';
import { Education } from '../types';

interface EducationCardProps {
  education: Education;
  index: number;
}

const EducationCard = ({ education, index }: EducationCardProps) => {
  return (
    <motion.div
      className="mb-10 md:mb-0 border-l-2 border-secondary-300 pl-6 pb-8 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="absolute w-4 h-4 bg-secondary-500 rounded-full -left-[9px] top-1" />
      <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-xl font-bold text-dark-500">{education.degree}</h3>
        <p className="text-secondary-500 font-medium">{education.institution}</p>
        <p className="text-dark-300 text-sm mb-4">{education.period}</p>
        <p className="text-dark-400">{education.description}</p>
      </div>
    </motion.div>
  );
};

export default EducationCard;