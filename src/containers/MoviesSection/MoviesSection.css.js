import styled from 'styled-components';

export const StyledMoviesSectionContainer = styled.section`
   width: 85%;
   margin-left: 15%;
   height: 100vh;
   position: relative;
   overflow: hidden;
   background: ${({ theme }) => theme.colors.grey.light};
   &::after {
      position: absolute;
      width: 100%;
      height: 80%;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      content: '';
      // border-left: 1px solid ${({ theme }) => theme.colors.grey.dark};
   }
`;
