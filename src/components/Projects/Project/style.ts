import styled from 'styled-components';

export const Container = styled.div`
  max-width: 350px;
  min-height: 240px;
  background: #212121;
  .content {
    padding: 20px 25px;
    display: flex;
    flex-direction: column;
    gap: 23px;
    img {
      max-width: 300px;
      max-height: 130px;
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 6px;
      h3 {
        font-size: 1.8rem;
      }

      p {
        font-size: 1.4rem;
      }
    }
  }
`;
