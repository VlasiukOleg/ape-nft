import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  padding: 12px 74px;

  font-family: 'Right Grotesk Compact Black', sans-serif;
  line-height: 1.2;
  font-size: 16px;
  font-weight: 600;

  background-color: ${({ theme, $bgColor }) =>
    theme.colors[$bgColor] || theme.colors.primaryTransparent};
  color: ${({ theme, $color }) =>
    theme.colors[$color] || theme.colors.secondary};

  border-radius: 8px;
  border: none;
  outline: none;

  cursor: pointer;

  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: ${({ theme, $color }) =>
      $color ? theme.colors.secondary : theme.colors.light};
  }

  @media screen and (min-width: 1280px) {
    padding: 18px;

    font-size: 28px;
  }
`;
