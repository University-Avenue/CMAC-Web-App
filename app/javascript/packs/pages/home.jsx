import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../../components/HomePage';

document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(
    <HomePage />,
    document.getElementById('page-content'),
  );
});
