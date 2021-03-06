import styled from 'styled-components';

export const StyledHomePageWrapper = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   position: relative;
   overflow: hidden;
   @media (max-width: 750px) {
      flex-direction: column;
      padding: 25% 0;
   }
`;

export const StyledImageContainer = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
   &::after {
      position: absolute;
      width: 100%;
      height: 50%;
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      content: '';
      border-left: 2px solid ${({ theme }) => theme.colors.grey.normal};
   }
   @media (max-width: 750px) {
      &::after {
         border: 0;
      }
   }
   > img {
      width: 80%;
      height: 50%;
      @media (max-width: 750px) {
         width: 100%;
      }
   }
`;
export const StyledTextContainer = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   > h1 {
      text-align: center;
      font-size: 8vh;
      font-weight: 600;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.blue.dark};
      @media (max-width: 750px) {
         font-size: 5vh;
      }
   }
   > p {
      text-align: center;
      font-size: 4vh;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.grey.dark};
      @media (max-width: 750px) {
         font-size: 3vh;
      }
   }
   .landingIcon {
      font-size: 20vh;
      transform: rotate(180deg);
      color: ${({ theme }) => theme.colors.grey.dark};
      @media (max-width: 750px) {
         font-size: 15vh;
         transform: rotate(240deg);
      }
   }
`;

export const StyledFooterWrapper = styled.footer`
   position: absolute;
   bottom: 0;
   width: 100%;
   height: 10%;
   background: ${({ theme }) => theme.colors.grey.dark};
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   > p {
      color: ${({ theme }) => theme.colors.grey.light};
      font-size: 1.5vh;
      margin-bottom: 2px;
      > a {
         color: ${({ theme }) => theme.colors.grey.light};
      }
   }

   > span {
      font-size: 1.5vh;
      font-weight: 800;
      background: #90cea1;
      background: linear-gradient(to left, #90cea1 0%, #01b4e4 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }
   > img {
      width: 10%;
   }
`;
