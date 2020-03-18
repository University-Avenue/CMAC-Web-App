import React from 'react';
import ReactDOM from 'react-dom';
import GalleryPage from '../components/GalleryPage';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <GalleryPage />,
    document.getElementById('page-content'),
  );
});
