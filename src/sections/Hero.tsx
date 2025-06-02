import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import myPhoto from "../Images/portfolio-img.jpg";

const Hero = () => {
  return (
    <section className="section bg-gradient-to-br from-white to-primary-50 relative" id="home">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary-300 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-secondary-300 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block text-lg font-medium text-primary-600 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hello <motion.span 
                className="inline-block"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
              >👋</motion.span>, I'm
            </motion.span>
            
            <motion.h1 
              className="heading-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="block">Piyush Arora</span>
              {/* <span className="text-primary-500">Full Stack Developer</span> */}
              <span className="text-primary-500 lg:text-5xl md:text-3xl sm:text-md text-3xl">
                <Typewriter
                  words={['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast']}
                  loop={0} // 0 = infinite loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="subtitle mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I've built real-time collaborative platforms, AI-powered tools, and full-stack web apps from the ground up.
With hands-on experience in MERN, FastAPI, and Docker, I turn ideas into scalable software.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a href="#contact" className="btn-primary w-40">
                Get in Touch
              </a>
              <a href="" className="btn-outline w-40 ">
                Resume
              </a>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <a href="https://github.com/Piyusharora04" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-primary-500 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/piyush-arora-363a59265/" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-primary-500 transition-colors">
                <Linkedin size={24} />
              </a>
              
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-primary-500 transition-colors">
                <Twitter size={24} />
              </a> */}
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center overflow-hidden">
              <img 
                src = {myPhoto}
                alt="Portrait" 
                className="w-full h-full object-cover mix-blend-overlay opacity-85"
              />
            </div>
            <div className="absolute -bottom-4 -right-8 bg-white rounded-full px-6 py-2 shadow-lg">
              <span className="text-lg font-bold text-primary-500">Open to Work and Connections</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="text-dark-400 text-sm font-medium mb-2">Scroll Down</span>
        <ChevronDown size={20} className="text-primary-500" />
      </div>
    </section>
  );
};

export default Hero;