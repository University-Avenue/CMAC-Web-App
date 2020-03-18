import React from 'react';
import ReactDOM from 'react-dom';
import SchedulePage from '../components/SchedulePage';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SchedulePage />,
    document.getElementById('page-content'),
  );
});
