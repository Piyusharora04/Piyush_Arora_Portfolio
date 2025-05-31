import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
// import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { navLinks } from './constants';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, 
    });

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} scrollTo={scrollTo} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
