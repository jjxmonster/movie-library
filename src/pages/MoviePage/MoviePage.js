import React, { Suspense } from 'react';

import { MoviesPageWrapper } from './MoviePage.css';
import {
   LoadingIndicator,
   MovieDetailsComponent,
   MoviesRecomendation,
} from '../../components';

const MoviePage = () => {
   return (
      <MoviesPageWrapper>
         <Suspense fallback={<LoadingIndicator />}>
            <MovieDetailsComponent />
         </Suspense>
         <Suspense fallback={<LoadingIndicator />}>
            <MoviesRecomendation />
         </Suspense>
      </MoviesPageWrapper>
   );
};

export default MoviePage;
