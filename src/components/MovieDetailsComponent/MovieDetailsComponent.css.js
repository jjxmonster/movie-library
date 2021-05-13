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
   user-select: none;
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
   position: relative;
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
         width: 200%;
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
         position: absolute;
         bottom: 0;
         text-transform: uppercase;
         font-weight: 700;
         color: #696969;
      }
      > .genres {
         padding-top: 5%;
         > h5 {
            color: white;
            font-size: 1.5vh;
         }
         > a {
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
   padding-top: 2%;
   display: flex;
   flex-direction: column;
`;

export const StyledMovieDescriptionWrapper = styled.div`
   flex: 2;
   > p {
      font-size: 2vh;
      color: white;
   }
`;

export const StyledButtonsWrapper = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
`;

export const StyledMovieButton = styled.button`
   width: 150px;
   height: 40px;
   border: 1px solid ${({ theme }) => theme.colors.grey.light};
   border-radius: 60px;
   margin-right: 5%;
   color: ${({ theme }) => theme.colors.grey.dark};
   background: ${({ theme }) => theme.colors.grey.light};
   font-size: 13px;
   transition: 0.2s ease;
   font-weight: 600;
   > span {
      margin-right: 5px;
   }
   &:hover {
      transform: translateY(-5px);
   }
`;
