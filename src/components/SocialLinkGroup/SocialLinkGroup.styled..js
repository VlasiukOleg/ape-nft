import styled from 'styled-components';

export const SocialLinkList = styled.ul`
  position: absolute;
  top: 64px;
  right: 8px;
`;

export const SocialLinkItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const SvgIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${props => (props.fill ? props.fill : 'current')};
`;
