import React, { useState, useEffect } from 'react';
import upArrow from '@assets/up-arrow.svg';
import { Container } from './style';
import { useRefs, Section } from '@contexts/RefsContext';

export default function index() {
  const [show, setShow] = useState<boolean>(false);
  const { allRefs } = useRefs();

  const handleToTop = (section: Section) => {
    allRefs.current[section].scrollIntoView();
  };

  const renderArrow = () => {
    if (show) {
      return <Container onClick={() => handleToTop('nav')} src={upArrow} />;
    }
    return null;
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY !== 0) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    window.removeEventListener('scroll', () => {
      setShow(false);
    });
  }, []);
  return renderArrow();
}
