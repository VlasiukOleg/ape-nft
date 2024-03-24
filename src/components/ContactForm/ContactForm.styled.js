import styled from 'styled-components';

export const Form = styled.form`
  @media screen and (min-width: 768px) {
    max-width: 248px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    max-width: 397px;
  }
`;

export const Label = styled.label`
  position: relative;

  display: flex;
  margin-bottom: 18px;

  @media screen and (min-width: 1280px) {
    max-width: 397px;
    margin-bottom: 24px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 17px 24px;

  font-family: inherit;
  font-size: 12px;
  font-weight: 400;

  background-color: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme }) => theme.colors.primaryText};

  border: 1px solid ${({ theme }) => theme.colors.secondaryBg};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  text-transform: uppercase;

  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.24);
    text-transform: uppercase;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primaryText};
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const SvgIconWrap = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px;

  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;

export const InputIcon = styled.svg`
  fill: #5a65f2;
  width: 24px;
  height: 24px;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  right: 0;
  bottom: -14px;

  text-align: right;
  font-size: 10px;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.accent};

  @media screen and (min-width: 1280px) {
    font-size: 12px;
    bottom: -16px;
  }
`;
