import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import {
   decrementPageNumber,
   deactivateMobileMenu,
} from '../../data/actions/actions';
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
   const isMobileMenuActive = useSelector(
      store => store.common.isMobileMenuActive
   );
   const dispatch = useDispatch();
   const { data } = useQuery('genres', () => getGenres());
   const { genres } = data;
   const history = useHistory();

   const handleGenreClick = (name, id) => {
      dispatch(deactivateMobileMenu());
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
      <StyledMenuBarWrapper isMobileMenuActive={isMobileMenuActive}>
         <FontAwesomeIcon
            icon={faTimes}
            className='menuMobileCloseIcon'
            onClick={() => dispatch(deactivateMobileMenu())}
         />
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
