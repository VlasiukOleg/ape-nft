import { MenuBtn } from 'components/MenuBtn/MenuBtn';
import { SocialLinkList, SocialLinkItem } from './SocialLinkGroup.styled.';

import icon from '../../assets/icons/svg-sprite.svg';

export const SocialLinkGroup = () => {
  return (
    <SocialLinkList>
      <SocialLinkItem>
        <MenuBtn padding={'16px 16px'}>
          <svg width={16} height={16}>
            <use href={icon + `#icon-discord`}></use>
          </svg>
        </MenuBtn>
      </SocialLinkItem>
      <SocialLinkItem>
        <MenuBtn padding={'16px 16px'}>
          <svg width={16} height={16}>
            <use href={icon + `#icon-ship`}></use>
          </svg>
        </MenuBtn>
      </SocialLinkItem>
      <SocialLinkItem>
        <MenuBtn padding={'16px 16px'}>
          <svg width={16} height={16}>
            <use href={icon + `#icon-x-social`}></use>
          </svg>
        </MenuBtn>
      </SocialLinkItem>
    </SocialLinkList>
  );
};
