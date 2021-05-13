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

         <MoviesRecomendation />
      </MoviesPageWrapper>
   );
};

export default MoviePage;
