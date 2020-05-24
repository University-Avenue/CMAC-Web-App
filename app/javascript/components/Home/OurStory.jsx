import React from 'react';
import CMACLogo2 from '../../../assets/images/CMAC-logo-2.png';

export default function OurStorySection() {
  return (
    <section id="our-story" className="home-page-section">
      <div className="home-page-section-title-container">
        <h3>Our Story</h3>
      </div>
      <div className="home-page-section-content-container">
        <div className="home-page-section-content">
          <span className="top-left-gradient-corner" />
          <span className="bottom-right-gradient-corner" />
          <div className="home-page-section-image-container">
            <img src={CMACLogo2} alt="" />
          </div>
          <p>
            We offer a traditional style in a modern way. Students learn self-defense through a
            seriesof drills and forms that strengthen both the body and mind, promoting confidence
            and goodhealth.  The benefits to training in a classical art are truly unlimited -
            which students and parents often notice even after a short while of practice.
          </p>
        </div>
      </div>
    </section>
  );
}
