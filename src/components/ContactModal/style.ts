import styled from 'styled-components';
import { colors } from '@styles/variables';

export const Container = styled.div`
  @keyframes modalAnimation {
    from {
      opacity: 0;
      transform: translateY(-100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 200;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  .modal {
    animation-name: modalAnimation;
    animation-duration: 1s;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 50px;
    border-radius: 10px;
    align-items: center;
    border: 7px solid ${colors.tertiaryBackground};
    gap: 30px;
    background: #171717;
    width: 90%;
    max-width: 508px;

    .x-button {
      display: flex;
      justify-content: center;
      border: 5px solid ${colors.tertiaryBackground};
      align-items: center;
      position: absolute;
      top: -25px;
      right: -25px;
      width: 60px;
      height: 60px;
      background: ${colors.primaryBackground};
      border-radius: 50%;
      :hover {
        cursor: pointer;
      }

      div {
        height: 4px;
        width: 25px;
        border-radius: 20px;
        background: ${colors.whiter};
      }
      .x-one {
        position: absolute;
        transform: rotate(45deg);
      }
      .x-two {
        position: absolute;
        transform: rotate(-45deg);
      }
    }

    .contacts-list {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }
`;
