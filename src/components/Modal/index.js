import React from 'react';
import Modal from 'react-modal';
import classNames from 'classnames';

import { Icon } from '../../../shared/components';

import ModalLoading from './ModalLoading';

import stylesheet from './Modal.scss';

export default function({
  isOpen,
  onClose,
  label,
  loading,
  className,
  LoadingComponent = ModalLoading,
  children,
}) {
  const labelContent = label && label !== '' && (
    <div className={stylesheet.headerContainer}>
      <h2>{label}</h2>
      <Icon
        icon="x"
        onClick={onClose}
        className={stylesheet.closeIcon}
      />
    </div>
  );

  const containerClass = classNames(className, stylesheet.contentContainer, {
    [stylesheet.loading]: loading,
  });

  const bodyContent = loading ? <LoadingComponent /> : children;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={label}
      className={{
        base: stylesheet.modalContainer,
      }}
      overlayClassName={{
        base: stylesheet.overlayContainer,
      }}
    >
      {labelContent}
      <div className={containerClass}>
        {bodyContent}
      </div>
    </Modal>
  );
}
