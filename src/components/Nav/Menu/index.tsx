import React, { useEffect } from 'react';
import { Container } from './style';
import { useMenu } from '@contexts/MenuContext';
import { useRefs, Section } from '@contexts/RefsContext';

export default function index() {
  const { menuDesign, handleClick, setMenuDesign } = useMenu();
  const { allRefs } = useRefs();

  const handleScroll = (section: Section) => {
    allRefs.current[section].scrollIntoView();
  };

  useEffect(() => {
    menuDesign === 2
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [menuDesign]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth > 587 ? setMenuDesign?.(1) : null;
    });

    return window.removeEventListener('resize', () => {});
  }, []);

  return (
    <Container>
      <ul className={menuDesign === 1 ? '' : 'on'}>
        <li>
          <a
            onClick={() => {
              handleClick();
              handleScroll('about');
            }}
          >
            Sobre mim
          </a>
          <div className='menu-underline'></div>
        </li>
        <li>
          <a
            onClick={() => {
              handleClick();
              handleScroll('projects');
            }}
          >
            Projetos
          </a>
          <div className='menu-underline'></div>
        </li>
        <li>
          <a
            onClick={() => {
              handleClick();
              handleScroll('services');
            }}
          >
            Serviços
          </a>
          <div className='menu-underline'></div>
        </li>
        <li>
          <a
            onClick={() => {
              handleClick();
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
