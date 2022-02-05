import React from 'react';
import { Container } from './style';
import Drop from './Drop';
import Menu from './Menu';
import { useRefs } from '@contexts/RefsContext';

export default function index() {
  const { buildRefs } = useRefs();

  return (
    <Container ref={buildRefs('nav')}>
      <h2>Portfolio</h2>
      <Menu />
      <Drop />
    </Container>
  );
}
