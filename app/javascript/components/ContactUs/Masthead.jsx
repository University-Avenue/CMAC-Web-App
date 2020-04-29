import React from 'react';
import headerImage from '../../../assets/images/contact_us_header.jpg';

const Masthead = () => (
  <header className="contact-masthead">
    <div className="container">
      <img src={headerImage} alt="header" className="header-img" />
      <div className="row align-items-center text-center">
        <div className="col-md-12">
          <h1>Contact Us</h1>
        </div>
      </div>
    </div>
  </header>
);

export default Masthead;
