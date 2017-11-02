import React, { Component } from 'react';
import classNames from 'classnames';

import { Form, FormGroup, Fields, Submit } from '../Form';
import Modal from '../Modal';
import { required } from '../Form/Validation';

import stylesheet from './SelectModal.scss';

class SelectModal extends Component {
  render() {
    const {
      onSubmit,
      options,
      toggleModal,
      visible,
      label,
      title,
      name,
      className
    } = this.props;

    const modalClass = classNames(stylesheet.modalContainer, className);

    return (
      <Modal
        isOpen={visible}
        onClose={toggleModal}
        label={label}
        className={modalClass}
      >
        <Form
          onSubmit={onSubmit}
          className={stylesheet.formWrapper}
        >
          <FormGroup
            title={title}
            name={name}
            className="form-control"
            validate={[required]}
            FieldComponent={Fields.ValidatedDropDownField}
            options={options}
          />
          <Submit
            type="submit"
            className={stylesheet.submitButton}
          >
            SUBMIT
          </Submit>
        </Form>
      </Modal>
    );
  }
}

export default SelectModal;
