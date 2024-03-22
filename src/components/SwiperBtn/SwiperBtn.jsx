import { StyledSwiperBtn } from './SwiperBtn.styled';

export const SwiperBtn = ({ children, onHandleClick }) => {
  return <StyledSwiperBtn onClick={onHandleClick}>{children}</StyledSwiperBtn>;
};
