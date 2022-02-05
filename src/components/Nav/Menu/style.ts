import styled from 'styled-components';
import { colors } from '@styles/variables';

export const Container = styled.div`
  ul {
    list-style: none;
    display: flex;
    li {
      display: flex;
      flex-direction: column;
      :hover {
        cursor: pointer;
      }

      a {
        text-decoration: none;
        color: ${colors.whiter};
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
        background: ${colors.secondaryBackground};
      }
    }
  }
  @media screen and (max-width: 585px) {
    ul {
      display: none;
    }

    .on {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 300;
      list-style: none;
      width: 100vw;
      height: 100vh;
      position: absolute;
      left: 0;
      top: 0;
      background: ${colors.tertiaryBackground};
      animation-name: showMenu;
      animation-duration: 0.7s;
      @keyframes showMenu {
        from {
          opacity: 0;
          height: 0;
        }
        to {
          opacity: 1;
          height: 100vh;
        }
      }
    }
  }
`;
