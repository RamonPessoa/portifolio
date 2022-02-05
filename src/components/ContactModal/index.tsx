import React from 'react';
import { Container } from './style';
import ContactButtons from '@components/ContactButtons';
import { useModal } from '@contexts/ModalContext';
import {
  github,
  email,
  phone,
  smile1,
  linkedin,
} from '@imports/contactButtons';

export default function index() {
  const { handleClick } = useModal();
  return (
    <Container className='show-hide' onClick={handleClick}>
      <div className='modal'>
        <div className='x-button show-hide' onClick={handleClick}>
          <div className='x-one show-hide'></div>
          <div className='x-two show-hide'></div>
        </div>
        <h2>Contatos</h2>
        <div className='contacts-list'>
          <ContactButtons
            class='horizontal-contact'
            img={smile1}
            label='Meu Nome'
            info='Ramon Pessoa'
          />
          <ContactButtons
            class='horizontal-contact'
            img={email}
            label='E-mail'
            info='reimund.programmer@gmail.com'
            link='mailto:reimund.programmer@gmail.com'
          />
          <ContactButtons
            class='horizontal-contact'
            img={linkedin}
            label='Linkedin'
            info='Ramon Pessoa'
            link='https://www.linkedin.com/in/ramonspessoa/'
          />
          <ContactButtons
            class='horizontal-contact'
            img={github}
            label='GitHub'
            info='RamonPessoa'
            link='https://github.com/RamonPessoa'
          />
          <ContactButtons
            class='horizontal-contact'
            img={phone}
            label='Telefone'
            info='(21)99624-5808'
            link='tel:+5521996245808'
          />
        </div>
      </div>
    </Container>
  );
}
