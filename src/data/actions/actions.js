import {
   CHANGE_TYPE_OF_SORT,
   DECREMENT_PAGE_NUMBER,
   INCREMENT_PAGE_NUMBER,
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
