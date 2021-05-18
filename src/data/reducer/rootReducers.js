import { combineReducers } from 'redux';

import { moviesReducer } from './moviesReducer';
import { commonReducer } from './commonReducer';

export const rootReducer = combineReducers({
   movies: moviesReducer,
   common: commonReducer,
});
