import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1160px;
  margin: auto;
  padding-top: 130px;

  .content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    h1 {
      font-size: 4rem;
      max-width: 328px;
    }
    p {
      color: ${colors.textGrey};
      font-size: 2rem;
    }
    .buttons {
      display: flex;
      gap: 10px;

      a {
        max-width: 150px;
        width: 100%;
        text-decoration: none;
      }

      .button {
        padding: 15px;
        background: ${colors.secondaryBackground};
        position: relative;
        border: 1px solid #333333;
        max-width: 150px;
        width: 100%;
        transition: 0.2s;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${colors.primaryBackground};
        font-weight: bold;

        span {
          z-index: 2;
          transition: 0.5s;
        }

        :hover > span {
          color: ${colors.whiter};
        }

        :hover {
          cursor: pointer;
          border-radius: 0;
        }

        :hover > .circleD,
        :hover > .circleC {
          width: 200%;
        }
        .circleD,
        .circleC {
          position: absolute;
          z-index: 1;
          width: 0;
          height: 150%;
          border-radius: 50%;
          background: ${colors.primaryBackground};
          transition: 0.5s;
        }

        .circleC {
          background: ${colors.whiter};
        }
      }
      .contato {
        background: ${colors.primaryBackground};
        color: ${colors.whiter};

        :hover > span {
          color: ${colors.primaryBackground};
        }
      }
    }
  }
  @media (max-width: 697px) {
    flex-direction: column;
    gap: 60px;
  }
`;
