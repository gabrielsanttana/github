import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, .root {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  body, input, button {
    -webkit-font-smoothing: antialised !important;
  }
`;
