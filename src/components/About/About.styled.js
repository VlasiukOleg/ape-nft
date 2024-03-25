import styled from 'styled-components';

export const AboutSection = styled.section`
  position: relative;
  padding: 60px 64px 52px;

  outline: 2px solid tomato;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding: 80px 72px 88px;
  }

  @media screen and (min-width: 1280px) {
    padding: 120px 108px 126px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;

  font-family: 'Right Grotesk Compact Black';
  font-size: 40px;
  line-height: 1;

  span {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    max-width: 272px;
    margin-bottom: 68px;

    font-size: 60px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 538px;
    font-size: 120px;
    margin-bottom: 56px;
  }
`;

export const TextWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

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

export const SubDescription = styled.p`
  margin-bottom: 40px;

  font-weight: 400;
  text-align: center;

  ${SvgIcon} {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    display: inline-block;

    span {
      display: block;
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;

    span {
      display: inline-block;
    }
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6px;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 54px;
    right: 74px;
  }

  @media screen and (min-width: 1280px) {
    bottom: 84px;
    right: 108px;
  }
`;

export const Banner = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 999;
  transform: translateX(-50%);

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
