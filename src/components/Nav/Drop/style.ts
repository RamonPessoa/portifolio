import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 10px;
  :hover {
    cursor: pointer;
  }
  .menu-bar {
    height: 4px;
    width: 40px;
    background: #f9f9f9;
  }
  @media (min-width: 586px) {
    display: none;
  }
`;
