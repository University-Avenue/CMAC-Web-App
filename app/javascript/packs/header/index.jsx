import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import HeaderComponent from '../../components/Header';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <HeaderComponent />
    </Provider>,
    document.getElementById('page-header'),
  );
});
