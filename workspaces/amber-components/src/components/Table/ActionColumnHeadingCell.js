import React, { Component } from 'react';
import classNames from 'classnames';

import IconButton from '../IconButton';
import SquareSelect from '../SquareSelect';

// import stylesheet from './List.scss';
import stylesheet from './ActionColumn.scss';

class ActionColumn extends Component {
  onMore = () => {
    const { cellProperties: { onHeaderMore } } = this.props;
    onHeaderMore();
  }

  onSelect = () => {
    const { cellProperties: { onHeaderSelect } } = this.props;
    onHeaderSelect();
  }

  onRemove = () => {
    const { cellProperties: { onHeaderRemove } } = this.props;
    onHeaderRemove();
  }

  renderMoreSection() {
    const { cellProperties: { onHeaderMore } } = this.props;

    return onHeaderMore && (
      <IconButton
        icon="left-arrow"
        onClick={this.onMore}
        className={stylesheet.iconButton}
      />
    );
  }

  renderSelectSection() {
    const { cellProperties: { onHeaderSelect, isHeaderSelected } } = this.props;
    if (!onHeaderSelect) {
      return null;
    }
    const selected = isHeaderSelected();
    return (
      <button
        onClick={this.onSelect}
        className={classNames('btn btn-link btn-lg', stylesheet.btn)}
      >
        <SquareSelect selected={selected} />
      </button>
    );
  }

  renderRemoveSection () {
    const { cellProperties: { onHeaderRemove } } = this.props;
    return onHeaderRemove && (
      <IconButton
        icon="x"
        onClick={this.onRemove}
        className={stylesheet.iconButton}
      />
    );
  }

  render() {
    return (
      <div className={stylesheet.actionColumnContainer}>
        {this.renderSelectSection()}
        {this.renderMoreSection()}
        {this.renderRemoveSection()}
      </div>
    );
  }
}

export default ActionColumn;
