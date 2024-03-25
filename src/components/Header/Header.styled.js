import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: relative;

  padding: 8px 8px 0px;

  background-color: ${props => props.theme.colors.accent};
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  outline: 1px solid tomato;

  @media screen and (min-width: 768px) {
    padding-left: 12px;
    padding-right: 12px;
  }

  @media screen and (min-width: 1280px) {
    padding: 24px 16px 0px;
  }
`;

export const SiteNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.svg`
  width: 32px;
  height: 24px;

  fill: ${props => props.theme.colors.secondary};

  cursor: pointer;

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.light};
  }

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 72px;
    height: 50px;
  }
`;
