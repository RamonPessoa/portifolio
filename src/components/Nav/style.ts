import styled from 'styled-components';

export const Container = styled.nav`
  width: 90%;
  max-width: 1160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  margin-top: 30px;

  ul {
    list-style: none;
    display: flex;
    li {
      display: inline;
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
  }
  @media (max-width: 585px) {
    ul {
      display: none;
    }
  }
`;
