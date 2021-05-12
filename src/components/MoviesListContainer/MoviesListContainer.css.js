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
   > img {
      z-index: -50;
      border-radius: 3%;
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
   > h2 {
      font-size: 2vh;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.grey.dark};
   }
   > p {
      color: ${({ theme }) => theme.colors.grey.normal};
   }
`;
