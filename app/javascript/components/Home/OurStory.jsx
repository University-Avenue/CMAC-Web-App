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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
}
