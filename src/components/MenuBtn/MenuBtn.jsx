import { MenuBtnStyled } from './MenuBtn.styled';

export const MenuBtn = ({ children, ...props }) => {
  return <MenuBtnStyled {...props}>{children}</MenuBtnStyled>;
};
