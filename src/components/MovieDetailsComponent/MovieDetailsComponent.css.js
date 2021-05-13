import styled from 'styled-components';

export const StyledMovieDetailsComponent = styled.div`
   flex: 5;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const StyledMovieWrapper = styled.div`
   width: 85%;
   height: 85%;
   border-radius: 20px;
   overflow: hidden;
   position: relative;
   background-image: url(${({ imageUrl }) => imageUrl});
   background-repeat: no-repeat;
   background-size: 100%;
`;
export const StyledMovieInformationWraper = styled.div`
   width: 100%;
   height: 100%;
   z-index: 100;
   background: rgb(46, 54, 66);
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   padding: 2%;
   background: linear-gradient(
      90deg,
      rgba(46, 54, 66, 1) 10%,
      rgba(46, 54, 66, 0.927608543417367) 50%,
      rgba(0, 0, 0, 0) 100%
   );
`;

export const StyledMovieInformationHeader = styled.div`
   width: 60%;
   height: 40%;
   display: flex;
   > div:nth-child(1) {
      flex: 1;
      > img {
         width: 100%;
         height: 100%;
      }
   }
   > div:nth-child(2) {
      flex: 3.5;
      padding-left: 2%;
      > h3 {
         text-transform: uppercase;
         color: white;
         font-weight: 300;
         font-size: 4vh;
      }
      > h4 {
         color: ${({ theme }) => theme.colors.grey.light};
         font-weight: 500;
         font-size: 2vh;
      }
      > .vote_average {
         padding: 1% 0;
         color: white;
         font-size: 2vh;
      }
      > .informations {
         color: ${({ theme }) => theme.colors.grey.light};
      }
      > .genres {
         padding-top: 5%;
         > h5 {
            color: white;
            font-size: 1.5vh;
         }
         > span {
            text-transform: uppercase;
            font-size: 1.3vh;
            color: grey;
            padding-left: 5px;
            cursor: pointer;
            transition: 0.3s ease;
            &:hover {
               color: white;
            }
         }
      }
   }
`;
export const StyledMovieInformationMain = styled.div`
   width: 50%;
   height: 60%;
   color: white;
   font-size: 2.5vh;
   padding-top: 2%;
`;
