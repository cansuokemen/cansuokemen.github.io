import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import CareerTimeline from './components/CareerTimeline/CareerTimeline';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <CareerTimeline />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
