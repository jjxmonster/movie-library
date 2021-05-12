import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getGenres } from '../../data/fetch/config.fetch.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.svg';
import {
   StyledMenuBarWrapper,
   StyledLogoWrapper,
   StyledGenresList,
   StyledGenresListElement,
} from './MenuBar.css';

const MenuBar = ({ activeGenre }) => {
   const { data } = useQuery('genres', () => getGenres());
   const { genres } = data;
   const history = useHistory();
   const handleGenreClick = name => {
      history.push(`/genre/${name.toLowerCase()}`);
   };

   const activeGenreElementName = genres.filter(
      genre => activeGenre === genre.name.toLowerCase()
   )[0];

   const genersList = genres.map(genre => {
      const { id, name } = genre;

      return (
         <StyledGenresListElement
            key={id}
            onClick={() => handleGenreClick(name)}
            isActive={
               activeGenre !== undefined
                  ? name === activeGenreElementName.name
                  : false
            }
         >
            <FontAwesomeIcon className='listIcon' icon={faDotCircle} />
            <span>{name}</span>
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
