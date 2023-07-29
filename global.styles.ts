import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter-Bold', Helvetica;
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}

a:-webkit-any-link {
  text-decoration: none;
  color: white;
  cursor: pointer;
}
`;
