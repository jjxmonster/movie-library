import React from 'react';
import { useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router';

import { getMovieRecomendations } from '../../data/fetch/movies.fetch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { StyledMoviesRecomendationWrapper } from './MoviesRecomendation.css';
import {
   MoviesListElement,
   MoviesCartInformation,
} from '../MoviesListContainer/MoviesListContainer.css';
import DefaultImage from '../../images/imageDefault.svg';

const MoviesRecomendation = () => {
   const { id } = useParams();
   const history = useHistory();
   const { data: recomendations } = useQuery(['recomendations', { id }], () =>
      getMovieRecomendations(id)
   );

   const handleMovieClick = id => {
      history.push(`/movie/${id}`);
   };

   const recomendationsList = recomendations.map((rec, index) => {
      const { title, id, poster_path, release_date, vote_average } = rec;
      if (index > 4) {
         return null;
      }
      return (
         <MoviesListElement
            isRecomendation
            key={id}
            onClick={() => handleMovieClick(id)}
         >
            <img
               src={`https://image.tmdb.org/t/p/w500//${poster_path}`}
               alt='movieImage'
               onError={e => {
                  e.target.src = DefaultImage;
               }}
            />
            <MoviesCartInformation>
               <h2>{title}</h2>
               <p>
                  <span>
                     <FontAwesomeIcon icon={faCalendar} /> {release_date}
                  </span>
                  <span> | </span>
                  <span>
                     <FontAwesomeIcon icon={faStar} /> {vote_average}/10
                  </span>
               </p>
            </MoviesCartInformation>
         </MoviesListElement>
      );
   });

   return (
      <StyledMoviesRecomendationWrapper>
         <h1>ALSO CHECK</h1>
         <div>{recomendationsList}</div>
      </StyledMoviesRecomendationWrapper>
   );
};

export default MoviesRecomendation;
