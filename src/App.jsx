import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Process from './components/Process';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black antialiased">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Selected Work (4 Projects) */}
        <Projects />

        {/* Experience & Skills */}
        <Experience />

        {/* Education & Certificates */}
        <Education />

        {/* Design Process */}
        <Process />

        {/* Philosophy Quote */}
        <Quote />

        {/* Contact Information & Channels */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
