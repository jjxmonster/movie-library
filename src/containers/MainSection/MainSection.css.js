import styled from 'styled-components';

export const StyledMainSectionContainer = styled.section`
   width: 85%;
   margin-left: 15%;
   height: 100vh;
   position: relative;
   background: ${({ theme }) => theme.colors.grey.light};
   @media (max-width: 750px) {
      width: 100%;
      margin: 0;
   }
`;
