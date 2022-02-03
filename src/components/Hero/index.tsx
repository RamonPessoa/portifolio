import React from 'react';
import { Container } from './style';
import logo from '@assets/logo.svg';
import { useModal } from '@contexts/ModalContext';
import ContactModal from '@components/ContactModal';

export default function Hero() {
  const { showModal, handleClick } = useModal();
  return (
    <>
      <Container>
        <div className='content'>
          <h1>Olá, eu sou o Ramon Pessoa</h1>
          <p>Desenvolvedor Front-End</p>
          <div className='buttons'>
            <a
              href='https://docs.google.com/document/d/1B8Ru4jedRhcaP3C1eWX9_iEQUH47qnDnGt5lSLetcYU/edit?usp=sharing'
              target='blank'
            >
              <button className='button download'>
                <div className='circleD'></div>
                <span>Ver Currículo</span>
              </button>
            </a>
            <button className='button contato show-hide' onClick={handleClick}>
              <div className='circleC show-hide'></div>
              <span className='show-hide'>Entrar em Contato</span>
            </button>
          </div>
        </div>
        <img src={logo} />
      </Container>
      {showModal && <ContactModal />}
    </>
  );
}
