import { useState, useEffect } from 'react';
import { navLinks } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
  scrollTo: (section: string) => void;
}

const Navbar = ({ activeSection, scrollTo }: NavbarProps) => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full top-0 z-50 py-5 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      } transition-all duration-300`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
            Portfolio
          </span>
        </motion.div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                activeSection === nav.id
                  ? 'text-primary-500 font-medium'
                  : 'text-dark-500 hover:text-primary-400'
              } cursor-pointer text-[16px]`}
              onClick={() => scrollTo(nav.id)}
            >
              <div className="relative group">
                {nav.title}
                <div className={`absolute -bottom-1 left-0 w-full h-0.5 ${
                  activeSection === nav.id ? 'bg-primary-500 w-full' : 'bg-primary-500 w-0 group-hover:w-full'
                } transition-all duration-300`}></div>
              </div>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-50 hover:bg-primary-100 transition-colors"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-white/95 backdrop-blur-md absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-lg shadow-lg`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    activeSection === nav.id
                      ? 'text-primary-500'
                      : 'text-dark-500'
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    scrollTo(nav.id);
                  }}
                >
                  {nav.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;