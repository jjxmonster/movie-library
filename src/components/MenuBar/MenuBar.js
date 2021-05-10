import React from 'react';
import { useQuery } from 'react-query';

import { getGenres } from '../../data/fetch/config,fetch.js';

import logo from '../../images/logo.svg';
import {
   StyledMenuBarWrapper,
   StyledLogoWrapper,
   StyledGenresList,
   StyledGenresListElement,
} from './MenuBar.css';

const MenuBar = () => {
   const { data } = useQuery('genres', () => getGenres());
   const { genres } = data;
   const genersList = genres.map(genre => (
      <StyledGenresListElement>{genre.name}</StyledGenresListElement>
   ));

   return (
      <StyledMenuBarWrapper>
         <StyledLogoWrapper>
            <img src={logo} alt='logo' />
         </StyledLogoWrapper>
         <StyledGenresList>{genersList}</StyledGenresList>
      </StyledMenuBarWrapper>
   );
};

export default MenuBar;
