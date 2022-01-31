import React from 'react';
import Skill from './Skill';
import { Container } from './style';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import js from '../../assets/js.svg';
import ts from '../../assets/ts.svg';
import react from '../../assets/react.svg';

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
