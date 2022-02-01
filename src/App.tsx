import React from 'react';
import { GlobalStyle } from './styles/global';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import Totop from './components/ToTop';
import ModalContext from './contexts/ModalContext';

function App() {
  return (
    <ModalContext>
      <GlobalStyle />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Totop />
    </ModalContext>
  );
}

export default App;
