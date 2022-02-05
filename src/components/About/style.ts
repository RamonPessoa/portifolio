import styled from 'styled-components';
import Section from '@components/Section';
import { colors } from '@styles/variables';

export const Container = styled(Section)`
  p {
    width: 100%;
    max-width: 800px;
    text-align: center;
    color: ${colors.textGrey};
  }
  .contacts {
    padding-top: 55px;
    width: 100%;
    justify-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
  }
`;
