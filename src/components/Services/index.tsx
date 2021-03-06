import React from 'react';
import { Container } from './style';
import Service from './Service';
import code from '@assets/code.svg';
import smartphone from '@assets/smartphone.svg';
import { useRefs } from '@contexts/RefsContext';

export default function index() {
  const { buildRefs } = useRefs();

  return (
    <Container ref={buildRefs('services')} id='services'>
      <h2>Serviços</h2>
      <div className='content'>
        <Service img={code} info1='Criação' info2='de sites' />
        <Service img={smartphone} info1='Sites' info2='responsivos' />
      </div>
    </Container>
  );
}
