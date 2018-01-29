import React, { Component } from 'react';
import { Field } from 'redux-form';
import classNames from 'classnames';

import CreditCardIcon from '../CreditCardIcon';
import { formatCardNumberString, getCardInfo } from '../../utils';

import stylesheet from './CreditCardFormField.scss';

import ValidatedFormField from '../../../components/FormFields/ValidatedFormField';

export default class CreditCardFormField extends Component {
  static defaultProps = {
    validate: [],
    initialCardType: null
  }

  constructor(props, context) {
    super(props, context);
    const { initialCardType } = props;

    this.state = {
      cardType: initialCardType
    };
  }

  componentWillReceiveProps(newProps) {
    const { initialCardType: oldInitialCardType } = this.props;
    const { initialCardType } = newProps;
    const { cardType } = this.state;

    if (oldInitialCardType !== initialCardType && initialCardType !== cardType) {
      this.setState({
        cardType: initialCardType
      });
    }
  }

  normalizeCreditCard = (value) => {
    const formattedNumberString = formatCardNumberString(value);
    const { number, cardType } = getCardInfo(formattedNumberString);

    // Update the card type during normalization
    this.setState({ cardType });

    return number;
  }

  render() {
    const { validate } = this.props;
    const { cardType } = this.state;

    return (
      <div>
        <div className={classNames('col-xs-7', stylesheet.creditInput)} >
          <Field
            name='creditCardNumber'
            type='text'
            component={ValidatedFormField}
            normalize={this.normalizeCreditCard}
            validate={validate}
            clearOnFirstClick='true'
            ref={node => { this.field = node; }}
          />
        </div>
        <div className='col-xs-5'>
          <span className={stylesheet.iconGroup}>
            <CreditCardIcon
              cardType='visa'
              cardName='Visa'
              selectedCardType={cardType}
            />
            <CreditCardIcon
              cardType='master-card'
              cardName='Master Card'
              selectedCardType={cardType}
            />
            <CreditCardIcon
              cardType='discover'
              cardName='Discover'
              selectedCardType={cardType}
            />
            <CreditCardIcon
              cardType='american-express'
              cardName='American Express'
              selectedCardType={cardType}
            />
          </span>
        </div>
      </div>
    );
  }
}
