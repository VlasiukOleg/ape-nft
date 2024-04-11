import { Banner, SvgIcon, BannerInner, BannerLine } from './BannerAbout.styled';

import icon from '../../assets/icons/svg-sprite.svg';

export const BannerAbout = () => {
  return (
    <Banner>
      <BannerInner>
        <BannerLine>
          HAVE NO LIMITS{' '}
          <SvgIcon>
            <use href={icon + `#icon-cross`}></use>
          </SvgIcon>
          Break rules{' '}
          <SvgIcon>
            <use href={icon + `#icon-cross`}></use>
          </SvgIcon>
          Destroy stereotypes{' '}
          <SvgIcon>
            <use href={icon + `#icon-cross`}></use>
          </SvgIcon>
        </BannerLine>
        <BannerLine>
          HAVE NO LIMITS{' '}
          <SvgIcon>
            <use href={icon + `#icon-cross`}></use>
          </SvgIcon>
          Break rules{' '}
          <SvgIcon>
            <use href={icon + `#icon-cross`}></use>
          </SvgIcon>
          Destroy stereotypes{' '}
          <SvgIcon>
            <use href={icon + `#icon-cross`}></use>
          </SvgIcon>
        </BannerLine>
      </BannerInner>
    </Banner>
  );
};
