import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from '../components/LandingPage';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <LandingPage />,
    document.getElementById('page-content'),
  );
});
