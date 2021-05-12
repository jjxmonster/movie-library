import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { MoviesBar, MoviesListContainer } from '../../components';
import { StyledMoviesPageWrapper } from './MoviesPage.css';

const MoviesPage = ({ getActiveGenre }) => {
   const { name } = useParams();

   useEffect(() => {
      getActiveGenre(name);
   }, [name, getActiveGenre]);
   return (
      <StyledMoviesPageWrapper>
         <MoviesBar genreName={name} />
         <MoviesListContainer />
      </StyledMoviesPageWrapper>
   );
};

export default MoviesPage;
