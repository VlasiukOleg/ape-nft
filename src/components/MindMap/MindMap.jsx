import { useRef } from 'react';

import {
  MindMapSection,
  MindCard,
  CardTitle,
  CardText,
  SwiperBtnWrap,
  SvgIcon,
  SvgIconWrap,
  SwiperWrap,
  CardList,
  CardItem,
} from './MIndMap.styled';

import { Title } from 'components/Title/Title';
import { SwiperBtn } from 'components/SwiperBtn/SwiperBtn';

import icon from '../../assets/icons/svg-sprite.svg';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

export const MindMap = () => {
  const swiperRef = useRef();

  const onHandleNextBtn = () => {
    swiperRef.current.slideNext();
  };

  const onHandlePrevBtn = () => {
    swiperRef.current.slidePrev();
  };

  return (
    <MindMapSection>
      <Title>MIND map</Title>
      <SwiperWrap>
        <Swiper
          className="mySwiper"
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            {' '}
            <MindCard>
              <CardText>
                All owners of APE NFTs and all future collections will receive a
                percentage of sales based on the number of NFTs they own
              </CardText>
              <CardTitle>YAPE DROP</CardTitle>
            </MindCard>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <MindCard>
              <CardText style={{ marginBottom: '74px' }}>
                Launch of the 2nd YACHT Collection Releasing the first version
                of the Ape Slam Game
              </CardText>
              <CardTitle>New Collection</CardTitle>
            </MindCard>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <MindCard>
              <CardText style={{ marginBottom: '92px' }}>
                Launch your own token, the proceeds of which will go to a global
                fund to LAUNCH YACHT CLUB AND PROMOTE it
              </CardText>
              <CardTitle>Token</CardTitle>
            </MindCard>
          </SwiperSlide>
          <SwiperSlide>
            <MindCard style={{ backgroundColor: '#DC3B5A' }}>
              <SvgIconWrap>
                <SvgIcon>
                  <use href={icon + `#icon-arrow`}></use>
                </SvgIcon>
              </SvgIconWrap>

              <CardTitle>
                Learn
                <br /> more <br />
                in mind map&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </CardTitle>
            </MindCard>
          </SwiperSlide>
          <SwiperBtnWrap>
            <SwiperBtn onHandleClick={onHandlePrevBtn}>Prev</SwiperBtn>
            <SwiperBtn onHandleClick={onHandleNextBtn}>Next</SwiperBtn>
          </SwiperBtnWrap>
        </Swiper>
      </SwiperWrap>

      <CardList>
        <CardItem>
          <MindCard>
            <CardText>
              All owners of APE NFTs and all future collections will receive a
              percentage of sales based on the number of NFTs they own
            </CardText>
            <CardTitle>YAPE DROP</CardTitle>
          </MindCard>
        </CardItem>
        <CardItem>
          <MindCard>
            <CardText>
              Launch of the 2nd YACHT Collection Releasing the first version of
              the Ape Slam Game
            </CardText>
            <CardTitle>New Collection</CardTitle>
          </MindCard>
        </CardItem>
        <CardItem>
          <MindCard>
            <CardText>
              Launch your own token, the proceeds of which will go to a global
              fund to LAUNCH YACHT CLUB AND PROMOTE it
            </CardText>
            <CardTitle>Token</CardTitle>
          </MindCard>
        </CardItem>
        <CardItem>
          <MindCard style={{ backgroundColor: '#DC3B5A' }}>
            <SvgIconWrap>
              <SvgIcon>
                <use href={icon + `#icon-arrow`}></use>
              </SvgIcon>
            </SvgIconWrap>

            <CardTitle>
              Learn
              <br /> more <br />
              in mind map&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </CardTitle>
          </MindCard>
        </CardItem>
      </CardList>
    </MindMapSection>
  );
};
