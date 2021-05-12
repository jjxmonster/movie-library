import { createStore } from 'redux';
import { rootReducer } from '../reducer/rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {
   const composedEnhancers = composeWithDevTools();
   const store = createStore(rootReducer, composedEnhancers);

   return store;
}
