import styled from 'styled-components';

export const StyledMenuBarWrapper = styled.nav`
   width: 15%;
   height: 100vh;
   position: fixed;
   left: 0;
   background: ${({ theme }) => theme.colors.blue.light};
   display: flex;
   flex-direction: column;
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
`;
export const StyledGenresList = styled.ul`
   padding: 20% 0;
   flex: 10;
   display: flex;
   flex-direction: column;
`;

export const StyledGenresListElement = styled.li`
   flex: 1;
`;
