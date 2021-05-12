import React, { Suspense, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
   LoadingIndicator,
   MoviesBar,
   MoviesListContainer,
} from '../../components';
import { StyledMoviesPageWrapper } from './MoviesPage.css';

const MoviesPage = ({ getActiveGenre }) => {
   const { name } = useParams();

   useEffect(() => {
      getActiveGenre(name);
   }, [name, getActiveGenre]);
   return (
      <StyledMoviesPageWrapper>
         <MoviesBar genreName={name} />
         <Suspense fallback={<LoadingIndicator />}>
            <MoviesListContainer />
         </Suspense>
      </StyledMoviesPageWrapper>
   );
};

export default MoviesPage;
