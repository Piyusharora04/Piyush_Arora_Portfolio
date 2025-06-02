import { motion } from 'framer-motion';
import { projects } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section className="section bg-dark-600 text-white" id="projects">
      <div className="container mx-auto px-1">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-300">
            Here are some of my recent projects showcasing my skills and expertise in web development.
          </p>
        </motion.div>

        <div className="m-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-6">
            Interested in seeing more of my work?
          </p>
          <a 
            href="https://github.com/Piyusharora04" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;