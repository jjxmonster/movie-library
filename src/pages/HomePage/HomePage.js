import React from 'react';

import {
   StyledHomePageWrapper,
   StyledImageContainer,
   StyledTextContainer,
   StyledFooterWrapper,
} from './HomePage.css';
import HomePageImage from '../../images/landingImage.svg';
import MovieDBLogos from '../../images/moviedb.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
   return (
      <StyledHomePageWrapper>
         <StyledTextContainer>
            <h1>Welcome to Movies Library!</h1>
            <p>Choose your favorite genre and enjoy it&#128293;</p>
            <FontAwesomeIcon icon={faShare} className='landingIcon' />
         </StyledTextContainer>
         <StyledImageContainer>
            <img src={HomePageImage} alt='cinema-eq' />
         </StyledImageContainer>
         <StyledFooterWrapper>
            <p>
               Copyright &copy;
               <a href='https://github.com/jjxmonster'> jjxmonster</a>
            </p>
            <span>POWERED BY</span>
            <img src={MovieDBLogos} alt='logos' />
         </StyledFooterWrapper>
      </StyledHomePageWrapper>
   );
};

export default HomePage;
