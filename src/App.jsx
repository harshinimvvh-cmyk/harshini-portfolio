import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import Chatbot from './components/Chatbot';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : 'light'}`}>
      
      {/* Top Scroll Indicator Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-600 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation Bar */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        openResumeModal={() => setResumeModalOpen(true)} 
      />

      {/* Hero Header Section */}
      <Hero openResumeModal={() => setResumeModalOpen(true)} />

      {/* About Me */}
      <About />

      {/* Technical Skills */}
      <Skills />

      {/* Internship Experience */}
      <Experience />

      {/* Projects Grid & Live ML Sandbox */}
      <Projects />

      {/* Education & Academic Marks */}
      <Education />

      {/* Certifications & Workshops */}
      <Certifications />

      {/* Achievements & Leadership */}
      <Leadership />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Resume Viewer / Download Modal */}
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />
      <Chatbot />

    </div>
  );
}
