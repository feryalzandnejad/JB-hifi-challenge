import { CARD_TITLE } from './MyCard.constant';
import { MyCardContainerStyles } from './MyCard.styles';
import { MyCardProps } from '../../utils/types';

const MyCard: React.FC<MyCardProps> = ({description}) => {
  return (
    <MyCardContainerStyles>
      <h2>{CARD_TITLE}</h2>
      <p>Description : {description}</p>
    </MyCardContainerStyles>
  )
};

export default MyCard;