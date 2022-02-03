import React from 'react';
import { Container } from './style';
import Project from './Project';
import { calculadora, cadastro, compras, portifolio } from '@imports/projects';

export default function Projects() {
  return (
    <Container id='projects'>
      <h2>Projetos</h2>
      <div className='projects'>
        <Project
          img={portifolio}
          title='Portifólio'
          description='Tecnologias: React, TypeScript, styled-components'
        />
        <Project
          img={calculadora}
          title='Calculadora'
          description='Tecnologias: HTML, CSS, JavaScript'
        />
        <Project
          img={cadastro}
          title='Tela de cadastro'
          description='Tecnologias: React, TypeScript, styled-components'
        />
        <Project
          img={compras}
          title='Lista de compras'
          description='Tecnologias: React, JavaScript, Sass'
        />
      </div>
    </Container>
  );
}
