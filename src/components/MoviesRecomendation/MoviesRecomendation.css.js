import styled from 'styled-components';

export const StyledMoviesRecomendationWrapper = styled.div`
   flex: 4;
   display: flex;
   flex-direction: column;
   padding: 0 2% 5%;
   @media (max-width: 750px) {
      padding: 0;
   }
   > h1 {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 4.5vh;
      font-weight: 200;
      @media (max-width: 750px) {
         justify-content: center;
      }
   }
   > div {
      flex: 7;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-auto-rows: minmax(400px, auto);
      grid-gap: 30px;
      @media (max-width: 750px) {
         grid-gap: 10px;
         padding: 0 5%;
         grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
         grid-auto-rows: minmax(320px, auto);
      }
   }
`;
