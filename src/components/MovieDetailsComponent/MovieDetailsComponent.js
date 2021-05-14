import React, { Suspense } from 'react';
import { Link, Route, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getMovie } from '../../data/fetch/movies.fetch';

import defaultImage from '../../images/imageDefault.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faStar,
   faCircle,
   faExternalLinkAlt,
   faPlay,
} from '@fortawesome/free-solid-svg-icons';
import {
   StyledMovieDetailsComponent,
   StyledMovieWrapper,
   StyledMovieInformationWraper,
   StyledMovieInformationHeader,
   StyledMovieInformationMain,
   StyledMovieButton,
   StyledButtonsWrapper,
   StyledMovieDescriptionWrapper,
} from './MovieDetailsComponent.css';
import { LoadingIndicator, TrailerModal } from '../index.js';

const MovieWrapper = () => {
   const { id } = useParams();
   const history = useHistory();
   const { data: movie } = useQuery(['movie', { id }], () => getMovie(id));
   const {
      backdrop_path,
      title,
      poster_path,
      runtime,
      spoken_languages,
      genres,
      release_date,
      tagline,
      vote_average,
      overview,
      homepage,
   } = movie;

   const handlePushToMovieWebsite = () => {
      window.open(homepage);
   };
   const handleOpenTrailer = id => {
      history.push(`/movie/${id}/trailer`);
   };

   const genresList = genres.map(genre => {
      const { name, id } = genre;
      return (
         <Link key={id} to={`/genre/${id}/${name.toLowerCase()}`}>
            <FontAwesomeIcon icon={faCircle} />
            {name}
         </Link>
      );
   });

   return (
      <>
         <StyledMovieDetailsComponent>
            <StyledMovieWrapper
               imageUrl={`https://image.tmdb.org/t/p/original//${backdrop_path}`}
            >
               <StyledMovieInformationWraper>
                  <StyledMovieInformationHeader>
                     <div>
                        <img
                           src={`https://image.tmdb.org/t/p/original//${poster_path}`}
                           alt={'movie'}
                           onError={e => {
                              e.target.src = defaultImage;
                           }}
                        />
                     </div>
                     <div>
                        <h3>{title}</h3>
                        <h4>{tagline}</h4>
                        <p className='vote_average'>
                           <FontAwesomeIcon icon={faStar} />
                           {vote_average}/10
                        </p>

                        <div className='genres'>
                           <h5>GENRES</h5>
                           {genresList}
                        </div>
                        <p className='informations'>
                           {runtime}min / {spoken_languages[0].english_name} /{' '}
                           {release_date.substring(0, 4)}
                        </p>
                     </div>
                  </StyledMovieInformationHeader>
                  <StyledMovieInformationMain>
                     <StyledMovieDescriptionWrapper>
                        <p>{overview}</p>
                     </StyledMovieDescriptionWrapper>
                     <StyledButtonsWrapper>
                        <StyledMovieButton
                           onClick={() => handleOpenTrailer(id)}
                        >
                           <span>Watch trailer</span>
                           <FontAwesomeIcon icon={faPlay} />
                        </StyledMovieButton>
                        <StyledMovieButton onClick={handlePushToMovieWebsite}>
                           <span>Movie website</span>

                           <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </StyledMovieButton>
                     </StyledButtonsWrapper>
                  </StyledMovieInformationMain>
               </StyledMovieInformationWraper>
            </StyledMovieWrapper>
         </StyledMovieDetailsComponent>
         <Route path='/movie/:id/trailer'>
            <Suspense fallback={<LoadingIndicator />}>
               <TrailerModal />
            </Suspense>
         </Route>
      </>
   );
};

export default MovieWrapper;
