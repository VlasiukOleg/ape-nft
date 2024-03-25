import styled from 'styled-components';

export const SvgIcon = styled.svg`
  display: block;
  width: 24px;
  height: 24px;
  margin: 0px auto;

  @media screen and (min-width: 1280px) {
    width: 36px;
    height: 36px;
  }
`;

export const Banner = styled.div`
  width: 100vw;
  padding: 10px 0;

  display: flex;
  align-items: center;

  font-family: 'Right Grotesk Compact Black';
  font-size: 36px;
  line-height: 1;

  background-color: ${({ theme }) => theme.colors.accent};

  p {
    display: flex;
    align-items: center;
    white-space: nowrap;
    margin-left: 30px;
  }

  ${SvgIcon} {
    margin-left: 30px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    padding: 8px 0 12px;
  }
`;
