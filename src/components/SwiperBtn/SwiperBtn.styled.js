import styled from 'styled-components';

export const StyledSwiperBtn = styled.button`
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.light};

  font-family: BiroScriptPlus;
  font-size: 24px;
  line-height: 1;

  cursor: pointer;
`;
