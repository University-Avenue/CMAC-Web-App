import React from 'react';
import ReactDOM from 'react-dom';
import InstructorsPage from '../components/InstructorsPage';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <InstructorsPage />,
    document.getElementById('page-content'),
  );
});
