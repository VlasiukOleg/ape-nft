import { forwardRef } from 'react';

import { DesktopBurgerMenuList } from './DesktopBurgerMenu.styled';
import { MenuBtn } from 'components/MenuBtn/MenuBtn';

export const DesktopBurgerMenu = forwardRef(({ onCloseMenu }, ref) => {
  const { aboutRef, mindMapRef, faqRef, artsRef, contactRef } = ref;
  return (
    <DesktopBurgerMenuList>
      <MenuBtn
        style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
        $paddingTablet="17px 5px"
        $paddingDesktop="30px 15px"
        onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        ABOUT
      </MenuBtn>
      <MenuBtn
        style={{ borderRadius: 0 }}
        $paddingTablet="17px 5px"
        $paddingDesktop="30px 15px"
        onClick={() =>
          mindMapRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        M-MAP
      </MenuBtn>
      <MenuBtn
        style={{ borderRadius: 0 }}
        $paddingTablet="17px 12px"
        $paddingDesktop="30px 25px"
        onClick={() => faqRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        FAQ
      </MenuBtn>
      <MenuBtn
        style={{ borderRadius: 0 }}
        $paddingTablet="17px 8px"
        $paddingDesktop="30px 20px"
        onClick={() => artsRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        ARTS
      </MenuBtn>
      <MenuBtn
        style={{ borderRadius: 0 }}
        $paddingTablet="17px 8px"
        $paddingDesktop="30px 20px"
        onClick={() =>
          contactRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
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
});
