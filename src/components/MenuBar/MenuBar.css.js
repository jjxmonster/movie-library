import styled from 'styled-components';

export const StyledMenuBarWrapper = styled.nav`
   width: 15%;
   height: 100vh;
   position: fixed;
   z-index: 100;
   left: 0;
   display: flex;
   flex-direction: column;
   background: ${({ theme }) => theme.colors.grey.light};

   // MOBILE
   @media (max-width: 750px) {
      transition: 0.4s ease;
      position: fixed;
      width: 80%;
      border-right: 2px solid ${({ theme }) => theme.colors.grey.dark};
      ${({ isMobileMenuActive }) =>
         isMobileMenuActive ? `margin-left: 0%` : `margin-left: -80%`}
   }
   > .menuMobileCloseIcon {
      position: absolute;
      right: 1vh;
      top: 1vh;
      color: white;
      font-size: 3vh;
      margin: auto;
   }
`;

export const StyledLogoWrapper = styled.div`
   flex: 2;
   display:flex;
   align-items:center;
   justify-content:center;
   > img {
      width: 90%;
      height:90%;
      object:fit:contain;
   }
   @media (max-width: 750px) {
      display:none;
   }
`;
export const StyledGenresList = styled.ul`
   padding: 10% 0;
   flex: 10;
   display: flex;
   flex-direction: column;
   border-top-right-radius: 15px;

   background: ${({ theme }) => theme.colors.grey.dark};
   > h2 {
      color: ${({ theme }) => theme.colors.grey.normal};
      font-weight: 400;
      text-transform: uppercase;
      font-size: 2.5vh;
      padding-left: 8%;
   }
   @media (max-width: 750px) {
      border-top-right-radius: 0px;
   }
`;

export const StyledGenresListElement = styled.li`
   flex: 1;
   margin: 0 8%;
   padding-left: 10%;
   display: flex;
   align-items: center;
   justify-content: start;
   position: relative;
   color: ${({ theme }) => theme.colors.grey.normal};
   cursor: pointer;
   font-size: 1.6vh;
   > span {
      padding-left: 5%;
      font-weight: 600;
      z-index: 100;
   }
   > .listIcon {
      z-index: 100;
   }
   &::after {
      border-radius: 50px;
      position: absolute;
      left: 0;
      margin: auto;
      width: 0%;
      height: 100%;
      content: '';
      background: ${({ theme }) => theme.colors.blue.dark};
      transition: 0.2s ease;
      visibility: hidden;
   }
   &:hover {
      color: white;
   }
   &:hover::after {
      width: 100%;
      visibility: visible;
   }
   ${({ isActive }) =>
      isActive
         ? `
   & {
      color: white;
   }
   &::after {
      width: 100%;
      visibility: visible;
   }`
         : null}
`;
