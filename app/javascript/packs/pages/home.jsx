import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../../components/Home/HomePage';
import Footer from '../../components/Footer/Footer';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HomePage />,
    document.getElementById('page-content'),
  );

  ReactDOM.render(
    <Footer />,
    document.getElementById('page-footer'),
  );
});
