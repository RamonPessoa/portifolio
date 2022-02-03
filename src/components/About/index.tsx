import React from 'react';
import { Container } from './style';
import ContactButtons from '@components/ContactButtons';
import smile from '@assets/smile.svg';
import email from '@assets/email.svg';
import phone from '@assets/phone.svg';

export default function index() {
  return (
    <Container id='about'>
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
          img={smile}
          label='Meu Nome'
          info='Ramon Pessoa'
        />
        <ContactButtons
          class='vertical-contact'
          img={email}
          label='E-mail'
          info='reimund.programmer@gmail.com'
        />
        <ContactButtons
          class='vertical-contact'
          img={phone}
          label='Telefone'
          info='(21)xxxx-xxxx'
        />
      </div>
    </Container>
  );
}
