import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import app from '../reducers';

// eslint-disable-next-line no-unused-vars
export const store = createStore(app, composeWithDevTools());
