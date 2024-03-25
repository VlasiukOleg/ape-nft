import { useRef } from 'react';

import { SwiperBtnWrap, SwiperWrap } from './MindMap.styled';

import { Section } from 'components/Section/Section';
import { Title } from 'components/Title/Title';
import { SwiperBtn } from 'components/SwiperBtn/SwiperBtn';

import { MindMapCardsList } from 'components/MindCardsList/MindMapCardsList';

import { MindMapCard } from 'components/MindMapCards/MindMapCard';
import { ActiveMindMapCard } from 'components/MindMapCards/MindMapCard';

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
    <Section>
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
    </Section>
  );
};
