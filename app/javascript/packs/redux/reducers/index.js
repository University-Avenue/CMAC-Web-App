import { combineReducers } from 'redux';
import { SHOW_NAV_MENU } from '../actions/actionTypes';

const initialState = {
  showNavMenu: false,
};

function appComponentVisibility(state = initialState, action) {
  switch (action.type) {
    case SHOW_NAV_MENU:
      console.log('in reducer')
      console.log(action.show)
      return {
        ...state,
        showNavMenu: action.show,
      };
    default:
      return state;
  }
}

const app = combineReducers({
  appComponentVisibility,
});

export default app;
