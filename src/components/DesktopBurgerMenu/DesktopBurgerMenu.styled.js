import styled from 'styled-components';

export const DesktopBurgerMenuList = styled.ul`
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
