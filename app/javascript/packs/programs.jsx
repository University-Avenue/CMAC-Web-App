import React from 'react';
import ReactDOM from 'react-dom';
import ProgramsPage from '../components/ProgramsPage';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ProgramsPage />,
    document.getElementById('page-content'),
  );
});
