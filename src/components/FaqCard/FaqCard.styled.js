import styled from 'styled-components';

export const TitleBtn = styled.button`
  padding: 0;
  margin-bottom: 10px;

  font-family: 'Right Grotesk Compact Black';
  font-size: 20px;
  font-weight: 900;
  line-height: 1;
  text-align: left;
  background-color: transparent;

  color: ${({ theme, open }) =>
    open ? theme.colors.accent : theme.colors.light};

  border: none;
  outline: none;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 36px;

    font-size: 32px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const Description = styled.p`
  font-size: 12px;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const Card = styled.div`
  position: relative;

  display: flex;
  padding: 8px 8px 10px;

  background-color: ${({ theme, open }) =>
    open ? theme.colors.secondaryBg : 'transparent'};
  border-radius: ${({ theme }) => theme.borderRadius.primary};

  @media screen and (min-width: 768px) {
    padding: 18px 23px 16px 183px;
  }

  @media screen and (min-width: 1280px) {
    padding: 24px 24px 24px 297px;
  }
`;

export const CardInnerWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardNumber = styled.div`
  margin-right: 8px;

  font-family: BiroScriptPlus;
  font-size: 12px;
  line-height: 1.7;

  color: ${({ theme, open }) =>
    open ? theme.colors.primaryText : theme.colors.accent};

  @media screen and (min-width: 768px) {
    margin-right: 21px;

    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 24px;

    font-size: 24px;
  }
`;

export const CardImage = styled.img`
  position: absolute;
  top: 4px;
  left: 18px;

  transform: rotate(-16deg);

  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 1280px) {
    top: -13px;
    left: 15px;

    width: 226px;

    transform: rotate(-8deg);
  }
`;
