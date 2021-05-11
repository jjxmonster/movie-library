import React from 'react';
// import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getGenres } from '../../data/fetch/config,fetch.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
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

   const genersList = genres.map(genre => {
      const { id, name } = genre;
      return (
         <StyledGenresListElement key={id}>
            {/* <Link> */}
            <FontAwesomeIcon className='listIcon' icon={faDotCircle} />
            <span>{name}</span>
            {/* </Link> */}
         </StyledGenresListElement>
      );
   });

   return (
      <StyledMenuBarWrapper>
         <StyledLogoWrapper>
            <img src={logo} alt='logo' />
         </StyledLogoWrapper>
         <StyledGenresList>
            <h2>Genres</h2>
            {genersList}
         </StyledGenresList>
      </StyledMenuBarWrapper>
   );
};

export default MenuBar;
