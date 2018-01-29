import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import moment from 'moment';

import stylesheet from './CancelAccountSection.scss';

import { Modal } from 'shared/components';

export default class CancelAccountSection extends Component {
  static propTypes = {
    submitting: PropTypes.bool,
    billing: PropTypes.object,
    cancelError: PropTypes.string,
    cancelAccount: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      comments: '',
      showCancelModal: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const { submitting: wasSubmitting } = this.props;
    const { submitting, cancelError } = nextProps;

    // Hide the modal after the form has been submitted.
    if (wasSubmitting && !submitting) {
      if (!cancelError) {
        this.toggleCancelForm();
      } else {
        // TODO: Display error.
      }
    }
  }

  onChange = (event) => {
    this.setState({ comments: event.target.value });
  }

  toggleCancelForm = () => {
    this.setState(state => {
      return { showCancelModal: !state.showCancelModal };
    });
  }

  cancelAccount = () => {
    const { cancelAccount } = this.props;
    const { comments } = this.state;

    cancelAccount({ comments });
  }

  renderModalContent() {
    const { submitting, billing } = this.props;
    const { showCancelModal } = this.state;
    const { next_run_date: nextRunDate } = billing;
    const billingCycleEndDate = ` ${moment(new Date(nextRunDate)).format('MMMM DD, YYYY')}`;

    return showCancelModal && (
      <Modal
        title='CANCEL ACCOUNT'
        close={this.toggleCancelForm}
        closeLabel='NEVERMIND'
        submit={this.cancelAccount}
        submitLabel='CONFIRM'
        showModalLoading={submitting}
        switchPlacement
      >
        <p>
          Your card will no longer be billed. You will retain full access to your portal through
          the end of your billing cycle,
          <strong className={stylesheet.noWrap}>{billingCycleEndDate}</strong>.
          We will store your data and preferences for up to one year in case you change your mind.
          Your Client Services Specialist will reach out to you within 1-2 business days to
          confirm your cancellation.
        </p>
        <p>Please take a moment to provide feedback so that we can improve!</p>
        <div>
          <label htmlFor='comments'>Feedback (optional)</label>
          <textarea
            name='comments'
            className={classNames('form-control', stylesheet.comments)}
            onChange={this.onChange}
          />
        </div>
      </Modal>
    );
  }

  render() {
    return (
      <div className={stylesheet.section}>
        <a className={stylesheet.cancelLink}onClick={this.toggleCancelForm}>Cancel Account</a>
        {this.renderModalContent()}
      </div>
    );
  }
}
