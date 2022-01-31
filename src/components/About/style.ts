import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1160px;
  margin: auto;
  gap: 30px;
  align-items: center;
  padding-top: 160px;
  h2 {
    font-size: 3.2rem;
  }
  p {
    width: 100%;
    max-width: 800px;
    text-align: center;
    color: #828282;
  }
  .contacts {
    padding-top: 55px;
    width: 100%;
    justify-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 0.6fr));
    gap: 40px;
  }
`;
