import React from 'react';
import { Container } from './style';

type myProps = {
  img: string;
  label: string;
  info: string;
  class?: string;
  link?: string;
};

export default function Contacts(props: myProps) {
  return (
    <Container>
      <div className={props.class}>
        <a href={props.link} className='icon' target='blank'>
          <img src={props.img} />
        </a>
        <div>
          <h3>{props.label}</h3>
          <p>{props.info}</p>
        </div>
      </div>
    </Container>
  );
}
