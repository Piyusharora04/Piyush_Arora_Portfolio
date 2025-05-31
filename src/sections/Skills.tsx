import { motion } from 'framer-motion';
import { skills } from '../constants';
import SkillBar from '../components/SkillBar';
import { Code, Database, Brush, Server } from 'lucide-react';

const Skills = () => {
  return (
    <section className="section bg-primary-50" id="skills">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <Code className="text-primary-500" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Full-Stack Development</h3>
                <p className="text-dark-400">
                  Experienced in building scalable web applications using the MERN stack, RESTful APIs, and real-time features with WebSockets.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center mb-4">
                  <Server className="text-secondary-500" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Backend & APIs</h3>
                <p className="text-dark-400">
                  Skilled in developing secure, high-performance backend systems with Node.js, Express, FastAPI, and MongoDB, integrated with Docker for deployment.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center mb-4">
                  <Brush className="text-accent-500" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
                <p className="text-dark-400">
                  Built intelligent tools using Ml, NLP, and LLMs for summarization, querying, and chatbot functionality across PDFs and YouTube videos.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <Database className="text-primary-500" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Problem Solving & DSA</h3>
                <p className="text-dark-400">
                  Solved 600+ coding problems accross various platforms achieving a strong grasp of data structures, algorithms, and competitive coding techniques.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;