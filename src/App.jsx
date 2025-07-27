import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    < >
      <div className="h-auto overflow-y-auto"> {/* <--- THIS IS THE CULPRIT */}
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>

    </>
  )
}

export default App
