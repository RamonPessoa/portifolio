import React from 'react';
import { Container } from './style';
import { useMenu } from '@contexts/MenuContext';

export default function Drop() {
  const { handleClick } = useMenu();

  return (
    <Container onClick={handleClick}>
      <div className='menu-bar bar1'></div>
      <div className='menu-bar bar2'></div>
      <div className='menu-bar bar3'></div>
    </Container>
  );
}
