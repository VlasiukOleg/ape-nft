import {
  HeroStyled,
  SubTitle,
  ImgWrap,
  BtnWrap,
  Description,
  InnerWrap,
} from './Hero.styled';

import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { MenuBtn } from 'components/MenuBtn/MenuBtn';

import imageMobile1x from '../../assets/images/hero/hero-mobile@1x.png';
import imageMobile2x from '../../assets/images/hero/hero-mobile@2x.png';
import imageTablet1x from '../../assets/images/hero/hero-tablet@1x.png';
import imageTablet2x from '../../assets/images/hero/hero-tablet@2x.png';
import imageDesktop1x from '../../assets/images/hero/hero-desktop@1x.png';
import imageDesktop2x from '../../assets/images/hero/hero-desktop@2x.png';

export const Hero = () => {
  return (
    <HeroStyled>
      <SubTitle>diD yOu seE iT ?</SubTitle>
      <SectionTitle>YACHT APES</SectionTitle>
      <SubTitle>Apes aRe eveRywhere</SubTitle>
      <ImgWrap>
        <picture>
          <source
            srcSet={`${imageDesktop1x} 1x,  ${imageDesktop2x} 2x`}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={`${imageTablet1x} 1x,  ${imageTablet2x} 2x`}
            media="(min-width: 768px)"
          />
          <source srcSet={`${imageMobile1x} 1x,  ${imageMobile2x} 2x`} />

          <img src={imageDesktop1x} alt="Monkey" />
        </picture>
      </ImgWrap>
      <InnerWrap>
        <BtnWrap>
          <MenuBtn
            padding={'12px 74px'}
            font={'Right Grotesk Compact Black'}
            fontSize={'16px'}
            paddingTablet={'12px 61px'}
            fsd={'28px'}
            paddingDesktop={'16px 110px'}
          >
            MEET APES
          </MenuBtn>
        </BtnWrap>
        <Description>
          <span>Yacht Ape is a </span>
          <span>collection</span> <span>of unique digital apes that you</span>
          <span>can own in NFT format</span>
        </Description>
      </InnerWrap>
    </HeroStyled>
  );
};
