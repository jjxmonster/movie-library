import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import { getMoviesByGenre } from '../../data/fetch/movies.fetch';

import DefaultImage from '../../images/imageDefault.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCalendar } from '@fortawesome/free-solid-svg-icons';
import {
   MoviesListWrapper,
   MoviesListElement,
   MoviesCartInformation,
} from './MoviesListContainer.css';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator.js';

const MoviesListContainer = () => {
   const [isMovieImageLoading, setIsMovieImageLoading] = useState(false);
   const { id } = useParams();
   const history = useHistory();
   const { queryString } = useSelector(store => store.movies.sortTypeObject);
   const numberOfPage = useSelector(store => store.movies.moviesPage);

   const { data: movies } = useQuery(
      ['movies', { queryString, id, numberOfPage }],
      () => getMoviesByGenre(id, queryString, numberOfPage)
   );

   const handleMovieClick = id => {
      history.push(`/movie/${id}`);
   };

   const moviesList = movies.map(movie => {
      const { title, id, poster_path, release_date, vote_average } = movie;
      return (
         <MoviesListElement key={id} onClick={() => handleMovieClick(id)}>
            {isMovieImageLoading ? (
               <LoadingIndicator />
            ) : (
               <img
                  src={`https://image.tmdb.org/t/p/w500//${poster_path}`}
                  alt='movieImage'
                  onLoad={() => setIsMovieImageLoading(false)}
                  onError={e => {
                     e.target.src = DefaultImage;
                  }}
               />
            )}
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

   return <MoviesListWrapper>{moviesList}</MoviesListWrapper>;
};

export default MoviesListContainer;
