import styled from 'styled-components';

export const MindCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 12px;

  max-width: 216px;
  min-height: 242px;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    max-width: 284px;
    min-height: 242px;

    padding: 24px 24px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 504px;
    min-height: 480px;
  }
`;

export const CardTitle = styled.h2`
  font-family: 'Right Grotesk Compact Black';
  font-size: 32px;
  line-height: 1;

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const CardText = styled.p`
  font-weight: 400;

  @media screen and (min-width: 768px) {
    max-width: 128px;
    align-self: end;
  }

  @media screen and (min-width: 1280px) {
    max-width: 228px;
    font-size: 24px;
  }
`;

export const SvgIconWrap = styled.div`
  text-align: right;

  @media screen and (min-width: 1280px) {
    margin-bottom: 176px;
  }
`;

export const SvgIcon = styled.svg`
  width: 48px;
  height: 48px;

  @media screen and (min-width: 1280px) {
    width: 64px;
    height: 64px;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.light};

  cursor: pointer;
`;
