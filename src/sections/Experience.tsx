import { motion } from 'framer-motion';
import { experiences, testimonials } from '../constants';
import ExperienceCard from '../components/ExperienceCard';
import TestimonialCard from '../components/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [slidesVisible, setSlidesVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesVisible(1);
      } else if (window.innerWidth < 1024) {
        setSlidesVisible(2);
      } else {
        setSlidesVisible(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const next = () => {
    if (activeIndex < testimonials.length - slidesVisible) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const prev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  useEffect(() => {
    if (testimonialsRef.current) {
      testimonialsRef.current.style.transform = `translateX(-${activeIndex * 100 / slidesVisible}%)`;
    }
  }, [activeIndex, slidesVisible]);

  return (
    <section className="section bg-gray-100" id="experience">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <ExperienceCard key={experience.id} experience={experience} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md mb-8 text-center">What People Say</h3>
            
            <div className="relative overflow-hidden">
              <div 
                ref={testimonialsRef}
                className="flex transition-transform duration-500 ease-out"
                style={{ width: `${testimonials.length * (100 / slidesVisible)}%` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id} 
                    className="px-2"
                    style={{ width: `${100 / testimonials.length}%` }}
                  >
                    <TestimonialCard testimonial={testimonial} index={index} />
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-8 gap-4">
                <button 
                  onClick={prev} 
                  disabled={activeIndex === 0}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activeIndex === 0 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-primary-100 text-primary-500 hover:bg-primary-200'
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={next} 
                  disabled={activeIndex >= testimonials.length - slidesVisible}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activeIndex >= testimonials.length - slidesVisible
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-primary-100 text-primary-500 hover:bg-primary-200'
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;