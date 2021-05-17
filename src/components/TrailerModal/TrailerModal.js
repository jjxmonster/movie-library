import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router';

import { getMovieTrailer } from '../../data/fetch/movies.fetch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { StyledModalWrapper, StyledTrailerContainer } from './TrailerModal.css';

const TrailerModal = () => {
   const history = useHistory();
   const { id } = useParams();
   const { data: trailer } = useQuery('trailer', () => getMovieTrailer(id));
   const { key } = trailer;

   const handleGoBack = () => {
      history.goBack();
      document.querySelector('body').style = 'overflow-y:visible';
   };
   useEffect(() => {
      document.querySelector('body').style = 'overflow-y:hidden';
   }, []);
   return createPortal(
      <StyledModalWrapper onClick={handleGoBack}>
         <StyledTrailerContainer onClick={e => e.stopPropagation()}>
            <FontAwesomeIcon
               icon={faTimes}
               className='modalCloseIcon'
               onClick={handleGoBack}
            />
            <iframe
               width='100%'
               height='90%'
               src={`https://www.youtube.com/embed/${key}?autoplay=1`}
               title='YouTube video player'
               frameBorder='0'
               allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
               allowFullScreen
               loading='lazy'
            ></iframe>
         </StyledTrailerContainer>
      </StyledModalWrapper>,
      document.querySelector('#modal')
   );
};

export default TrailerModal;
