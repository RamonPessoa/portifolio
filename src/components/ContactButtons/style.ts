import styled from 'styled-components';

export const Container = styled.div`
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
  }
`;
