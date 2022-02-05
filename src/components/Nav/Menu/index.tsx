import React, { useEffect } from 'react';
import { Container } from './style';
import { useMenu } from '@contexts/MenuContext';
import { useRefs, Section } from '@contexts/RefsContext';

export default function index() {
  const { menuDesign, handleClick } = useMenu();
  const { allRefs } = useRefs();

  const handleScroll = (section: Section) => {
    allRefs.current[section].scrollIntoView();
  };

  useEffect(() => {
    menuDesign === 2
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [menuDesign]);
  return (
    <Container>
      <ul className={menuDesign === 1 ? '' : 'on'}>
        <li>
          <a
            onClick={(e) => {
              handleClick(e);
              handleScroll('about');
            }}
          >
            Sobre mim
          </a>
          <div className='menu-underline'></div>
        </li>
        <li>
          <a
            onClick={(e) => {
              handleClick(e);
              handleScroll('projects');
            }}
          >
            Projetos
          </a>
          <div className='menu-underline'></div>
        </li>
        <li>
          <a
            onClick={(e) => {
              handleClick(e);
              handleScroll('services');
            }}
          >
            Serviços
          </a>
          <div className='menu-underline'></div>
        </li>
        <li>
          <a
            onClick={(e) => {
              handleClick(e);
              handleScroll('skills');
            }}
          >
            Minhas Skills
          </a>
          <div className='menu-underline'></div>
        </li>
      </ul>
    </Container>
  );
}
