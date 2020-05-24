import React from 'react';
import ReactDOM from 'react-dom';
import ContactUsPage from '../../components/ContactUs/ContactUsPage';
import Footer from '../../components/Footer/Footer';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ContactUsPage />,
    document.getElementById('contact-us-info'),
  );

  ReactDOM.render(
    <Footer />,
    document.getElementById('page-footer'),
  );
});
