import React from 'react';
import { Container } from './style';

type myProps = {
  img: string;
  info1: string;
  info2: string;
};

export default function index(props: myProps) {
  return (
    <Container>
      <img src={props.img} />
      <div className='info'>
        <h3>{props.info1}</h3>
        <h3>{props.info2}</h3>
      </div>
    </Container>
  );
}
