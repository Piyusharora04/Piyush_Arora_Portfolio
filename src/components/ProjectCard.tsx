import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 15, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-64 object-cover transition-transform duration-500"
      />
      
      <div className="project-content">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-white/80 text-sm mb-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-primary-500/70 text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a 
            href={project.demoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm px-3 py-1 bg-white text-primary-500 rounded-md hover:bg-primary-50 transition-colors"
          >
            Live Demo
          </a>
          <a 
            href={project.codeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm px-3 py-1 bg-transparent border border-white text-white rounded-md hover:bg-white/10 transition-colors"
          >
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;