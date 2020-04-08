import React from 'react';
import CMACLogo1 from '../../../assets/images/CMAC-logo-1.png';

const CMACSection = () => (
  <section id="cmac" className="home-page-section">
    <div className="row text-center justify-content-center">
      <div className="col-8 align-self-center">
        <h4>CMAC</h4>
      </div>
      <div className="col-8 align-self-start">
        <div className="home-section-content-container">
          <span className="top-left-gradient-corner" />
          <span className="bottom-right-gradient-corner" />
          <img src={CMACLogo1} alt="" />
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
    </div>
  </section>
);

export default CMACSection;
