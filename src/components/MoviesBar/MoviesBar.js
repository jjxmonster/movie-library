import React from 'react';

import { StyledMoviesBarWrapper } from './MoviesBar.css';
import { SortBySelectComponent } from '../index';
const MoviesBar = ({ genreName }) => {
   return (
      <StyledMoviesBarWrapper>
         <h1>{genreName.toUpperCase()} MOVIES</h1>
         <SortBySelectComponent />
      </StyledMoviesBarWrapper>
   );
};

export default MoviesBar;
