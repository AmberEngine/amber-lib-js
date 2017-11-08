import React, { Component } from 'react';
import classNames from 'classnames';
import { compose, mapProps } from 'recompose';
import { selectors, utils } from 'griddle-react';
const { connect } = utils;
const { rowPropertiesSelector } = selectors;

import { pureEnhanceWithRowData } from './Enhancers';

import stylesheet from './LinkRow.scss';

class Row extends Component {
  onClick = () => {
    const { rowData, onClick } = this.props;
    if (onClick) {
      onClick(rowData);
    }
  }

  render() {
    const {
      rowData,
      Cell,
      griddleKey,
      columnIds,
      style,
      className,
      getRowClass,
      onClick,
    } = this.props;

    const rowClass = classNames(className, {
      [stylesheet.link]: !!onClick,
    }, getRowClass ? getRowClass(rowData) : null);

    return (
      <tr
        key={griddleKey}
        style={style}
        className={rowClass}
        onClick={this.onClick}
      >
        { columnIds && columnIds.map(c => (
          <Cell
            key={`${c}-${griddleKey}`}
            griddleKey={griddleKey}
            columnId={c}
            style={style}
            className={className}
            rowData={rowData}
          />
        ))}
      </tr>
    );
  }
}

export default compose(
  connect((state, props) => ({
    rowProperties: rowPropertiesSelector(state),
  })),
  mapProps(props => {
    const { rowProperties, ...otherProps } = props;

    return {
      ...otherProps,
      onClick: rowProperties.onClick,
      getRowClass: rowProperties.getRowClass,
    };
  }),
  pureEnhanceWithRowData,
)(Row);
