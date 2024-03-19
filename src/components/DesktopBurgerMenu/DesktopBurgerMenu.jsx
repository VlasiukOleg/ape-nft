import { DesktopBurgerMenuList } from './DesktopBurgerMenu.styled';
import { MenuBtn } from 'components/MenuBtn/MenuBtn';

export const DesktopBurgerMenu = ({ onCloseMenu }) => {
  return (
    <DesktopBurgerMenuList>
      <MenuBtn
        style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
        padding={'17px 5px'}
      >
        ABOUT
      </MenuBtn>
      <MenuBtn style={{ borderRadius: 0 }} padding={'17px 5px'}>
        M-MAP
      </MenuBtn>
      <MenuBtn style={{ borderRadius: 0 }} padding={'17px 12px'}>
        FAQ
      </MenuBtn>
      <MenuBtn style={{ borderRadius: 0 }} padding={'17px 8px'}>
        ARTS
      </MenuBtn>
      <MenuBtn style={{ borderRadius: 0 }} padding={'17px 8px'}>
        MINT
      </MenuBtn>
      <MenuBtn
        style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
        padding={'17px 5px'}
        onClick={onCloseMenu}
      >
        CLOSE
      </MenuBtn>
    </DesktopBurgerMenuList>
  );
};
