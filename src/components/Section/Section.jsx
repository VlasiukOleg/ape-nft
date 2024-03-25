import { forwardRef } from 'react';

import { StyledSection } from './Section.styled';

export const Section = forwardRef(({ children }, ref) => {
  return <StyledSection ref={ref}>{children}</StyledSection>;
});
