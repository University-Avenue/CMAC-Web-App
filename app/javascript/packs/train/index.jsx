import React from 'react';
import ReactDOM from 'react-dom';
import TrainPage from '../../components/Train/TrainPage';

document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(
    <TrainPage />,
    document.getElementById('page-content'),
  );
});
