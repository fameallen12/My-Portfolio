import React from 'react';

function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      style={{
        backgroundImage: "url('../assets/Rectangle 3.png')", // Use camelCase and quotes for the URL
      }}
    >
      <img
        src="assets/geometric-shape-doodle-seamless-pattern.png"
        alt="background shape"
        className="background-shape"
      />
      <div className="hero-content">
        <p>
          Welcome to My <span className="highlight">Portfolio</span>
        </p>
        <p>
          Here you’ll find a selection of my work. Explore my projects to learn more about what I do.
        </p>
        <button className="exp-btn" onClick={() => document.getElementById("port").scrollIntoView({ behavior: "smooth" })}>
          Explore
          <img
            src={`${process.env.PUBLIC_URL}/assets/arrow.png`}
            alt="arrow"
            style={{ marginLeft: '8px', width: '25px', height: '25px' }}
          />
        </button>
      </div>

      <div className="hero-images">
        <img
          src="assets/about us.jpg"
          className="images"
          alt="futurestruct"
          height={280}
          width={280}
        />
        <img
          src="assets/bellHugs.jpg"
          className="images"
          alt="futurestruct"
          height={280}
          width={280}
        />
        <img
          src="assets/david and golaith.jpg"
          className="images"
          alt="futurestruct"
          height={280}
          width={280}
        />
        <img
          src="assets/engineer.jpg"
          className="images"
          alt="futurestruct"
          height={280}
          width={280}
        />
        <img
          src="assets/jersey vogue.jpg"
          className="images"
          alt="futurestruct"
          height={280}
          width={280}
        />
        <img
          src="assets/boutique.jpg"
          className="images"
          alt="futurestruct"
          height={280}
          width={280}
        />
        <img
          src="assets/about us.jpg"
          className="images"
          alt="futurestruct"
          height={280}
          width={280}
        />
        <img
          src="assets/bellHugs.jpg"
          className="images"
          alt="futurestruct"
          height={280}
          width={280}
        />
        <img
          src="assets/david and golaith.jpg"
          className="images"
          alt="futurestruct"
          height={280}
          width={280}
        />
        <img
          src="assets/engineer.jpg"
          className="images"
          alt="futurestruct"
          height={280}
          width={280}
        />
        <img
          src="assets/jersey vogue.jpg"
          className="images"
          alt="futurestruct"
          height={280}
          width={280}
        />
        <img
          src="assets/boutique.jpg"
          className="images"
          alt="futurestruct"
          height={280}
          width={280}
          />
      </div>
    </section>
  );
}

export default Hero;