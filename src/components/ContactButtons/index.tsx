import React from 'react';
import { Container } from './style';

type myProps = {
  img: string;
  label: string;
  info: string;
  class?: string;
};

export default function Contacts(props: myProps) {
  return (
    <Container>
      <div className={props.class}>
        <img src={props.img} />
        <div>
          <h3>{props.label}</h3>
          <p>{props.info}</p>
        </div>
      </div>
    </Container>
  );
}
