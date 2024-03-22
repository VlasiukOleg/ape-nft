import styled from 'styled-components';

export const MindMapSection = styled.section`
  padding: 60px 64px 0px;

  outline: 2px solid tomato;

  @media screen and (min-width: 768px) {
    padding: 80px 72px 0px;
  }

  @media screen and (min-width: 1280px) {
    padding: 120px 108px 0px;
  }
`;

export const MindCard = styled.div`
  padding: 24px 12px;

  max-width: 216px;
  max-height: 242px;

  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    max-width: 284px;
    display: flex;
    flex-direction: column;
    padding: 24px 24px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 504px;
    max-height: 580px;
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
  margin-bottom: 78px;

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

export const SwiperBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 24px;
`;

export const SvgIconWrap = styled.div`
  text-align: right;
  margin-bottom: 50px;

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

export const SwiperWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const CardList = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(284px, 1fr));
  display: none;

  @media screen and (min-width: 768px) {
    display: grid;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(504px, 1fr));
  }
`;

export const CardItem = styled.li`
  @media screen and (min-width: 768px) {
    &:nth-child(1) {
      ${CardText} {
        margin-bottom: 36px;
      }
    }

    &:nth-child(2) {
      ${CardText} {
        margin-bottom: 64px;
      }
    }

    &:nth-child(3) {
      ${CardText} {
        margin-bottom: 50px;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    &:nth-child(1) {
      ${CardText} {
        margin-bottom: 107px;
      }
    }

    &:nth-child(2) {
      ${CardText} {
        margin-bottom: 165px;
      }
    }

    &:nth-child(3) {
      ${CardText} {
        margin-bottom: 136px;
      }
    }
  }
`;
