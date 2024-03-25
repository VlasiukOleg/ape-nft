import PortalReactDOM from 'react-dom';
import { forwardRef } from 'react';

import {
  Logo,
  MobileBurgerMenuWrap,
  MobileMenuInnerWrap,
  SiteNav,
  SiteNavLinkList,
  SiteNavLinkItem,
  NavLinkBtn,
} from './MobileBurgerMenu.styled';

import { MenuBtn } from 'components/MenuBtn/MenuBtn';
import { SocialLinkGroup } from 'components/SocialLinkGroup/SocialLinkGroup';
import { MainContainer } from 'components';

import icon from '../../assets/icons/svg-sprite.svg';

export const MobileBurgerMenu = forwardRef(({ onCloseMenu }, ref) => {
  const { aboutRef, mindMapRef, faqRef, artsRef, contactRef } = ref;

  const onhandleMenuBtnClick = refName => {
    onCloseMenu();
    refName.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return PortalReactDOM.createPortal(
    <MobileBurgerMenuWrap>
      <MainContainer>
        <MobileMenuInnerWrap>
          <SiteNav>
            <Logo>
              <use href={icon + `#icon-logo`}></use>
            </Logo>
            <SiteNavLinkList>
              <SiteNavLinkItem>
                <NavLinkBtn onClick={() => onhandleMenuBtnClick(aboutRef)}>
                  ABOUT
                </NavLinkBtn>
              </SiteNavLinkItem>
              <SiteNavLinkItem>
                {' '}
                <NavLinkBtn onClick={() => onhandleMenuBtnClick(mindMapRef)}>
                  M-MAP
                </NavLinkBtn>
              </SiteNavLinkItem>
              <SiteNavLinkItem>
                {' '}
                <NavLinkBtn onClick={() => onhandleMenuBtnClick(faqRef)}>
                  FAQ
                </NavLinkBtn>
              </SiteNavLinkItem>
              <SiteNavLinkItem>
                {' '}
                <NavLinkBtn onClick={() => onhandleMenuBtnClick(artsRef)}>
                  ARTS
                </NavLinkBtn>
              </SiteNavLinkItem>
              <SiteNavLinkItem>
                {' '}
                <NavLinkBtn onClick={() => onhandleMenuBtnClick(contactRef)}>
                  MINT
                </NavLinkBtn>
              </SiteNavLinkItem>
            </SiteNavLinkList>
            <MenuBtn
              color={'primaryText'}
              colorbg={'rgba(255, 255, 255, 0.1)'}
              $padding="17px 5px"
              onClick={onCloseMenu}
            >
              CLOSE
            </MenuBtn>
          </SiteNav>

          <SocialLinkGroup colorbg={'rgba(255, 255, 255, 0.1)'} fill="#fff" />
        </MobileMenuInnerWrap>
      </MainContainer>
      <footer>© Yacht ape 2024 all rights reserved</footer>
    </MobileBurgerMenuWrap>,

    document.querySelector('#burger-menu-root')
  );
});
