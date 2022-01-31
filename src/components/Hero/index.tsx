import React from 'react';
import { Container } from './style';
import logo from '../../assets/logo.svg';

export default function Hero() {
  return (
    <Container>
      <div className="content">
        <h1>Olá, eu sou o Ramon Pessoa</h1>
        <p>Desenvolvedor Front-End</p>
        <div className="buttons">
          <button className="button download">
            <div className="circleD"></div>
            <span>Download CV</span>
          </button>
          <button className="button contato">
            <div className="circleC"></div>
            <span>Entrar em Contato</span>
          </button>
        </div>
      </div>
      <img src={logo} />
    </Container>
  );
}
