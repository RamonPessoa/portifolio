import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 90%;
  margin: auto;
  max-width: 1160px;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  h2 {
    font-size: 3.2rem;
  }

  .content {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(320px, 350px));
    justify-items: center;
    justify-content: center;
    gap: 45px;
  }
`;
