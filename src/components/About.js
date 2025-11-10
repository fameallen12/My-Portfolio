import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="about1"
      style={{
        backgroundImage: 'url(/assets/geometric-shape-doodle-seamless-pattern.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        height: '100vh',
      }}
    >
      {/* <div className="intro-content">
      <div className="intro-image-container">
        <div className="intro-image">
          
        </div>
      </div> */}
      <div className='row'>
        <div className='row-section-1'>
          <img src="/assets/famous passport picture.jpg" alt="Ellipse and Phone" />
          <h1>ABA FAMOUS MAWULENU KWAKU</h1>          
          <p>Designer | Photographer | Computer Engineer</p>
          <p>
            EMAIL<br />
            <a href="mailto:fmkaba12@gmail.com" className="contact-link">
            {/* <img src="assets/542689.png" alt="email icon" className="icon-img" /> */}
            fmkaba12@gmail.com
            </a>
          </p>
          <p>
            PHONE NUMBER<br />
            <a href="https://wa.me/233597972785"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link">
            +233 59 797 2785
            </a>
          </p>
          <p>
            LOCATION<br />
            Kumasi, Ghana.
          </p>

        </div>
        <div className='row-section-2'>
          <h1>About Me</h1>
        <p>
        I am a creative technologist blending art and engineering. My work spans 
  <strong> Branding, UI/UX, Web Development, Photography, and IoT Solutions</strong>.
  I’m passionate about crafting experiences that are clean, modern, and driven by
  purpose. Every project is an opportunity to learn, innovate, and create impact.
        </p>
        <p>
          Start exploring and book your next stay today.
        </p>
        <h1>What I Do</h1>
          <div className='exp-btn-container'>
            <button className="exp-btn2">
              Graphic Design and Branding
            </button>
            <button className="exp-btn2">
              UI/UX Design and Website Development
            </button>
            <button className="exp-btn2">
            Photography and Videography
            </button>
            <button className="exp-btn2">
              Embeded Systems Design and Internet of Things (IoT)
            </button>
          </div>
        </div>
      </div>
        

      
    </section>
  );
}

export default About;
