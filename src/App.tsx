import React from 'react';
import { GlobalStyle } from './styles/global';
import {
  Nav,
  Hero,
  About,
  Projects,
  Services,
  Skills,
  Totop,
  GlobalContext,
} from '@imports/app';

function App() {
  return (
    <GlobalContext>
      <GlobalStyle />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Totop />
    </GlobalContext>
  );
}

export default App;
