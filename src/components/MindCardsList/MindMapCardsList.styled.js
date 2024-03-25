import styled from 'styled-components';

export const CardList = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(284px, 1fr));
  display: none;

  @media screen and (min-width: 768px) {
    display: grid;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(504px, 1fr));
  }
`;

export const CardItem = styled.li``;
