import styled from 'styled-components';

export const StyledPaginationWrapper = styled.div`
   width: 100%;
   height: 15vh;
   position: absolute;
   bottom: 0;
   margin: auto;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 5%;
`;

export const StyledNavigationButton = styled.button`
   width: 150px;
   height: 40px;
   color: ${({ theme }) => theme.colors.grey.dark};
   border: 2px solid ${({ theme }) => theme.colors.grey.dark};
   border-radius: 60px;
   display: flex;
   align-items: center;
   justify-content: space-around;
   padding: 0 25px;
   transition: 0.3s ease;
   ${({ isHidden }) => (isHidden ? `visibility:hidden` : 'visibility:visible')};
   > span {
      font-size: 16px;
   }
   > .buttonIcon {
      font-size: 25px;
   }
   &:hover {
      background: ${({ theme }) => theme.colors.grey.dark};
      color: ${({ theme }) => theme.colors.grey.light};
      transform: translateY(-4px);
   }
`;
