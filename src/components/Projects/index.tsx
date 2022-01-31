import React from 'react';
import { Container } from './style';
import Project from './Project';
import portifolio from '../../assets/portifolio.png';

export default function Projects() {
  return (
    <Container id='projects'>
      <h2>Projetos</h2>
      <div className='projects'>
        <Project
          img={portifolio}
          title='Portifólio'
          description='Tecnologias: HTML, CSS, TypeScript, React'
        />
        <Project
          img={portifolio}
          title='Portifólio'
          description='Tecnologias: HTML, CSS, TypeScript, React'
        />
      </div>
    </Container>
  );
}
