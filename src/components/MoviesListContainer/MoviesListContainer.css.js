import styled from 'styled-components';

export const MoviesListWrapper = styled.div`
   padding: 0 5% 8%;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   grid-auto-rows: minmax(450px, auto);
   grid-gap: 40px;
`;

export const MoviesListElement = styled.div`
   position: relative;
   cursor: pointer;
   transition: 0.2s ease;
   ${({ isRecomendation }) =>
      isRecomendation
         ? null
         : ` &:hover {
      transform: scale(1.1);
   }`}

   &:hover div {
      background: ${({ theme }) => theme.colors.grey.dark};
      border-radius: 0 0 1vh 1vh;
   }
   &:hover div h2 {
      color: white;
   }
   &:hover div p {
      color: ${({ theme }) => theme.colors.grey.light};
   }
   &:hover img {
      border-radius: 1vh 1vh 0 0;
   }
   > img {
      z-index: 100;
      border-radius: 1vh;
      width: 100%;
      height: 80%;
   }
`;
export const MoviesCartInformation = styled.div`
   width: 100%;
   height: 20%;
   position: absolute;
   bottom: 0;
   margin: auto;
   display: flex;
   aling-items: flex-start;
   flex-direction: column;
   justify-content: center;
   padding-left: 10px;
   transition: 0.2s ease;
   > h2 {
      font-size: 1.8vh;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.grey.dark};
   }
   > p {
      font-size: 1.5vh;
      color: ${({ theme }) => theme.colors.grey.normal};
   }
`;
