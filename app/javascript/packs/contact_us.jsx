import React from 'react';
import ReactDOM from 'react-dom';
import ContactUsPage from '../components/ContactUsPage';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ContactUsPage />,
    document.getElementById('page-content'),
  );
});
