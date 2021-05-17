import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }
  body{
    background:${({ theme }) => theme.colors.grey.light};
    overflow-x: hidden;
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style:none;
    margin:0;
    padding:0;
  }
  button{
    cursor:pointer;
    border:0;
    background:transparent;
    outline:none;
  }
  .menuMobileOpenIcon{
    z-index:100;
    position:fixed;
    left:2vh;
    top:2vh;
    font-size:3vh;
  }
  `;
