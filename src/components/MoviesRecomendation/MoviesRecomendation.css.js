import styled from 'styled-components';

export const StyledMoviesRecomendationWrapper = styled.div`
   flex: 4;
   display: flex;
   flex-direction: column;
   padding: 0 2% 5%;
   > h1 {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 4.5vh;
      font-weight: 200;
   }
   > div {
      flex: 7;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-auto-rows: minmax(400px, auto);
      grid-gap: 40px;
   }
`;
