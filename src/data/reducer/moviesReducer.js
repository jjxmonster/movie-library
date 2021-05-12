import { CHANGE_TYPE_OF_SORT } from '../constants/constants';

const moviesState = {
   sortTypeObject: {
      name: 'Popularity',
      queryString: 'popularity.desc',
   },
};

export const moviesReducer = (state = moviesState, action) => {
   const { type, payload } = action;
   switch (type) {
      case CHANGE_TYPE_OF_SORT:
         return { ...state, sortTypeObject: payload };

      default:
         return state;
   }
};
