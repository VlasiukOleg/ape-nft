import styled from 'styled-components';

export const AboutSection = styled.section`
  position: relative;
  padding: 60px 64px 52px;

  outline: 2px solid tomato;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding: 80px 72px 52px;
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
    max-width: 269px;

    font-size: 60px;
  }
`;

export const SvgIcon = styled.svg`
  display: block;
  width: 24px;
  height: 24px;
  margin: 0px auto;
`;

export const Description = styled.p`
  margin-bottom: 36px;

  font-size: 16px;
  font-weight: 400;
  text-align: right;

  span {
    display: block;
  }
`;

export const SubDescription = styled.p`
  margin-bottom: 40px;

  font-weight: 400;
  text-align: center;

  ${SvgIcon} {
    margin-bottom: 16px;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6px;
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
`;
