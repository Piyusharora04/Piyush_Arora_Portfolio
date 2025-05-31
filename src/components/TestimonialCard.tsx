import { motion } from 'framer-motion';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 mx-4"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-bold text-dark-500">{testimonial.name}</h3>
          <p className="text-sm text-dark-300">{testimonial.position}, {testimonial.company}</p>
        </div>
      </div>
      <p className="text-dark-400 italic">"{testimonial.text}"</p>
    </motion.div>
  );
};

export default TestimonialCard;