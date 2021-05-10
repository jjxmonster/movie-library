import styled from 'styled-components';

export const StyledMenuBarWrapper = styled.nav`
   width: 15vw;
   height: 100vh;
   position: fixed;
   left: 0;
   background: ${({ theme }) => theme.colors.blue.light};
`;
