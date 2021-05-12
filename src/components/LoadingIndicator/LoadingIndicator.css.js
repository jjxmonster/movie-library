import styled from 'styled-components';

export const StyledLoadingIndicator = styled.div`
   width: 100px;
   height: 100px;
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   margin: auto;
   > div {
      position: absolute;
      top: 33px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.blue.dark};
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
   }
   > div:nth-child(1) {
      left: 8px;
      animation: lds-ellipsis1 0.6s infinite;
   }
   > div:nth-child(2) {
      left: 8px;
      animation: lds-ellipsis2 0.6s infinite;
   }
   > div:nth-child(3) {
      left: 32px;
      animation: lds-ellipsis2 0.6s infinite;
   }
   > div:nth-child(4) {
      left: 56px;
      animation: lds-ellipsis3 0.6s infinite;
   }
   @keyframes lds-ellipsis1 {
      0% {
         transform: scale(0);
      }
      100% {
         transform: scale(1);
      }
   }
   @keyframes lds-ellipsis3 {
      0% {
         transform: scale(1);
      }
      100% {
         transform: scale(0);
      }
   }
   @keyframes lds-ellipsis2 {
      0% {
         transform: translate(0, 0);
      }
      100% {
         transform: translate(24px, 0);
      }
   }
`;
