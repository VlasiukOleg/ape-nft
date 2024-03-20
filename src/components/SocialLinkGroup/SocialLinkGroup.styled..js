import styled from 'styled-components';

export const SocialLinkList = styled.ul`
  position: absolute;
  top: 64px;
  right: 8px;

  @media screen and (min-width: 768px) {
    right: 12px;
  }

  @media screen and (min-width: 1280px) {
    top: 120px;
    right: 16px;
  }
`;

export const SocialLinkItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const SvgIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${props => (props.fill ? props.fill : 'current')};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
