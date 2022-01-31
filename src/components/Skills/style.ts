import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1160px;
  margin: auto;
  gap: 30px;
  align-items: center;
  padding: 127px 0 70px 0;

  h2 {
    font-size: 3.2rem;
  }

  .skills {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 15px));
    justify-content: center;
    justify-items: center;
    gap: 51px;
    width: 100%;
  }
`;
