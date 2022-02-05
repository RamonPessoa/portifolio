import styled from 'styled-components';
import Section from '@components/Section';

export const Container = styled(Section)`
  .content {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(320px, 350px));
    justify-items: center;
    justify-content: center;
    gap: 45px;
  }
`;
