import React from 'react';

function Resume() {
  return (
    <section
      id="resume"
      className="resume"
      style={{
        backgroundImage: 'url(/assets/geometric-shape-doodle-seamless-pattern.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        height: '100vh',
      }}
    >

      <div className='row3'>
        <div className='row-section-6'>
          <h1>My Resume</h1>          
        </div>
        <div className='two-rows'>
        <div className='row-section-7'>
          
          <h1>Education</h1>          
          <h4>&bull; Kwame Nkrumah University of Science and Technology (KNUST)(2022 - 2026)</h4>
          <p>Studied Bsc. Computer Engineering</p>

          <h4>&bull; Mawuli School (2019-2022)</h4>
          <p>Studied General Science (WASSCE)</p>

          <h4>&bull; Kpogede Community School (Completed 2019)</h4>
          <p>BECE</p>

          <div className='row-section-9'>
          
          <h1>Skills</h1>          
          <div className="skill">
        <span>&bull; Embedded Systems Design (Intermediater)</span>
        <div className="skill-bar">
          <div className="progress intermediate"></div>
        </div>
      </div>

      <div className="skill">
        <span>&bull; Web Development (Intermediate)</span>
        <div className="skill-bar">
          <div className="progress intermediate"></div>
        </div>
      </div>

      <div className="skill">
        <span>&bull; UI/UX & Graphic Design (Expert)</span>
        <div className="skill-bar">
          <div className="progress expert"></div>
        </div>
      </div>
      <div className="skill">
        <span>&bull; Photography & Videography (Intermediate)</span>
        <div className="skill-bar">
          <div className="progress intermediate"></div>
        </div>
      </div>
      <p><i><strong>TOOLS I USE:</strong> Adobe Photoshop, Adobe Lightroom, Figma, Arduino IDE, React.js, HTML, CSS.</i></p>
        </div>

        </div>
        </div>

       

        <div className='row-section-8'>
          
          <h1>Experience</h1>          
          <h4>&bull;Graphic Designer, Untamed Voices (March 2025-Present) </h4>
          <p>Collaborated with the creative team to maintain consistent visual identity and support promotional campaigns</p>

          <h4>&bull;Intern, IoT Network Hub(October 2025-December2025) </h4>
          <p>Collaborated with the creative team to build a home security project called EDen. Was the UI Designer and Embedded Systems Engineer</p>


          <h4>&bull;Graphic Designer, Techten Planet (March 2024-December 2024)</h4>
          <p>Created engaging graphics for tech-related content, social media, and marketing materials.</p>

          <h4>&bull;Computing and Career Technology Tutor, Living Faith Preparatory School, Sogakofe – V/R
          (September 2024 – December 2024)</h4>
          <p>Taught core computing concepts including basic programming, word processing, and internet safety to junior and senior
          students.</p>

          <h4>&bull;Project Manager – BookInn: A mobile app that simplifies booking all types of accommodation</h4>
          <p>Led the end-to-end development and coordination of the app, from concept design to deployment</p>    

              
        </div>
        

        </div>

      
    </section>
  );
}

export default Resume;
