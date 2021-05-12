import styled from 'styled-components';

export const StyledComponentWrapper = styled.div`
   width: 100%;
   height: 18vh;
   position: absolute;
   left: 0;
   right: 0;
   top: 63%;
   padding: 0 5%;
`;

export const StyledSortBySelectInput = styled.div`
   width: 100%;
   border: 1px solid ${({ theme }) => theme.colors.black.normal};
   border-radius: 5px;
   height: 25%;
   margin-top: 1%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   cursor: pointer;
   padding: 0 1%;
   ${({ isActive }) => (isActive ? `border:2px solid black;` : null)};
`;

export const StyledSortOptionsList = styled.div`
   margin-top: 5px;
   width: 100%;
   height: 75%;
   display: flex;
   flex-direction: column;
   border-radius: 5px;
   background: ${({ theme }) => theme.colors.grey.light};
   border: 1px solid ${({ theme }) => theme.colors.black.normal};
   box-shadow: -1px 1px 5px 0px rgba(0, 0, 0, 0.75);
   ${({ isHidden }) => (isHidden ? `visibility:hidden` : `visibility:visible`)};
`;
export const StyledSortOption = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   padding-left: 1%;
   cursor: pointer;
   &:hover {
      transition: 0.1s ease;
      border-left: 10px solid ${({ theme }) => theme.colors.grey.dark};
   }
   ${({ isSelect, theme }) =>
      isSelect
         ? `background:${theme.colors.grey.dark};
         color:white;   
         border-left: 10px solid ${theme.colors.grey.dark};         
      `
         : null};
`;
