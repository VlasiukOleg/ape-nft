import styled from 'styled-components';

export const MenuBtnStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${({ $padding }) => $padding || '16px'};

  font-family: ${props => (props.font ? props.font : 'inherit')};
  font-size: ${props => (props.fontSize ? props.fontSize : '12px')};
  font-weight: 600;

  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.secondaryBg};

  background-color: ${({ colorbg }) =>
    colorbg ? colorbg : 'rgba(30, 30, 30, 0.1)'};

  border-radius: 8px;
  border: none;
  outline: none;

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.light};
    fill: ${({ theme }) => theme.colors.light};
  }

  @media screen and (min-width: 768px) {
    padding: ${({ $paddingTablet }) => $paddingTablet || '12px'};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${props => (props.fsd ? props.fsd : '16px')};

    padding: ${({ $paddingDesktop }) => $paddingDesktop || '28px'};
  }
`;
