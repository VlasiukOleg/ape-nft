import {
  MindCard,
  CardText,
  CardTitle,
  SvgIcon,
  SvgIconWrap,
  Link,
} from './MindCard.styled';

import icon from '../../assets/icons/svg-sprite.svg';

export const MindMapCard = ({ title, text }) => {
  return (
    <MindCard>
      <CardText>{text}</CardText>
      <CardTitle>{title}</CardTitle>
    </MindCard>
  );
};

export const ActiveMindMapCard = ({ title, iconName }) => {
  return (
    <Link href="https://apenft.io/" target="_blank" rel="noopener noreferrer">
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
    </Link>
  );
};
