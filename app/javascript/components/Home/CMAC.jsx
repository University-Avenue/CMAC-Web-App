import React from 'react';
import CMACLogo from '../../../assets/images/CMAC-logo-1-2x.png';

export default function CMACSection() {
  return (
    <section id="cmac" className="home-page-section">
      <div className="home-page-section-title-container">
        <h3>CMAC</h3>
      </div>
      <div className="home-page-section-content-container">
        <div className="home-page-section-content">
          <span className="top-left-gradient-corner" />
          <span className="bottom-right-gradient-corner" />
          <div className="home-page-section-image-container">
            <img src={CMACLogo} alt="" />
          </div>
          <p>
            Our centre is a proud member of
            {' '}
            <a href="http://www.cmac1.com/">Classical Martial Arts Canada(CMAC). </a>
            CMAC was created to assist affiliated
            professional and semi-professional Martial Arts Schools. As a governing body
            for grading black belts and ensuring the levels of knowledge and proficiency
            standards remain high, on-going training and development of associated instructors
            and their students is its top priority. CMAC works with other Martial Arts organizations
            both nationally and internationally to make available seminars, competitions
            and research trips to their members.
            <br />
            <br />
            The Martial Arts tradition evolved through China, Okinawa, Japan and the USA,
            but as Canadian Martial Artists, we must now complete our part for future Canadian growth.
          </p>
        </div>
      </div>
    </section>
  );
}
