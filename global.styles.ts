import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter-Bold', Helvetica;
  background-color: var(--white, #FFF);
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  color: #201B21;
}

* {
  box-sizing: border-box;
}

a:-webkit-any-link {
  text-decoration: none;
  color: white;
  cursor: pointer;
}

img {
  border-radius: 1.173rem;
}
`;
