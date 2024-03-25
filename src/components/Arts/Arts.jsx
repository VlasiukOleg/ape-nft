import { forwardRef, useRef } from 'react';

import { Section } from 'components/Section/Section';
import { Title } from 'components/Title/Title';

import { SwiperBtnWrap } from './Arts.styled';

import { SwiperBtn } from 'components/SwiperBtn/SwiperBtn';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { slides } from './images';

export const Arts = forwardRef((props, ref) => {
  const swiperRef = useRef();

  const onHandleNextBtn = () => {
    swiperRef.current.slideNext();
  };

  const onHandlePrevBtn = () => {
    swiperRef.current.slidePrev();
  };
  return (
    <Section ref={ref}>
      <Title>COLLECTION</Title>
      <Swiper
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        }}
        className="mySwiper"
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide}>
            {' '}
            <img src={slide} alt="Monkey" />
          </SwiperSlide>
        ))}
        <SwiperBtnWrap>
          <SwiperBtn onHandleClick={onHandlePrevBtn}>Prev</SwiperBtn>
          <SwiperBtn onHandleClick={onHandleNextBtn}>Next</SwiperBtn>
        </SwiperBtnWrap>
      </Swiper>
    </Section>
  );
});
