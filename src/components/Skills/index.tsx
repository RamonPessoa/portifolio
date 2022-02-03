import React from 'react';
import Skill from './Skill';
import { Container } from './style';
import { html, css, js, ts, react } from '@imports/skills';

export default function Skills() {
  return (
    <Container id='skills'>
      <h2>Minhas Skills</h2>
      <div className='skills'>
        <Skill img={html} />
        <Skill img={css} />
        <Skill img={js} />
        <Skill img={ts} />
        <Skill img={react} />
      </div>
    </Container>
  );
}
