import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { StyledModalWrapper, StyledTrailerContainer } from './TrailerModal.css';

const TrailerModal = () => {
   useEffect(() => {
      document.querySelector('body').style = 'overflow:hidden';
   });
   return createPortal(
      <StyledModalWrapper>
         <StyledTrailerContainer></StyledTrailerContainer>
      </StyledModalWrapper>,
      document.querySelector('#modal')
   );
};

export default TrailerModal;
