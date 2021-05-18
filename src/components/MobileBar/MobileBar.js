import React from 'react';
import { useDispatch } from 'react-redux';

import { activateMobileMenu } from '../../data/actions/actions';

import { StyledMobileBarWrapper } from './MobileBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MobileBar = () => {
   const dispatch = useDispatch();
   return (
      <StyledMobileBarWrapper>
         <FontAwesomeIcon
            icon={faBars}
            className='menuMobileOpenIcon'
            onClick={() => dispatch(activateMobileMenu())}
         />
      </StyledMobileBarWrapper>
   );
};

export default MobileBar;
