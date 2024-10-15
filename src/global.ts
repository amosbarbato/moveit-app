import { createGlobalStyle } from "styled-components";

export const color = {
  dark: '#555555',
  gray: '#C2C2C2',
  darkPurple: '#1E2772',
  purple: '#7001FD',
  main: '#eee',
  clean: '#F1F3F6',
  alert: '#FF5F5F'
}

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }
  body {
    background: ${color.main};
  }
  .medium {
    font-weight: 500;
  }
  .semibold {
    font-weight: 600;
  }
  .bold {
    font-weight: 700;
  }

  .off-label { display: none; }
  .on-label { display: block }
`

export default Global
