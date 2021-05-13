import React from 'react';
import { Link } from 'react-router-dom';
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

const MovieWrapper = () => {
   const { id } = useParams();
   const { data: movie } = useQuery('movie', () => getMovie(id));
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
   } = movie;

   const genresList = genres.map(genre => {
      const { name, id } = genre;
      return (
         <Link key={id} to={`/genre/${id}/${name.toLowerCase()}`}>
            <FontAwesomeIcon icon={faCircle} />
            {name}
         </Link>
      );
   });

   console.log(movie);
   return (
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
                     <StyledMovieButton>
                        <span>Watch trailer</span>
                        <FontAwesomeIcon icon={faPlay} />
                     </StyledMovieButton>
                     <StyledMovieButton>
                        <span>Movie website</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                     </StyledMovieButton>
                  </StyledButtonsWrapper>
               </StyledMovieInformationMain>
            </StyledMovieInformationWraper>
         </StyledMovieWrapper>
      </StyledMovieDetailsComponent>
   );
};

export default MovieWrapper;
