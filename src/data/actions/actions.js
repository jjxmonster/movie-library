import { CHANGE_TYPE_OF_SORT } from '../constants/constants';

export const changeSortType = type => {
   return {
      type: CHANGE_TYPE_OF_SORT,
      payload: type,
   };
};
