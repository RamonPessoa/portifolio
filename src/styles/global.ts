import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: DM Sans;
    src: url('../assets/fonts/DMSans-Regular.ttf') format('ttf');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background: #171717;
    color: #F9F9F9;
    font-family: 'DM Sans', sans-serif;
    font-size: 1.6rem;
  }

  .to-top {
    position: absolute;
  }
`;
