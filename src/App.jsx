import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Add this import
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000, // Default animation duration
  once: true,     // Whether animation should happen only once - true is good for portfolio sections
});

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <ScrollToTop /> {/* Add this component */}
    </>
  );  
}

export default App;
