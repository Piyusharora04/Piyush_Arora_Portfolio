import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../constants';

const Projects = () => {
  return (
    <section className="section bg-[linear-gradient(180deg,#020617_0%,#08111f_52%,#020617_100%)]" id="projects">
      <div className="animated-grid absolute inset-0 opacity-30" />
      <div className="section-shell">
        <motion.div
          className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Projects</p>
            <h2 className="heading-lg">Flagship builds aligned with backend, full-stack, and AI platform roles.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">
            Focused case studies that show real-time systems, execution infrastructure, retrieval pipelines, and
            product-minded engineering.
          </p>
        </motion.div>

        <div className="relative grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
