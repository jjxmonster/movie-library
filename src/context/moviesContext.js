import { createContext } from 'react';

export const defaultObject = {
   typeOfSort: 'Popularity',
};

export const MoviesContext = createContext(defaultObject);
