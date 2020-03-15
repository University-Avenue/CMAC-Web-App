import { SHOW_NAV_MENU } from './actionTypes';

export default function showNavMenu(show) {
  console.log('showNavMenu');
  return {
    type: SHOW_NAV_MENU,
    show,
  };
}
