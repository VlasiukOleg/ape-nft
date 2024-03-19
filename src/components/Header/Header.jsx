import { HeaderStyled, SiteNav } from './Header.styled';
import icon from '../../assets/icons/svg-sprite.svg';

import { Logo } from './Header.styled';
import { MenuBtn } from 'components/MenuBtn/MenuBtn';
import { SocialLinkGroup } from 'components/SocialLinkGroup/SocialLinkGroup';

export const Header = () => {
  return (
    <HeaderStyled>
      <SiteNav>
        <Logo>
          <use href={icon + `#icon-logo`}></use>
        </Logo>
        <MenuBtn>MENU</MenuBtn>
      </SiteNav>
      <SocialLinkGroup />
    </HeaderStyled>
  );
};
