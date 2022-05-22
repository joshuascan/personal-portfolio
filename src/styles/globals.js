import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
${normalize};

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
    font-family: ${(props) => props.theme.fonts.main};
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
