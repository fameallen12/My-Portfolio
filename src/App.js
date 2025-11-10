import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Port from './components/Port';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Contact from './components/ContactMe';

function App() {

  window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    let scrollPosition = window.scrollY;
    
    // fade hero out smoothly based on scroll
    hero.style.opacity = 1 - scrollPosition / 500;
  });
  
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Port />
      <Contact />
      <Footer />
    </>
    
  );
}

export default App;
