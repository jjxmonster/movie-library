import {
   CHANGE_TYPE_OF_SORT,
   DECREMENT_PAGE_NUMBER,
   INCREMENT_PAGE_NUMBER,
   ACTIVATE_MOBILE_MENU,
   DEACTIVATE_MOBILE_MENU,
} from '../constants/constants';

// movies
export const changeSortType = type => {
   return {
      type: CHANGE_TYPE_OF_SORT,
      payload: type,
   };
};

export const incrementPageNumber = state => {
   return {
      type: INCREMENT_PAGE_NUMBER,
      payload: state,
   };
};
export const decrementPageNumber = state => {
   return {
      type: DECREMENT_PAGE_NUMBER,
      payload: state,
   };
};

// mobile
export const activateMobileMenu = () => {
   return {
      type: ACTIVATE_MOBILE_MENU,
   };
};
export const deactivateMobileMenu = () => {
   return {
      type: DEACTIVATE_MOBILE_MENU,
   };
};
