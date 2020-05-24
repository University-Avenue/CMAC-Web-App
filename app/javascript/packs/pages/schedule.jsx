import React from 'react';
import ReactDOM from 'react-dom';
import Schedule from '../../components/Schedule/Schedule';
import Footer from '../../components/Footer/Footer';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Schedule />, document.getElementById('page-content'),
  );

  ReactDOM.render(
    <Footer />,
    document.getElementById('page-footer'),
  );
});
