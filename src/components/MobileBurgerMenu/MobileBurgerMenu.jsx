import PortalReactDOM from 'react-dom';

import {
  Logo,
  MobileBurgerMenuWrap,
  MobileMenuInnerWrap,
  SiteNav,
  SiteNavLinkList,
  SiteNavLinkItem,
} from './MobileBurgerMenu.styled';

import { MenuBtn } from 'components/MenuBtn/MenuBtn';
import { SocialLinkGroup } from 'components/SocialLinkGroup/SocialLinkGroup';
import { MainContainer } from 'components';

import icon from '../../assets/icons/svg-sprite.svg';

export const MobileBurgerMenu = ({ onCloseMenu }) => {
  return PortalReactDOM.createPortal(
    <MobileBurgerMenuWrap>
      <MainContainer>
        <MobileMenuInnerWrap>
          <SiteNav>
            <Logo>
              <use href={icon + `#icon-logo`}></use>
            </Logo>
            <SiteNavLinkList>
              <SiteNavLinkItem>ABOUT</SiteNavLinkItem>
              <SiteNavLinkItem>M-MAP</SiteNavLinkItem>
              <SiteNavLinkItem>FAQ</SiteNavLinkItem>
              <SiteNavLinkItem>ARTS</SiteNavLinkItem>
              <SiteNavLinkItem>MINT</SiteNavLinkItem>
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
    </MobileBurgerMenuWrap>,

    document.querySelector('#burger-menu-root')
  );
};
