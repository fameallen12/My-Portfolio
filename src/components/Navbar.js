import React, { useEffect, useState } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="logo">
        <h1>ABA FAMOUS MAWULENU KWAKU</h1>
      </div>
      <nav>
        <a href="#about">About Me</a>
        <a href="#resume">Resume</a>
        <a href="#port">Explore Portfolio</a>
        <a href="#contact">Contact Me</a>
        <a href="assets/my-cv.pdf" download="Aba_Mawulenu_CV.pdf"className="download-btn">Download CV</a>
      </nav>
    </header>
  );
}

export default Navbar;
