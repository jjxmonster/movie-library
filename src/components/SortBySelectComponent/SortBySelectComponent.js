import React, { useState } from 'react';
import { MoviesContext } from '../../context/moviesContext';

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
   const [typeOfSort, setTypeOfSort] = useState('Popularity');

   const optionsList = sortOptions.map(option => {
      const { name } = option;
      return (
         <StyledSortOption key={name} onClick={() => changeSortType(name)}>
            {name}
         </StyledSortOption>
      );
   });

   const changeSortType = name => {
      changeListVisibility();
      setTypeOfSort(name);
   };
   const changeListVisibility = () => {
      setIsListHidden(!isListHidden);
   };

   return (
      <MoviesContext.Provider value={{ typeOfSort }}>
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
      </MoviesContext.Provider>
   );
};

export default SortBySelectComponent;
