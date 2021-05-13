import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   decrementPageNumber,
   incrementPageNumber,
} from '../../data/actions/actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {
   StyledPaginationWrapper,
   StyledNavigationButton,
} from './Pagination.css';

const Pagination = () => {
   const dispatch = useDispatch();
   const numberOfPage = useSelector(store => store.movies.moviesPage);

   const handleChangePage = type => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
      switch (type) {
         case 'increment':
            return dispatch(incrementPageNumber(numberOfPage));
         case 'decrement':
            return dispatch(decrementPageNumber(numberOfPage));
         default:
            break;
      }
   };

   return (
      <StyledPaginationWrapper>
         <StyledNavigationButton
            isHidden={numberOfPage < 2}
            onClick={() => handleChangePage('decrement')}
         >
            <FontAwesomeIcon icon={faAngleLeft} className='buttonIcon' />
            <span>Prev Page</span>
         </StyledNavigationButton>
         <StyledNavigationButton onClick={() => handleChangePage('increment')}>
            <span>Next Page</span>
            <FontAwesomeIcon icon={faAngleRight} className='buttonIcon' />
         </StyledNavigationButton>
      </StyledPaginationWrapper>
   );
};

export default Pagination;
