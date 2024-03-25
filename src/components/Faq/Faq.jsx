import { forwardRef } from 'react';

import { Section } from 'components/Section/Section';
import { Title } from 'components/Title/Title';

import { cards } from './cards.js';

import { FaqCardList } from 'components/FaqCardList/FaqCardLIst';

export const Faq = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Section>
        <Title>FAQ</Title>
        <FaqCardList cards={cards} />
      </Section>
    </div>
  );
});
