import React from 'react';
import { Container } from './style';
import Drop from './Drop';

export default function index() {
  return (
    <Container>
      <h2>Portifólio</h2>
      <ul>
        <li>
          <a href='#about'>Sobre mim</a>
          <div className='menu-underline'></div>
        </li>
        <li>
          <a href='#projects'>Projetos</a>
          <div className='menu-underline'></div>
        </li>
        <li>
          <a href='#services'>Serviços</a>
          <div className='menu-underline'></div>
        </li>
        <li>
          <a href='#skills'>Minhas Skills</a>
          <div className='menu-underline'></div>
        </li>
      </ul>
      <Drop />
    </Container>
  );
}
