import React from 'react';
import { Container } from './style';
import ContactButtons from '@components/ContactButtons';
import { useModal } from '@contexts/ModalContext';
import phone from '@assets/phone.svg';
import email from '@assets/email.svg';

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
            img={phone}
            label='Telefone'
            info='(21)xxxx-xxxx'
          />
          <ContactButtons
            class='horizontal-contact'
            img={email}
            label='E-mail'
            info='email@email.com'
          />
        </div>
      </div>
    </Container>
  );
}
