import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1160px;
  margin: auto;
  align-items: center;
  gap: 30px;
  padding-top: 127px;
  padding-bottom: 127px;
  h2 {
    font-size: 3.2rem;
  }
  .projects {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(310px, 350px));
    gap: 45px;
    justify-items: center;
    justify-content: center;
  }
`;
