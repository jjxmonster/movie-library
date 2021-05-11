import React from 'react';
import { useParams } from 'react-router';

import { StyledMoviesBarWrapper } from './MoviesBar.css';
import { SortBySelectComponent } from '../index';
const MoviesBar = () => {
   const { name } = useParams();
   return (
      <StyledMoviesBarWrapper>
         <h1>{name.toUpperCase()} MOVIES</h1>
         <SortBySelectComponent />
      </StyledMoviesBarWrapper>
   );
};

export default MoviesBar;
