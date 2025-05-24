import React from 'react'

const HeroSection = () => {
  return (
    

    <div className="hero" style={{ backgroundImage: 'url(your-image-url.jpg)', height: '60vh', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container">
        <h1>Your Journey Begins Here</h1>
        <p>Discover breathtaking destinations, curated travel packages, and unforgettable experiences — all tailored for you.</p>
        <button className="button">Get Started</button>
      </div>
    </div>
  );
};
export default HeroSection