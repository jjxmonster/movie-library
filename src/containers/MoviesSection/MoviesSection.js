import React from 'react';

import { StyledMoviesSectionContainer } from './MoviesSection.css';

const MoviesSection = ({ children }) => {
   return (
      <StyledMoviesSectionContainer>{children}</StyledMoviesSectionContainer>
   );
};

export default MoviesSection;
