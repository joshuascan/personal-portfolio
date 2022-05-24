import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
${normalize};

@font-face {
  font-family: 'HelveticaLTStd-Blk';
  src: url('/fonts/HelveticaLTStd-Blk.ttf') format('truetype');
  font-style: normal;
  font-weight: bolder;
  font-display: swap;
}

@font-face {
  font-family: 'HelveticaLTStd-Bold';
  src: url('/fonts/HelveticaLTStd-Bold.ttf') format('truetype');
  font-style: normal;
  font-weight: bold;
  font-display: swap;
}

@font-face {
  font-family: 'HelveticaLTStd-Light';
  src: url('/fonts/HelveticaLTStd-Light.ttf') format('truetype');
  font-style: normal;
  font-weight: lighter;
  font-display: swap;
}

@font-face {
  font-family: 'HelveticaLTStd-LightObl';
  src: url('/fonts/HelveticaLTStd-LightObl.ttf') format('truetype');
  font-style: oblique;
  font-weight: lighter;
  font-display: swap;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    background-color: ${(props) => props.theme.colors.background};
  }

  body {
    font-size: 1.6rem;
    letter-spacing: 0.17rem;
    color: ${(props) => props.theme.colors.primary};
    cursor: default;
  }

  p {
    color: ${(props) => props.theme.colors.secondary}
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  input, textarea {
    border: none;
    caret-color: ${(props) => props.theme.colors.secondary};
    background: rgb(26, 26, 26);
    color: ${(props) => props.theme.colors.secondary};
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
  }

  button {
    border: none;
  }
`;

export default GlobalStyles;
