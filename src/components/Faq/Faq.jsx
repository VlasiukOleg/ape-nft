import { Section } from 'components/Section/Section';
import { Title } from 'components/Title/Title';

import { cards } from './cards.js';

import { FaqCardList } from 'components/FaqCardList/FaqCardLIst';

export const Faq = () => {
  return (
    <Section>
      <Title>FAQ</Title>
      <FaqCardList cards={cards} />
    </Section>
  );
};
