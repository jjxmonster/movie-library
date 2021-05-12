import styled from 'styled-components';

export const MoviesListWrapper = styled.div`
   padding: 0 5% 8%;

   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
   grid-auto-rows: minmax(450px, auto);
   grid-gap: 50px;
   > div {
      background: red;
   }
`;
