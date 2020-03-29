import React from 'react';
import CMACLogo2 from '../../../assets/images/CMAC-logo-2.png';

const OurStorySection = () => (
  <section id="our-story" className="home-page-section">
    <div className="row text-center justify-content-center" style={{ height: '100%' }}>
      <div className="col-8 align-self-center">
        <h4>Our Story</h4>
      </div>
      <div className="col-8 align-self-start text-center">
        <div className="home-section-content-container">
          <span className="top-left-gradient-corner" />
          <span className="bottom-right-gradient-corner" />
          <img src={CMACLogo2} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default OurStorySection;
