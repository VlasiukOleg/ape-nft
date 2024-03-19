import styled from 'styled-components';

export const HeroStyled = styled.section`
  text-align: center;

  background-color: ${props => props.theme.colors.accent};
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  outline: 2px solid tomato;

  p:first-child {
    position: absolute;
    top: 90px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const SubTitle = styled.p`
  font-family: BiroScriptPlus;
  line-height: 1.7;
`;

export const Description = styled.p`
  max-width: 217px;

  margin: 0 auto;
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 6px;
`;

export const BtnWrap = styled.div`
  display: inline-block;
  margin: 0 auto;
`;
