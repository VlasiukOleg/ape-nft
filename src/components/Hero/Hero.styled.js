import styled from 'styled-components';

export const SubTitle = styled.p`
  font-family: BiroScriptPlus;
  font-size: 16px;
  line-height: 1.7;
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }

  color: ${props => props.theme.colors.secondaryBg};

  @media screen and (min-width: 768px) {
    font-size: 20px;
    text-align: left;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const HeroStyled = styled.section`
  text-align: center;

  padding-top: 8px;
  padding-bottom: 19px;

  background-color: ${props => props.theme.colors.accent};
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  outline: 2px solid tomato;

  @media screen and (min-width: 768px) {
    padding: 64px 72px 10px;
  }

  @media screen and (min-width: 1280px) {
    padding: 93px 115px 62px;
  }

  ${SubTitle}:first-child {
    position: absolute;
    top: 85px;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (min-width: 768px) {
      position: static;
      transform: translateY(0);
    }
  }

  ${SubTitle}:nth-child(3) {
    margin-top: 8px;

    @media screen and (min-width: 768px) {
      margin-top: 16px;
    }

    @media screen and (min-width: 1280px) {
      margin-top: 30px;

      position: relative;
      left: 125px;
    }
  }
`;

export const Description = styled.p`
  max-width: 217px;
  margin: 12px auto 0px;

  text-transform: uppercase;

  color: ${props => props.theme.colors.secondaryBg};

  @media screen and (min-width: 768px) {
    max-width: 190px;
    margin: 0px;
    padding-bottom: 16px;

    text-align: justify;

    span:first-child {
      display: block;
      text-align: end;
    }
  }

  @media screen and (min-width: 1280px) {
    max-width: 337px;

    font-size: 16px;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6px;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 89px;
    left: 225px;

    margin-top: 0px;
  }

  @media screen and (min-width: 1280px) {
    top: 81px;
    left: 384px;
  }
`;

export const BtnWrap = styled.div`
  display: inline-block;
`;

export const InnerWrap = styled.div`
  @media screen and (min-width: 768px) {
    position: relative;
    top: -15px;

    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    align-items: end;
  }
`;
