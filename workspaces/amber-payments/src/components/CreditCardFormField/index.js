import React, { Component } from 'react';
import classNames from 'classnames';
import { MaskInput } from 'unformed-fields';
import { Fields, Enhancers } from 'unformed';
const { ValidatedField } = Fields;
const { enhanceWithValidation } = Enhancers;

import CreditCardIcon from '../CreditCardIcon';
// import { formatCardNumberString, getCardInfo } from '../../utils';

const defaultCreditCardMask = '9999-9999-9999-9999';

import stylesheet from './CreditCardFormField.scss';

class CreditCardFormField extends Component {
  static defaultProps = {
    initialCardType: null,
  }

  state = {
    initialCardType: this.props.initialCardType,
    creditCardMask: defaultCreditCardMask,
  }

  componentWillReceiveProps(newProps) {
    const { initialCardType: oldInitialCardType } = this.props;
    const { initialCardType } = newProps;
    const { cardType } = this.state;

    if (oldInitialCardType !== initialCardType && initialCardType !== cardType) {
      this.setState({
        cardType: initialCardType,
      });
    }
  }

  render() {
    const { ...restProps } = this.props;
    const { cardType, creditCardMask } = this.state;

    return (
      <div>
        <div className={stylesheet.creditInput}>
          <MaskInput
            {...restProps}
            mask={creditCardMask}
          />
        </div>
        <div className={stylesheet.creditIcon}>
          <span className={stylesheet.iconGroup}>
            <CreditCardIcon
              cardType="visa"
              cardName="Visa"
              selectedCardType={cardType}
            />
            <CreditCardIcon
              cardType="master-card"
              cardName="Master Card"
              selectedCardType={cardType}
            />
            <CreditCardIcon
              cardType="discover"
              cardName="Discover"
              selectedCardType={cardType}
            />
            <CreditCardIcon
              cardType="american-express"
              cardName="American Express"
              selectedCardType={cardType}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default enhanceWithValidation(ValidatedField(CreditCardFormField));
