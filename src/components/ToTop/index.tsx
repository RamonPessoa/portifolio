import React, { useState, useEffect } from 'react';
import upArrow from '../../assets/up-arrow.svg';
import { Container } from './style';

export default function index() {
  const [show, setShow] = useState<boolean>(false);

  const handleToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  const renderArrow = () => {
    if (show) {
      return <Container onClick={handleToTop} src={upArrow} />;
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
