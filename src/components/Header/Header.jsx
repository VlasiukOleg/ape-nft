import { useState } from 'react';

import { HeaderStyled, SiteNav } from './Header.styled';
import icon from '../../assets/icons/svg-sprite.svg';

import { Logo } from './Header.styled';
import { MenuBtn } from 'components/MenuBtn/MenuBtn';
import { SocialLinkGroup } from 'components/SocialLinkGroup/SocialLinkGroup';

import { MobileBurgerMenu } from 'components/MobileBurgerMenu/MobileBurgerMenu';
import { DesktopBurgerMenu } from 'components/DesktopBurgerMenu/DesktopBurgerMenu';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };
  return (
    <HeaderStyled>
      <SiteNav>
        <Logo>
          <use href={icon + `#icon-logo`}></use>
        </Logo>
        {isOpen ? (
          <DesktopBurgerMenu onCloseMenu={onToggleMenu} />
        ) : (
          <MenuBtn onClick={onToggleMenu} pd={'30px 20px'}>
            MENU
          </MenuBtn>
        )}
      </SiteNav>
      <SocialLinkGroup />
      {isOpen && <MobileBurgerMenu onCloseMenu={onToggleMenu} />}
    </HeaderStyled>
  );
};
