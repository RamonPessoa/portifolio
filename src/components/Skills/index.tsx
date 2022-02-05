import React from 'react';
import Skill from './Skill';
import { Container } from './style';
import { html, css, js, ts, react } from '@imports/skills';
import { useRefs } from '@contexts/RefsContext';

export default function Skills() {
  const { buildRefs } = useRefs();

  return (
    <Container ref={buildRefs('skills')} id='skills'>
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
