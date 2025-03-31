import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Nav from './components/Nav';
import Content from './components/Content';

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Content />
    </>
  );
}

export default App;
