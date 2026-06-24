import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { navLinks } from './constants';
import About from './sections/About';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Hero from './sections/Hero';
import Leadership from './sections/Leadership';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(section);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-25% 0px -55% 0px',
        threshold: 0,
      },
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <Navbar activeSection={activeSection} scrollTo={scrollTo} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Leadership />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
