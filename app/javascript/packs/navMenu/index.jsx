import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import NavMenuComponent from '../../components/NavMenu';
import { store } from '../redux/store';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <NavMenuComponent />
    </Provider>,
    document.getElementById('nav-menu'),
  );
});
