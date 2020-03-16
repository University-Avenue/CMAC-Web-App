import React from 'react';
import ReactDOM from 'react-dom';
import NavMenuComponent from '../../components/NavMenu';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <NavMenuComponent />,
    document.getElementById('nav-menu'),
  );
});
