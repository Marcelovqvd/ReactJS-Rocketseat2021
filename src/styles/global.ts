import { createGlobalStyle } from 'styled-components';

export const GLobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 16px "Helvetica Neue", Arial, sans-serif;
    color: #121214;

    h1 {
      font-size: 80px;
    }
  }
`