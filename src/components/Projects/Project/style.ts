import styled from 'styled-components';
import { colors } from '@styles/variables';
export const Container = styled.div`
  max-width: 350px;
  width: 100%;
  min-height: 240px;
  background: ${colors.tertiaryBackground};
  transition: 0.3s;
  :hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 10px 10px 20px -10px black;
  }
  a {
    text-decoration: none;
  }
  .content {
    padding: 20px 25px;
    display: flex;
    flex-direction: column;
    gap: 23px;
    img {
      max-width: 300px;
      max-height: 130px;
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 6px;
      h3 {
        font-size: 1.8rem;
        color: ${colors.whiter};
      }

      p {
        font-size: 1.4rem;
        color: ${colors.textGrey};
      }
    }
  }
`;
