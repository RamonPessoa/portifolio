import React from 'react';
import { Container } from './style';
type myProps = {
  img: string;
  title: string;
  description: string;
  link: string;
};

export default function Project(props: myProps) {
  return (
    <Container>
      <a href={props.link} target='blank'>
        <div className='content'>
          <img src={props.img} />
          <div className='info'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </a>
    </Container>
  );
}
