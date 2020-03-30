import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(
    <Navbar />,
    document.getElementById('page-header'),
  );
});
