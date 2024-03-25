import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Right Grotesk Compact Black';
  font-size: 44px;
  line-height: 1;

  color: ${props => props.theme.colors.secondary};

  @media screen and (min-width: 768px) {
    position: relative;
    z-index: 1;
    font-size: 92px;

    text-align: left;

    word-spacing: 164px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 164px;

    word-spacing: 254px;
  }
`;
