import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

body {
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.font};
  line-height: 1.3;
}

  a {
    color: ${theme.colors.font};
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: unset;
    cursor: pointer;
    color: ${theme.colors.font};
  }

  section {
    padding: 100px 0;
  }

  h3 {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 1px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
  }

  section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
  }

  section:nth-of-type(even) {
    background-color: ${theme.colors.secondaryBg};
  }
`;
