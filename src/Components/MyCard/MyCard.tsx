import { CARD_TITLE } from './MyCard.constant';

import { MyCardProps } from '../../utils/types';

const MyCard: React.FC<MyCardProps> = ({description}) => {
  return (
    <div>
      <h2>{CARD_TITLE}</h2>
      <p>Description: {description}</p>
    </div>
  )
};

export default MyCard;