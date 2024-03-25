import { forwardRef } from 'react';

import { Description, SvgIcon } from './Contact.styled';

import { Section } from 'components/Section/Section';
import { Title } from 'components/Title/Title';
import { ContactForm } from 'components/ContactForm/ContactForm';

import icon from '../../assets/icons/svg-sprite.svg';

export const Contact = forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Title>Are you in?</Title>
      <SvgIcon>
        <use href={icon + `#icon-cross`}></use>
      </SvgIcon>
      <Description>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </Description>
      <ContactForm />
    </Section>
  );
});
