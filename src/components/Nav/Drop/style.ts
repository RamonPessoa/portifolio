import styled from 'styled-components';
import { colors } from '@styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 10px;
  z-index: 400;
  :hover {
    cursor: pointer;
  }
  .menu-bar {
    height: 4px;
    width: 40px;
    background: ${colors.whiter};
  }
  @media (min-width: 586px) {
    display: none;
  }
`;
