import React from 'react';

function Port() {

  return (
    <section
      id="port"
      className="port"
      style={{
        backgroundImage: 'url(/assets/geometric-shape-doodle-seamless-pattern.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        height: '100vh',
      }}
    >

      <div className='row2'>
        <div className='row-section-3'>
          <h1>Explore My Portfolio</h1>          
          <p>Click on folder to explore some amazing works of mine.</p>
        </div>

        <div className="port-images">
  <div className="port-image-container">
    <a href="https://blueoctagon.pixieset.com/mygraphicdesigns/" className="port-image">
      <img src="assets/my des.jpg" alt="GRAPHIC DESIGN" />
    </a>
    <div className="port-text">GRAPHIC DESIGN & BRANDING</div>
  </div>

  <div className="port-image-container">
    <a href="https://www.figma.com/design/mNlbUlSQCQsOMPHS8WJWc2/EDen-UI?node-id=2-6&t=ODjhXLjcZ378hrkn-1/" className="port-image">
      <img src="assets/Screenshot 2025-11-10 183628.png" alt="Project 2" />
    </a>
    <div className="port-text">UI/UX DESIGN </div>

  </div>

  <div className="port-image-container">
    <a href="https://blueoctagon.pixieset.com/myphotography/" className="port-image">
      <img src="assets/_K8A3208.jpg" alt="Project 3" />
    </a>
    <div className="port-text">PHOTOGRAPHY</div>
  </div>
  {/* <div className="port-image-container">
    <a href="https://portfolio.adobe.com/" className="port-image">
      <img src="assets/about us.jpg" alt="Project 3" />
    </a>
    <div className="port-text">Project 3</div>
  </div> */}


      </div>

      <div className="logo-carousel">
  <div className="head">
    <h1>Clients I Have Worked With</h1>
  </div>

  <div className="logo-track">
    {/* ✅ Track 1 */}
    <div className="track">
      <img src="assets/logo gold.png" alt="Client 1" />
      <img src="assets/corus logo_black.png" alt="Client 2" />
      <img src="assets/98180721.png" alt="Client 3" />
      <img src="assets/iot_network_hub_logo.png" alt="Client 4" />
      <img src="assets/eden png no back.png" alt="Client 5" />
      <img src="assets/YP LOGO - FULL.png" alt="Client 5" />
    </div>

    {/* ✅ Track 2 — cloned for smooth loop */}
    {/* <div className="track">
      <img src="assets/logo gold.png" alt="Client 1" />
      <img src="assets/corus logo_black.png" alt="Client 2" />
      <img src="assets/98180721.jpeg" alt="Client 3" />
      <img src="assets/blue octagon2.png" alt="Client 4" />
      <img src="assets/eden png no back.png" alt="Client 5" />
    </div> */}
    
  </div>
</div>

      
        </div>      
    </section>
  );
}

export default Port;
