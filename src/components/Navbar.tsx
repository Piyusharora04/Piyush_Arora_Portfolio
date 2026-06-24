import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks, profile } from '../constants';

interface NavbarProps {
  activeSection: string;
  scrollTo: (section: string) => void;
}

const Navbar = ({ activeSection, scrollTo }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (section: string) => {
    setIsOpen(false);
    scrollTo(section);
  };

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-slate-950/78 shadow-2xl shadow-slate-950/30 backdrop-blur-xl' : 'bg-slate-950/35 backdrop-blur-sm'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <nav className="section-shell flex h-16 items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => handleNav('home')}
          className="group flex min-w-0 items-center gap-3 text-left"
          aria-label="Go to home"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200 shadow-lg shadow-cyan-950/20 transition group-hover:scale-105 group-hover:bg-cyan-300/15">
            PA
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block truncate text-sm font-semibold text-white">{profile.name}</span>
            <span className="block truncate text-xs text-slate-400">{profile.role}</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <button
                type="button"
                onClick={() => handleNav(nav.id)}
                className={`rounded-full px-3 py-2 text-sm transition ${
                  activeSection === nav.id
                    ? 'bg-cyan-300/12 text-cyan-50 shadow-[inset_0_0_0_1px_rgba(103,232,249,0.24)]'
                    : 'text-slate-400 hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                {nav.title}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 sm:flex">
          <a className="btn-ghost px-3" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn-primary px-4" href={profile.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((nav) => (
              <button
                key={nav.id}
                type="button"
                onClick={() => handleNav(nav.id)}
                className={`rounded-lg px-3 py-3 text-left text-sm font-medium ${
                  activeSection === nav.id ? 'bg-cyan-300 text-slate-950' : 'text-slate-300 hover:bg-white/10'
                }`}
              >
                {nav.title}
              </button>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a className="btn-secondary" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn-primary" href={profile.resume} target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </motion.header>
  );
};

export default Navbar;
