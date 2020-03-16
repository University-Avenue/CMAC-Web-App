import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from '../../components/Header';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HeaderComponent />,
    document.getElementById('page-header'),
  );
});
