import {
   ACTIVATE_MOBILE_MENU,
   DEACTIVATE_MOBILE_MENU,
} from '../constants/constants';

const commonState = {
   isMobileMenuActive: false,
};

export const commonReducer = (state = commonState, action) => {
   let { type } = action;
   switch (type) {
      case ACTIVATE_MOBILE_MENU:
         return { ...state, isMobileMenuActive: true };
      case DEACTIVATE_MOBILE_MENU:
         return { ...state, isMobileMenuActive: false };
      default:
         return state;
   }
};
