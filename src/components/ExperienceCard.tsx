import { motion } from 'framer-motion';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  return (
    <motion.div
      className="mb-10 md:mb-0 border-l-2 border-primary-300 pl-6 pb-8 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-[9px] top-1" />
      <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-xl font-bold text-dark-500">{experience.title}</h3>
        <p className="text-primary-500 font-medium">{experience.company}</p>
        <p className="text-dark-300 text-sm mb-4">{experience.period}</p>
        <p className="text-dark-400">{experience.description}</p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;