import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(
    <HeaderComponent />,
    document.getElementById('page-header'),
  );
});
