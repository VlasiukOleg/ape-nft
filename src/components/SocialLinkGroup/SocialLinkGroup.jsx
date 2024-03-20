import { MenuBtn } from 'components/MenuBtn/MenuBtn';
import {
  SocialLinkList,
  SocialLinkItem,
  SvgIcon,
} from './SocialLinkGroup.styled.';

import icon from '../../assets/icons/svg-sprite.svg';

export const SocialLinkGroup = ({ colorbg, fill }) => {
  return (
    <SocialLinkList>
      <SocialLinkItem>
        <MenuBtn
          padding={'16px 16px'}
          colorbg={colorbg}
          pd={'28px 28px'}
          paddingTablet={'12px 12px'}
        >
          <SvgIcon fill={fill}>
            <use href={icon + `#icon-discord`}></use>
          </SvgIcon>
        </MenuBtn>
      </SocialLinkItem>
      <SocialLinkItem>
        <MenuBtn
          padding={'16px 16px'}
          colorbg={colorbg}
          pd={'28px 28px'}
          paddingTablet={'12px 12px'}
        >
          <SvgIcon fill={fill}>
            <use href={icon + `#icon-ship`}></use>
          </SvgIcon>
        </MenuBtn>
      </SocialLinkItem>
      <SocialLinkItem>
        <MenuBtn
          padding={'16px 16px'}
          colorbg={colorbg}
          pd={'28px 28px'}
          paddingTablet={'12px 12px'}
        >
          <SvgIcon fill={fill}>
            <use href={icon + `#icon-x-social`}></use>
          </SvgIcon>
        </MenuBtn>
      </SocialLinkItem>
    </SocialLinkList>
  );
};
