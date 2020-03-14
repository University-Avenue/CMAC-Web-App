import { SHOW_NAV_MENU } from './actionTypes';

export function showNavMenu(show) {
  return {
    type: SHOW_NAV_MENU,
    show,
  }
}
