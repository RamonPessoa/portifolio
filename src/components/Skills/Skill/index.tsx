import React from 'react';
import { Container } from './style';

type myProps = {
  img: string;
};

export default function Skill(props: myProps) {
  return (
    <Container>
      <img src={props.img} />
    </Container>
  );
}
