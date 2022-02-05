import React from 'react';
import { Container } from './style';
import ContactButtons from '@components/ContactButtons';
import { useRefs } from '@contexts/RefsContext';
import {
  github,
  email,
  phone,
  smile1,
  linkedin,
} from '@imports/contactButtons';

export default function index() {
  const { buildRefs } = useRefs();

  return (
    <Container ref={buildRefs('about')}>
      <h2>Sobre</h2>
      <p>
        Desenvolvedor Front-End com conhecimentos em: HTML, CSS, JavaScript,
        TypeScript, React, Styled-components, ESLint, Prettier. Sou apaixonado
        por tecnologia desde sempre, e sempre fui muito curioso, então costumo
        aprender bastante na base da tentativa e erro
      </p>
      <div className='contacts'>
        <ContactButtons
          class='vertical-contact'
          img={smile1}
          label='Meu Nome'
          info='Ramon Pessoa'
        />
        <ContactButtons
          class='vertical-contact'
          img={email}
          label='E-mail'
          info='reimund.programmer@gmail.com'
          link='mailto:reimund.programmer@gmail.com'
        />
        <ContactButtons
          class='vertical-contact'
          img={linkedin}
          label='Linkedin'
          info='Ramon Pessoa'
          link='https://www.linkedin.com/in/ramonspessoa/'
        />
        <ContactButtons
          class='vertical-contact'
          img={github}
          label='GitHub'
          info='RamonPessoa'
          link='https://github.com/RamonPessoa'
        />
        <ContactButtons
          class='vertical-contact'
          img={phone}
          label='Telefone'
          info='(21)99624-5808'
          link='tel:+5521996245808'
        />
      </div>
    </Container>
  );
}
