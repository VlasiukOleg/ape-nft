import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  max-width: 480px;
  padding: 8px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1440px;
  }
`;
