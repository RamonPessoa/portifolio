import React, { useEffect } from 'react';
import { HorizontalContainer, VerticalContainer } from './style';
import { useMenu } from '../../../contexts/MenuContext';

export default function index() {
  const { menuDesign, handleClick } = useMenu();

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    menuDesign === 2
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [menuDesign]);

  const element = (
    <>
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
    </>
  );

  const renderMenu = () => {
    if (menuDesign === 1) {
      return <HorizontalContainer>{element}</HorizontalContainer>;
    } else {
      return <VerticalContainer>{element}</VerticalContainer>;
    }
  };

  return renderMenu();
}
