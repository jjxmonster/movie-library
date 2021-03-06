import styled from 'styled-components';

export const MoviesPageWrapper = styled.div`
   width: 100%;
   height: 150%;
   display: flex;
   flex-direction: column;
   @media (max-width: 750px) {
      height: 200%;
   }
`;
