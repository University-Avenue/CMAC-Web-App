import React from 'react';
import ReactDOM from 'react-dom';
import ContactUsPage from '../../components/ContactUs/ContactUsPage';

document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(
    <ContactUsPage />,
    document.getElementById('page-content'),
  );
});
