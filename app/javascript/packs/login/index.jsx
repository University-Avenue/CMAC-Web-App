import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from '../../components/Login/LoginPage';

document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(
    <LoginPage />,
    document.getElementById('page-content'),
  );
});
