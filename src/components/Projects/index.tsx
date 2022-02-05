import React from 'react';
import { Container } from './style';
import Project from './Project';
import { calculadora, cadastro, compras, portifolio } from '@imports/projects';
import { useRefs } from '@contexts/RefsContext';

export default function Projects() {
  const { buildRefs } = useRefs();
  return (
    <Container ref={buildRefs('projects')} id='projects'>
      <h2>Projetos</h2>
      <div className='projects'>
        <Project
          img={portifolio}
          title='Portifólio'
          description='Tecnologias: React, TypeScript, styled-components'
          link='https://github.com/RamonPessoa/portifolio'
        />
        <Project
          img={calculadora}
          title='Calculadora'
          description='Tecnologias: HTML, CSS, JavaScript'
          link='https://github.com/RamonPessoa/calculadora'
        />
        <Project
          img={cadastro}
          title='Tela de cadastro'
          description='Tecnologias: React, TypeScript, styled-components'
          link='https://github.com/RamonPessoa/TelaDeCadastro'
        />
        <Project
          img={compras}
          title='Lista de compras'
          description='Tecnologias: React, JavaScript, Sass'
          link='https://github.com/RamonPessoa/listaDeCompras'
        />
      </div>
    </Container>
  );
}
