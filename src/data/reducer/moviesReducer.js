import {
   CHANGE_TYPE_OF_SORT,
   DECREMENT_PAGE_NUMBER,
   INCREMENT_PAGE_NUMBER,
} from '../constants/constants';

const moviesState = {
   sortTypeObject: {
      name: 'Popularity',
      queryString: 'popularity.desc',
   },
   moviesPage: 1,
};

export const moviesReducer = (state = moviesState, action) => {
   let { type, payload } = action;
   switch (type) {
      case CHANGE_TYPE_OF_SORT:
         return { ...state, sortTypeObject: payload };
      case INCREMENT_PAGE_NUMBER:
         return { ...state, moviesPage: payload + 1 };
      case DECREMENT_PAGE_NUMBER:
         return { ...state, moviesPage: payload - 1 };
      default:
         return state;
   }
};
