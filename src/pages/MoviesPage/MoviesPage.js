import React, { useContext } from 'react';
import { MoviesContext } from '../../context/moviesContext';

import { MoviesBar } from '../../components';
import { StyledMoviesPageWrapper } from './MoviesPage.css';

const MoviesPage = () => {
   const typeOfSort = useContext(MoviesContext);
   console.log(typeOfSort);
   return (
      <StyledMoviesPageWrapper>
         <MoviesBar />
      </StyledMoviesPageWrapper>
   );
};

export default MoviesPage;
