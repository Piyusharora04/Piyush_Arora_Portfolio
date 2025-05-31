import { motion } from 'framer-motion';
import { education } from '../constants';
import EducationCard from '../components/EducationCard';

const About = () => {
  return (
    <section className="section bg-white" id="about">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md mb-6">My Journey</h3>
            <div className="space-y-4 text-dark-400 leading-relaxed">
              <p>
                I'm a passionate full-stack developer and problem-solver with a strong focus on building scalable web applications and intelligent systems. My development journey took off in college, and since then, I've built everything from real-time collaboration tools to AI-powered chatbots and PDF query engines.
              </p>
              <p>
                I specialize in full-stack development using the MERN stack, FastAPI, and Docker. I bring together clean architecture, intuitive UI design, and robust backend logic to create end-to-end solutions that perform in real-world scenarios. Solving 500+ DSA problems has also sharpened my skills in data structures and algorithms.
              </p>
              <p>
                When I’m not coding, I enjoy leading tech initiatives at the ASTRAL club, participating in hackathons, and mentoring peers. I'm currently diving deeper into large language models, system design, and open-source work — always pushing the limits of what I can build.
              </p>
            </div>

            <div className="flex gap-8 mt-8 justify-between">
              <div>
                <div className="text-4xl font-bold text-primary-500">10+</div>
                <div className="text-dark-300">Self Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-500">600+</div>
                <div className="text-dark-300">DSA Problems Solved</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-500">4+</div>
                <div className="text-dark-300">Hackathons & Events</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <EducationCard key={item.id} education={item} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;