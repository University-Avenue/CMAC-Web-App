import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePage from '../../components/Profile/ProfilePage';

document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(
    <ProfilePage />,
    document.getElementById('page-content'),
  );
});
