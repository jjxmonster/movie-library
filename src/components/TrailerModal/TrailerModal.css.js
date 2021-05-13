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
    background: rgba(46, 54, 66,0.6 );
`;

export const StyledTrailerContainer = styled.div`
   width: 40vw;
   height: 40vh;
   background: red;
`;
