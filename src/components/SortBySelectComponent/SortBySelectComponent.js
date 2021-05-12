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

const SortBySelectComponent = () => {
   const [isListHidden, setIsListHidden] = useState(true);
   const dispatch = useDispatch();
   const typeOfSort = useSelector(store => store.movies.sortTypeObject).name;

   const optionsList = sortOptions.map(option => {
      const { name } = option;
      return (
         <StyledSortOption
            key={name}
            isSelect={name === typeOfSort}
            onClick={() => handleChangeSortType(option)}
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
   };

   return (
      <StyledComponentWrapper>
         <StyledSortBySelectInput
            isActive={!isListHidden}
            onClick={changeListVisibility}
         >
            <span>{typeOfSort}</span>
            <FontAwesomeIcon icon={faSortDown} />
         </StyledSortBySelectInput>
         <StyledSortOptionsList isHidden={isListHidden}>
            {optionsList}
         </StyledSortOptionsList>
      </StyledComponentWrapper>
   );
};

export default SortBySelectComponent;
