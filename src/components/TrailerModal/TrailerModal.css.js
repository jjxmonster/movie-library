import styled from 'styled-components';

export const StyledModalWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    z-index:1000;
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin-auto;
    display:flex;
    align-items:center;
    justify-content:center;
    background: rgba(46, 54, 66,0.8 );
`;

export const StyledTrailerContainer = styled.div`
   width: 50vw;
   height: 50vh;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   @media (max-width: 750px) {
      width: 100vw;
      height: 35vh;
   }
   > .modalCloseIcon {
      position: absolute;
      top: 0;
      right: 0;
      margin: auto;
      color: white;
      font-size: 4vh;
      cursor: pointer;
      transition: 0.2s ease;
      &:hover {
         color: ${({ theme }) => theme.colors.grey.light};
      }
   }
`;
