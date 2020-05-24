import React from 'react';
import ReactDOM from 'react-dom';
import TrainPage from '../../components/Train/TrainPage';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <TrainPage />,
    document.getElementById('page-content'),
  );
});
