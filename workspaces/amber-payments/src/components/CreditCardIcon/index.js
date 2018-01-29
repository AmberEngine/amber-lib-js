import React, { PropTypes } from 'react';
import classNames from 'classnames';

import stylesheet from './CreditCardIcon.scss';
import discoverImage from './discover.png';
import amexImage from './american-express.png';
import visaImage from './visa.png';
import masterCardImage from './master-card.png';

const cardTypes = ['discover', 'american-express', 'visa', 'master-card'];

const getCardImage = (cardType) => {
  switch (cardType) {
    case 'discover':
      return discoverImage;
    case 'american-express':
      return amexImage;
    case 'visa':
      return visaImage;
    case 'master-card':
      return masterCardImage;
    default:
      return null;
  }
};

const CreditCardIcon = (props) => {
  const { cardType, cardName, selectedCardType } = props;
  const cardImage = getCardImage(cardType);

  const cardClass = classNames({
    [stylesheet.image]: true,
    [stylesheet.unselected]: selectedCardType !== cardType,
    [stylesheet.discover]: cardType === 'discover'
  });

  return cardImage ? (
    <img src={cardImage} className={cardClass} alt={cardName} />
  ) : null;
};


CreditCardIcon.defaultProps = {
  selectedCardType: null
};

CreditCardIcon.propTypes = {
  selectedCardType: PropTypes.oneOf(cardTypes),
  cardName: PropTypes.string
};

export default CreditCardIcon;
