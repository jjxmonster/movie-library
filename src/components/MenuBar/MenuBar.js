import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { decrementPageNumber } from '../../data/actions/actions';
import { getGenres } from '../../data/fetch/config.fetch.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faDotCircle,
   faTimes,
   faBars,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.svg';
import {
   StyledMenuBarWrapper,
   StyledLogoWrapper,
   StyledGenresList,
   StyledGenresListElement,
} from './MenuBar.css';

const MenuBar = ({ activeGenre }) => {
   const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
   const { data } = useQuery('genres', () => getGenres());
   const { genres } = data;
   const dispatch = useDispatch();
   const history = useHistory();

   // menu
   const handleToogleMenuActive = type => {
      switch (type) {
         case 'OPEN':
            return setIsMobileMenuActive(true);
         case 'CLOSE':
            return setIsMobileMenuActive(false);
         default:
            break;
      }
   };
   // genres
   const handleGenreClick = (name, id) => {
      setIsMobileMenuActive(false);
      dispatch(decrementPageNumber(2));
      history.push(`/genre/${id}/${name.toLowerCase()}`);
   };
   const activeGenreElementName = genres.filter(
      genre => activeGenre === genre.name.toLowerCase()
   )[0];
   const genersList = genres.map(genre => {
      const { id, name } = genre;
      return (
         <StyledGenresListElement
            key={id}
            onClick={() => handleGenreClick(name, id)}
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
      <>
         <FontAwesomeIcon
            icon={faBars}
            className='menuMobileOpenIcon'
            onClick={() => handleToogleMenuActive('OPEN')}
         />
         <StyledMenuBarWrapper isMobileMenuActive={isMobileMenuActive}>
            <FontAwesomeIcon
               icon={faTimes}
               className='menuMobileCloseIcon'
               onClick={() => handleToogleMenuActive('CLOSE')}
            />
            <StyledLogoWrapper>
               <img src={logo} alt='logo' />
            </StyledLogoWrapper>
            <StyledGenresList>
               <h2>Genres</h2>
               {genersList}
            </StyledGenresList>
         </StyledMenuBarWrapper>
      </>
   );
};

export default MenuBar;
