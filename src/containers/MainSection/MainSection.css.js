import styled from 'styled-components';

export const StyledMainSectionContainer = styled.section`
   width: 85%;
   margin-left: 15%;
   height: 100vh;
   position: relative;
   overflow: hidden;
   background: ${({ theme }) => theme.colors.grey.light};
`;
