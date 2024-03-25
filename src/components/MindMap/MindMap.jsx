import { useRef } from 'react';
import { forwardRef } from 'react';

import { Section } from 'components/Section/Section';
import { Title } from 'components/Title/Title';
import { SwiperBtn } from 'components/SwiperBtn/SwiperBtn';

import { MindMapCardsList } from 'components/MindCardsList/MindMapCardsList';

import { MindMapCard } from 'components/MindMapCards/MindMapCard';
import { ActiveMindMapCard } from 'components/MindMapCards/MindMapCard';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import styled from 'styled-components';

export const SwiperBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 24px;
`;

export const SwiperWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MindMapInnerWrap = styled.div`
  padding-top: 56px;

  @media screen and (min-width: 1280px) {
    padding-top: 86px;
  }
`;

export const MindMap = forwardRef((props, ref) => {
  const swiperRef = useRef();

  const onHandleNextBtn = () => {
    swiperRef.current.slideNext();
  };

  const onHandlePrevBtn = () => {
    swiperRef.current.slidePrev();
  };

  return (
    <Section ref={ref}>
      <MindMapInnerWrap>
        <Title>MIND map</Title>
        <SwiperWrap>
          <Swiper
            className="mySwiper"
            onSwiper={swiper => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <MindMapCard
                text=" All owners of APE NFTs and all future collections will receive a
                percentage of sales based on the number of NFTs they own"
                title="YAPE DROP"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MindMapCard
                text="Launch of the 2nd YACHT Collection Releasing the first version
                of the Ape Slam Game"
                title="New Collection"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MindMapCard
                text="Launch your own token, the proceeds of which will go to a global
                fund to LAUNCH YACHT CLUB AND PROMOTE it"
                title="Token"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ActiveMindMapCard />
            </SwiperSlide>
            <SwiperBtnWrap>
              <SwiperBtn onHandleClick={onHandlePrevBtn}>Prev</SwiperBtn>
              <SwiperBtn onHandleClick={onHandleNextBtn}>Next</SwiperBtn>
            </SwiperBtnWrap>
          </Swiper>
        </SwiperWrap>

        <MindMapCardsList />
      </MindMapInnerWrap>
    </Section>
  );
});
