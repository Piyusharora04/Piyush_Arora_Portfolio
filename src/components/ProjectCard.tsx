import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileSearch, Github, Play, Radio, Terminal } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const CodeCollabPreview = () => (
  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-3 font-mono text-xs">
    <div className="mb-3 flex items-center justify-between">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
      </div>
      <span className="flex items-center gap-1 text-[11px] text-emerald-300">
        <Radio size={11} /> live sync
      </span>
    </div>
    <div className="space-y-2 text-slate-300">
      <p>
        <span className="text-violet-300">const</span> room = <span className="text-cyan-200">sync</span>
        {'({'}
      </p>
      <p className="pl-4">
        users: <span className="text-emerald-300">8</span>,
      </p>
      <p className="pl-4">runtime: <span className="text-amber-200">'docker'</span>,</p>
      <p className="pl-4">languages: <span className="text-emerald-300">8</span>+</p>
      <p>{'});'}</p>
    </div>
  </div>
);

const DeepDocPreview = () => (
  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-3">
    <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 text-center text-[11px] text-slate-300">
      {['PDFs', 'Chunks', 'Vectors'].map((item, itemIndex) => (
        <Fragment key={item}>
          <div className="rounded-xl border border-white/10 bg-white/[0.05] px-2 py-3">
            {itemIndex === 0 ? <FileSearch className="mx-auto mb-2 text-cyan-200" size={18} /> : null}
            {itemIndex === 1 ? <Terminal className="mx-auto mb-2 text-violet-200" size={18} /> : null}
            {itemIndex === 2 ? <Play className="mx-auto mb-2 text-emerald-200" size={18} /> : null}
            {item}
          </div>
          {itemIndex < 2 ? (
            <span className="text-cyan-200">
              -&gt;
            </span>
          ) : null}
        </Fragment>
      ))}
    </div>
    <div className="mt-3 rounded-xl border border-cyan-300/15 bg-cyan-300/10 px-3 py-2 text-xs text-cyan-50">
      Query 500+ pages with semantic retrieval
    </div>
  </div>
);

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isCodeCollab = project.title.toLowerCase().includes('code');

  return (
    <motion.article
      className="spotlight-panel group flex h-full flex-col rounded-3xl p-5 transition duration-300 sm:p-6"
      initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.35, delay: index * 0.1, ease: 'easeOut' }}
      viewport={{ once: true, amount:0.2 }}
      whileHover={{ y: -5, scale: 1.01 }}
    >
      <div className="mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-300/14 via-white/[0.06] to-violet-400/14 p-3">
        <div>
          {isCodeCollab ? <CodeCollabPreview /> : <DeepDocPreview />}
        </div>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-cyan-200">{project.subtitle}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
        </div>
        <ArrowUpRight className="shrink-0 text-slate-500 transition group-hover:text-cyan-200" size={24} />
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">{project.description}</p>

      <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-300">
        {project.impact.map((item, itemIndex) => (
          <li
            key={item}
            className="flex gap-3"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span className="chip" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <a className="btn-secondary mt-6 w-fit" href={project.codeLink} target="_blank" rel="noreferrer">
        <Github size={17} /> View repository
      </a>
    </motion.article>
  );
};

export default ProjectCard;
