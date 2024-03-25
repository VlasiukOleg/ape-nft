import styled from 'styled-components';

export const ContactStyled = styled.section`
  outline: 2px solid tomato;
`;

export const SvgIcon = styled.svg`
  display: block;
  width: 36px;
  height: 36px;
  margin: 0px auto 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 40px;
  }
`;

export const Description = styled.p`
  margin-bottom: 16px;

  font-size: 16px;
  font-weight: 400;
  text-align: center;

  @media screen and (min-width: 768px) {
    max-width: 397px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 581px;
    font-size: 24px;
    margin-bottom: 40px;
  }
`;
