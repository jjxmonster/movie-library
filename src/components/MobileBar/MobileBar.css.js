import styled from 'styled-components';

export const StyledMobileBarWrapper = styled.div`
   width: 100vw;
   height: 7vh;
   position: fixed;
   background: ${({ theme }) => theme.colors.grey.dark};
   display: flex;
   align-items: center;
   justify-content: flex-start;
   z-index: 100;
   display: none;
   > .menuMobileOpenIcon {
      color: ${({ theme }) => theme.colors.grey.light};
   }
   @media (max-width: 750px) {
      display: block;
   }
`;
