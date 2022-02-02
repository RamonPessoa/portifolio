import styled from 'styled-components';

export const HorizontalContainer = styled.ul`
  list-style: none;
  display: flex;
  li {
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      color: #f9f9f9;
      padding: 10px;
    }
    .menu-underline {
      transition: 0.3s;
      height: 2px;
      width: 0;
      align-self: center;
    }
    :hover > .menu-underline {
      width: 100%;
      background: #00df5e;
    }
  }
  @media (max-width: 585px) {
    display: none;
  }
`;

export const VerticalContainer = styled.ul`
  @keyframes showMenu {
    from {
      opacity: 0;
      height: 0vh;
    }
    to {
      opacity: 1;
      height: 100vh;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 300;
  list-style: none;
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: #212121;
  animation-name: showMenu;
  animation-duration: 0.8s;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      text-decoration: none;
      color: #f9f9f9;
      padding: 30px;
      font-size: 2rem;
    }
    .menu-underline {
      transition: 0.3s;
      height: 2px;
      width: 0;
      align-self: center;
    }
    :hover > .menu-underline {
      width: 100%;
      background: #00df5e;
    }
  }
`;
