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
  ModalContext,
  MenuContext,
} from '@imports/app';

function App() {
  return (
    <ModalContext>
      <MenuContext>
        <GlobalStyle />
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Totop />
      </MenuContext>
    </ModalContext>
  );
}

export default App;
