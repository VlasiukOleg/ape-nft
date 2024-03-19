import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: relative;

  padding: 8px 8px 0px;

  background-color: ${props => props.theme.colors.accent};
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  outline: 1px solid tomato;
`;

export const SiteNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.svg`
  width: 32px;
  height: 24px;
`;
