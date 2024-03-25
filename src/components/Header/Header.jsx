import { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/">
          <Logo>
            <use href={icon + `#icon-logo`}></use>
          </Logo>
        </Link>

        {isOpen ? (
          <DesktopBurgerMenu onCloseMenu={onToggleMenu} />
        ) : (
          <MenuBtn
            onClick={onToggleMenu}
            $padding="17px 9px"
            $paddingTablet="17px 9px"
            $paddingDesktop="30px 20px"
          >
            MENU
          </MenuBtn>
        )}
      </SiteNav>
      <SocialLinkGroup />
      {isOpen && <MobileBurgerMenu onCloseMenu={onToggleMenu} />}
    </HeaderStyled>
  );
};
