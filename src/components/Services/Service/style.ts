import styled from 'styled-components';
import { colors } from '@styles/variables';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 350px;
  width: 100%;
  padding: 30px;
  background: ${colors.tertiaryBackground};
  font-size: 3.2rem;
  color: ${colors.textGrey};
  border-bottom: 5px solid ${colors.secondaryBackground};

  img {
    width: 58px;
    height: 58px;
  }
`;
