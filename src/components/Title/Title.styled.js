import styled from 'styled-components';

export const StyledTitle = styled.h1`
  margin-bottom: 24px;

  font-family: 'Right Grotesk Compact Black';
  font-size: 40px;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;

    font-size: 80px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 80px;

    font-size: 160px;
  }
`;
