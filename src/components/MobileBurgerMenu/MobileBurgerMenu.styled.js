import styled from 'styled-components';

export const Logo = styled.svg`
  width: 32px;
  height: 24px;

  fill: ${props => props.theme.colors.primaryText};
`;

export const MobileBurgerMenuWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: ${props => props.theme.colors.primaryBg};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuInnerWrap = styled.div`
  position: relative;
  padding: 8px;
`;

export const SiteNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SiteNavLinkList = styled.ul`
  position: absolute;
  top: 100%;
  left: 50%;

  text-align: center;

  transform: translate(-50%, 30%);
`;

export const SiteNavLinkItem = styled.li`
  font-size: 24px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
