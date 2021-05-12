import React, { useState } from 'react';

import { StyledMoviesBarWrapper } from './MoviesBar.css';
import { SortBySelectComponent } from '../index';
const MoviesBar = ({ genreName }) => {
   const [hideList, setHideList] = useState(true);

   const isListSchouldBeHide = result => {
      setHideList(result);
   };

   return (
      <StyledMoviesBarWrapper hideList={hideList}>
         <h1>{genreName.toUpperCase()} MOVIES</h1>
         <SortBySelectComponent isListSchouldBeHide={isListSchouldBeHide} />
      </StyledMoviesBarWrapper>
   );
};

export default MoviesBar;
