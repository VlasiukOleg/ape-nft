import { CardList, CardItem } from './MindMapCardsList.styled';

import { MindMapCard } from 'components/MindMapCards/MindMapCard';
import { ActiveMindMapCard } from 'components/MindMapCards/MindMapCard';

export const MindMapCardsList = () => {
  return (
    <CardList>
      <CardItem>
        <MindMapCard
          text=" All owners of APE NFTs and all future collections will receive a
                percentage of sales based on the number of NFTs they own"
          title="YAPE DROP"
        />
      </CardItem>
      <CardItem>
        <MindMapCard
          text="Launch of the 2nd YACHT Collection Releasing the first version
                of the Ape Slam Game"
          title="New Collection"
        />
      </CardItem>
      <CardItem>
        <MindMapCard
          text="Launch your own token, the proceeds of which will go to a global
                fund to LAUNCH YACHT CLUB AND PROMOTE it"
          title="Token"
        />
      </CardItem>
      <CardItem>
        <ActiveMindMapCard />
      </CardItem>
    </CardList>
  );
};
