import { DesktopBurgerMenuList } from './DesktopBurgerMenu.styled';
import { MenuBtn } from 'components/MenuBtn/MenuBtn';

export const DesktopBurgerMenu = ({ onCloseMenu }) => {
  return (
    <DesktopBurgerMenuList>
      <MenuBtn
        style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
        $paddingTablet="17px 5px"
        $paddingDesktop="30px 15px"
      >
        ABOUT
      </MenuBtn>
      <MenuBtn
        style={{ borderRadius: 0 }}
        $paddingTablet="17px 5px"
        $paddingDesktop="30px 15px"
      >
        M-MAP
      </MenuBtn>
      <MenuBtn
        style={{ borderRadius: 0 }}
        $paddingTablet="17px 12px"
        $paddingDesktop="30px 25px"
      >
        FAQ
      </MenuBtn>
      <MenuBtn
        style={{ borderRadius: 0 }}
        $paddingTablet="17px 8px"
        $paddingDesktop="30px 20px"
      >
        ARTS
      </MenuBtn>
      <MenuBtn
        style={{ borderRadius: 0 }}
        $paddingTablet="17px 8px"
        $paddingDesktop="30px 20px"
      >
        MINT
      </MenuBtn>
      <MenuBtn
        style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
        $paddingTablet="17px 8px"
        $paddingDesktop="30px 15px"
        onClick={onCloseMenu}
      >
        CLOSE
      </MenuBtn>
    </DesktopBurgerMenuList>
  );
};
