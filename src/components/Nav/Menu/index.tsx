import React, { useEffect } from 'react';
import { Container } from './style';
import { useMenu } from '@contexts/MenuContext';

export default function index() {
  const { menuDesign, handleClick } = useMenu();

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    menuDesign === 2
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [menuDesign]);
  return (
    <Container>
      <ul className={menuDesign === 1 ? '' : 'on'}>
        <li>
          <a href='#about' onClick={handleClick}>
            Sobre mim
          </a>
          <div className='menu-underline'></div>
        </li>
        <li>
          <a href='#projects' onClick={handleClick}>
            Projetos
          </a>
          <div className='menu-underline'></div>
        </li>
        <li>
          <a href='#services' onClick={handleClick}>
            Serviços
          </a>
          <div className='menu-underline'></div>
        </li>
        <li>
          <a href='#skills' onClick={handleClick}>
            Minhas Skills
          </a>
          <div className='menu-underline'></div>
        </li>
      </ul>
    </Container>
  );
}
