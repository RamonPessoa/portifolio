import React from 'react';
import { Container } from './style';
type myProps = {
  img: string;
  title: string;
  description: string;
};

export default function Project(props: myProps) {
  return (
    <Container>
      <div className='content'>
        <img src={props.img} />
        <div className='info'>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </Container>
  );
}
