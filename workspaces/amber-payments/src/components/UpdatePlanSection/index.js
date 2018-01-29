import React, { Component, PropTypes } from 'react';

import UpdatePlanForm from '../UpdatePlanForm';
import stylesheet from './UpdatePlanSection.scss';

import { components } from '@amber-engine/amber-lib';
const { Modal } = components;

// TODO: import toast from 'shared/toast/services';
const toast = () => {};

export default class UpdatePlanSection extends Component {
  static propTypes = {
    submitting: PropTypes.bool,
    updateError: PropTypes.string,
    updatePlan: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      showUpdateModal: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { submitting: wasSubmitting } = this.props;
    const { submitting, updateError } = nextProps;

    // Hide the modal after the form has been submitted.
    if (wasSubmitting && !submitting) {
      if (!updateError) {
        toast(
          <p>
            <strong>We got your message!</strong> We’ll contact you in 1-2 business days.
          </p>
        );
        this.toggleUpdateForm();
      } else {
        // TODO: Display error.
      }
    }
  }

  toggleUpdateForm = () => {
    this.setState(state => {
      return { showUpdateModal: !state.showUpdateModal };
    });
  }

  sendFeedback = () => {
    this.updatePlanForm.submit();
  }

  submitPlanUpdate = (data) => {
    const { updatePlan } = this.props;
    updatePlan(data);
  }

  render() {
    const { submitting } = this.props;
    const { showUpdateModal } = this.state;

    return (
      <div>
        <a
          className={stylesheet.link}
          onClick={this.toggleUpdateForm}
          role="button"
          tabIndex="0"
        >
          Update Your Plan
        </a>
        {showUpdateModal && (
          <Modal
            title="UPDATE PLAN"
            close={this.toggleUpdateForm}
            closeLabel="CANCEL"
            submit={this.sendFeedback}
            submitLabel="CONTINUE"
            showModalLoading={submitting}
          >
            <UpdatePlanForm
              onSubmit={this.submitPlanUpdate}
              ref={node => (this.updatePlanForm = node)}
            />
          </Modal>
        )}
      </div>
    );
  }
}
