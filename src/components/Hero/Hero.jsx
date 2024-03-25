import { forwardRef } from 'react';

import {
  HeroStyled,
  SubTitle,
  ImgWrap,
  BtnWrap,
  Description,
  InnerWrap,
} from './Hero.styled';

import { SectionTitle } from 'components/SectionTitle/SectionTitle';

import { Button } from 'components/Button/Button';

import imageMobile1x from '../../assets/images/hero/hero-mobile@1x.png';
import imageMobile2x from '../../assets/images/hero/hero-mobile@2x.png';
import imageTablet1x from '../../assets/images/hero/hero-tablet@1x.png';
import imageTablet2x from '../../assets/images/hero/hero-tablet@2x.png';
import imageDesktop1x from '../../assets/images/hero/hero-desktop@1x.png';
import imageDesktop2x from '../../assets/images/hero/hero-desktop@2x.png';

export const Hero = forwardRef((props, ref) => {
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
          <Button
            onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}
          >
            MEET APES
          </Button>
        </BtnWrap>
        <Description>
          <span>Yacht Ape is a </span>
          <span>collection</span> <span>of unique digital apes that you</span>
          <span>can own in NFT format</span>
        </Description>
      </InnerWrap>
    </HeroStyled>
  );
});
