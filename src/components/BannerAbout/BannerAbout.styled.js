import styled from 'styled-components';

export const SvgIcon = styled.svg`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 0px auto;

  @media screen and (min-width: 1280px) {
    width: 36px;
    height: 36px;
  }
`;

export const Banner = styled.div`
  position: absolute;
  width: 100vw;
  left: -50%;
  transform: translateX(50%);
  overflow: hidden;
  font-weight: 600;
  font-size: 34px;
  text-transform: uppercase;
  background-color: #ffdc00;

  font-family: 'Right Grotesk Compact Black';
  font-size: 36px;
  line-height: 1;

  background-color: ${({ theme }) => theme.colors.accent};

  ${SvgIcon} {
    margin-left: 30px;
    margin-right: 30px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    padding: 8px 0 12px;
  }
`;

export const BannerInner = styled.div`
  display: flex;
`;

export const BannerLine = styled.p`
  flex-shrink: 0;
  margin: 0;
  padding: 10px 15px;
  min-width: 100%;
  white-space: nowrap;
  animation-name: marqueeLine;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes marqueeLine {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-100%);
    }
  }
`;
