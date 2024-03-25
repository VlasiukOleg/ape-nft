import styled from 'styled-components';

export const Container = styled.div`
  /* position: relative; */

  max-width: 480px;
  padding: 54px 8px 24px 8px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;

    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;
