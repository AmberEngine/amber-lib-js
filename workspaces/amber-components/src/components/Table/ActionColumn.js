import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import { Icon } from 'amber-content';

import { enhanceWithRowData } from './Enhancers';
import IconButton from '../IconButton';
import SquareSelect from '../SquareSelect';

// import stylesheet from './List.scss';
import stylesheet from './ActionColumn.scss';

class ActionColumn extends Component {
  static propTypes = {
    rowData: PropTypes.object.isRequired,
  }

  onMore = (e) => {
    e.stopPropagation();
    const { rowData, griddleKey: index, cellProperties: { onMore } } = this.props;
    onMore(rowData, index);
  }

  onSelect = (e) => {
    e.stopPropagation();
    const { rowData, griddleKey: index, cellProperties: { onSelect } } = this.props;
    onSelect(rowData, index);
  }

  onRemove = (e) => {
    e.stopPropagation();
    const { rowData, griddleKey: index, cellProperties: { onRemove } } = this.props;
    onRemove(rowData, index);
  }

  onDownload = (e) => {
    e.stopPropagation();
    const { rowData, griddleKey: index, cellProperties: { onDownload } } = this.props;
    onDownload(rowData, index);
  }

  renderMoreSection() {
    const { cellProperties: { onMore } } = this.props;

    return onMore && (
      <IconButton
        icon="left-arrow"
        onClick={this.onMore}
        className={stylesheet.iconButton}
      />
    );
  }

  renderSelectSection() {
    const { rowData, cellProperties: { onSelect, isSelected } } = this.props;
    if (!onSelect) {
      return null;
    }

    const selected = isSelected(rowData);
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
    const { cellProperties: { onRemove } } = this.props;
    return onRemove && (
      <IconButton
        icon="x"
        onClick={this.onRemove}
        className={stylesheet.iconButton}
      />
    );
  }

  renderDownloadSection() {
    const { cellProperties: { onDownload } } = this.props;
    return onDownload && (
      <Icon
        icon="download"
        className={stylesheet.exportDownload}
        onClick={this.onDownload}
      />
    );
  }

  render() {
    return (
      <div className={stylesheet.actionColumnContainer}>
        {this.renderSelectSection()}
        {this.renderDownloadSection()}
        {this.renderMoreSection()}
        {this.renderRemoveSection()}
      </div>
    );
  }
}

export default enhanceWithRowData(ActionColumn);
