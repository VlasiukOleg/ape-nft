import {
  TitleBtn,
  CardInnerWrap,
  Card,
  CardNumber,
  Description,
  CardImage,
} from './FaqCard.styled';

export const FaqCard = ({
  id,
  title,
  text,
  image,
  open,
  handleClick,
 
}) => {
  return (
    <Card open={open}>
      {open && <CardImage src={image} alt="monkey" width="148px" />}

      <CardNumber open={open}>[{id}]</CardNumber>
      <CardInnerWrap>
        <TitleBtn
          type="button"
          onClick={handleClick}
          open={open}

        >
          {title}
        </TitleBtn>
        {open && <Description>{text}</Description>}
      </CardInnerWrap>
    </Card>
  );
};
