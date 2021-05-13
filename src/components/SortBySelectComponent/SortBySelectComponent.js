import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeSortType } from '../../data/actions/actions';

import {
   StyledComponentWrapper,
   StyledSortBySelectInput,
   StyledSortOptionsList,
   StyledSortOption,
} from './SortBySelectComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const sortOptions = [
   {
      name: 'Popularity',
      queryString: 'popularity.desc',
   },
   {
      name: 'Relase Data',
      queryString: 'release_date.desc',
   },
   {
      name: 'Votes Average',
      queryString: 'vote_average.desc',
   },
   {
      name: 'Title',
      queryString: 'original_title.desc',
   },
];

const SortBySelectComponent = ({ isListSchouldBeHide }) => {
   const [isListHidden, setIsListHidden] = useState(true);
   const dispatch = useDispatch();
   const typeOfSort = useSelector(store => store.movies.sortTypeObject).name;

   const optionsList = sortOptions.map(option => {
      const { name } = option;
      return (
         <StyledSortOption
            key={name}
            isSelect={name === typeOfSort}
            onClick={e => {
               e.stopPropagation();
               handleChangeSortType(option);
            }}
         >
            {name}
         </StyledSortOption>
      );
   });

   const handleChangeSortType = option => {
      changeListVisibility();
      dispatch(changeSortType(option));
   };
   const changeListVisibility = () => {
      setIsListHidden(!isListHidden);
      isListSchouldBeHide(!isListHidden);
   };
   document.querySelector('body').addEventListener('click', () => {
      setIsListHidden(true);
      isListSchouldBeHide(true);
   });

   return (
      <StyledComponentWrapper>
         <StyledSortBySelectInput
            isActive={!isListHidden}
            onClick={e => {
               e.stopPropagation();
               changeListVisibility();
            }}
         >
            <span>{typeOfSort}</span>
            <FontAwesomeIcon icon={faSortDown} className='selectIcon' />
         </StyledSortBySelectInput>
         <StyledSortOptionsList isHidden={isListHidden}>
            {optionsList}
         </StyledSortOptionsList>
      </StyledComponentWrapper>
   );
};

export default SortBySelectComponent;
