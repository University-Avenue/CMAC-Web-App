import React from 'react';
import ReactDOM from 'react-dom';
import NavbarComponent from '../../components/NavMenu';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<NavbarComponent />, document.getElementById('nav-menu'));
});
