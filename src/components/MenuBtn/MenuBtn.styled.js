import styled from 'styled-components';

export const MenuBtnStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 48px;
  height: 48px; */
  padding: ${props => (props.padding ? props.padding : '16px 9px')};

  font-family: ${props => (props.font ? props.font : 'inherit')};
  font-size: ${props => (props.fontSize ? props.fontSize : '12px')};
  font-weight: 600;

  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.secondaryBg};

  background-color: ${({ theme, colorbg }) =>
    colorbg ? colorbg : 'rgba(30, 30, 30, 0.1)'};

  border-radius: 8px;
  border: none;
  outline: none;

  cursor: pointer;
`;
