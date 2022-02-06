import styled from 'styled-components';
import { colors } from '@styles/variables';

export const Container = styled.div`
  .icon {
    width: 62px;
    height: 62px;
    background: ${colors.tertiaryBackground};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    :hover {
      transform: scale(1.2);
    }

    img {
      max-height: 40px;
    }
  }
  .vertical-contact {
    text-align: center;
    display: grid;
    justify-items: center;
    gap: 14px;

    h3 {
      padding: 5px;
      font-size: 1.8rem;
    }
  }

  .horizontal-contact {
    display: flex;
    align-items: center;
    gap: 20px;
    p {
      color: ${colors.textGrey};
    }
  }

  @media (max-width: 400px) {
    .horizontal-contact {
      transform: scale(0.83);
    }
  }
`;
