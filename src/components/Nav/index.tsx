import React from 'react';
import { Container } from './style';
import Drop from './Drop';
import Menu from './Menu';
import MenuContext from '@contexts/MenuContext';

export default function index() {
  return (
    <MenuContext>
      <Container>
        <h2>Portifólio</h2>
        <Menu />
        <Drop />
      </Container>
    </MenuContext>
  );
}
