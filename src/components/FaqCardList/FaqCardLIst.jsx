import { useState } from 'react';

import { FaqCard } from 'components/FaqCard/FaqCard';

export const FaqCardList = ({ cards }) => {
  const [cardOpenIndex, setIsCardOpen] = useState(0);
  console.log(cardOpenIndex);

  const onToggleCard = index => {
    setIsCardOpen(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <ul>
      {cards.map((item, index) => (
        <li key={item.id}>
          <FaqCard
            image={item.image}
            id={item.id}
            title={item.title}
            text={item.description}
            open={cardOpenIndex === index}
            handleClick={() => onToggleCard(index)}
          />
        </li>
      ))}
    </ul>
  );
};
