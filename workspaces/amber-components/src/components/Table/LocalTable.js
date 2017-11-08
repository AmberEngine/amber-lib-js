import React, { Component, PropTypes } from 'react';
import Griddle, { plugins } from 'griddle-react';
import classNames from 'classnames';

import SortIcon from './SortIcon';
import ListLayout from './ListLayout';
import stylesheet from './Table.scss';

const defaultClassNames = {
  Layout: stylesheet.layoutContainer,
  Table: stylesheet.tableContent,
  Row: stylesheet.separatedRow,
  Cell: stylesheet.cell,
  TableHeading: null,
  TableHeadingCell: classNames(stylesheet.cell, stylesheet.hoverPreview),
};

const getStyleConfig = (customStyleConfig) => {
  const styleConfig = { classNames: {}, styles: {}, ...customStyleConfig };
  return {
    icons: {
      TableHeadingCell: {
        sortDescendingIcon: <SortIcon icon="down-arrow" />,
        sortAscendingIcon: <SortIcon icon="up-arrow" />,
      },
    },
    classNames: Object.keys(defaultClassNames)
      .reduce((combined, key) => {
        return {
          ...combined,
          [key]: classNames(defaultClassNames[key], styleConfig.classNames[key]),
        };
      }, {}),
  };
};

export default class LocalTable extends Component {
  static propTypes = {
    data: PropTypes.array,
    children: PropTypes.any,
  }

  state = {
    sortProperties: this.props.sortProperties,
  }

  componentWillReceiveProps(nextProps) {
    // After the initial render, allow Griddle to control sorting.
    // Leaving this tied to props will reset the sorting on every data change.
    this.setState({ sortProperties: undefined });
  }

  render() {
    const { data, children, customComponents, styleConfig, ...restProps } = this.props;
    const { sortProperties } = this.state;

    return (
      <Griddle
        data={data}
        plugins={[plugins.LocalPlugin]}
        styleConfig={getStyleConfig(styleConfig)}
        components={{
          Layout: ListLayout,
          ...customComponents,
        }}
        {...restProps}
        sortProperties={sortProperties}
        storeKey="table"
      >
        {children}
      </Griddle>
    );
  }
}
