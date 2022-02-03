import styled from 'styled-components';
import Section from '@components/Section';

export const Container = styled(Section)`
  .projects {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(310px, 350px));
    gap: 45px;
    justify-items: center;
    justify-content: center;
  }
`;
