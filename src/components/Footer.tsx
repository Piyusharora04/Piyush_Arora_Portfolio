import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8">
      <div className="section-shell flex flex-col gap-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">{profile.name}</p>
          <p className="mt-1">Software Engineer / Backend / Full Stack </p>
        </div>

        <div className="flex items-center gap-4">
          <a className="transition hover:text-cyan-200" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a className="transition hover:text-cyan-200" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a className="transition hover:text-cyan-200" href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        <p>Copyright {currentYear} Piyush Arora.</p>
      </div>
    </footer>
  );
};

export default Footer;
