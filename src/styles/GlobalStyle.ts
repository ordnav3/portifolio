import styled, { createGlobalStyle } from 'styled-components';
import * as V from './variables';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: "Karla", sans-serif;
  }

  body {
    min-height: 100vh;
    background-color: ${V.color1};
    padding: 40px 0 40px 300px;

    @media (max-width: 768px) {
    padding: 0;
  }
  }
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export default GlobalStyle;
