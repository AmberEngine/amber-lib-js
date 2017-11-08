import React, { Component, PropTypes } from 'react';
import Griddle from 'griddle-react';
import classNames from 'classnames';

import SortIcon from './SortIcon';
import TableLayout from './TableLayout';
import stylesheet from './Table.scss';

const defaultClassNames = {
  Layout: stylesheet.layoutContainer,
  Table: stylesheet.tableContent,
  // Row: stylesheet.separatedRow,
  Cell: stylesheet.cell,
  TableHeadingCell: classNames(stylesheet.cell, stylesheet.hoverPreview),
};

const defaultCustomComponents = {
  Layout: TableLayout,
  NextButton: () => null,
  PreviousButton: () => null,
};

const getStyleConfig = customStyleConfig => {
  const styleConfig = { classNames: {}, styles: {}, ...customStyleConfig };
  return {
    icons: {
      TableHeadingCell: {
        sortDescendingIcon: <SortIcon icon="down-arrow" />,
        sortAscendingIcon: <SortIcon icon="up-arrow" />,
      },
    },
    classNames: Object.keys(defaultClassNames).reduce((combined, key) => {
      return {
        ...combined,
        [key]: classNames(defaultClassNames[key], styleConfig.classNames[key]),
      };
    }, {}),
  };
};

export default class RemoteTable extends Component {
  static propTypes = {
    onSort: PropTypes.func,
    onNext: PropTypes.func,
    onPrevious: PropTypes.func,
    onGetPage: PropTypes.func,
    customComponents: PropTypes.object,
  };

  defaultProps = {
    onFilter: () => null,
    onSort: () => null,
    onNext: () => null,
    onPrevious: () => null,
    onGetPage: () => null,
    customComponents: {},
  };

  constructor(props, context) {
    super(props, context);
    const { onSort, onNext, onPrevious, onGetPage } = props;

    this.state = {
      events: {
        onSort,
        onNext,
        onPrevious,
        onGetPage,
      },
    };
  }

  render() {
    const {
      data,
      styleConfig,
      customComponents,
      children,
      ...restProps
    } = this.props;
    const { events } = this.state;

    return (
      <Griddle
        data={data}
        events={events}
        styleConfig={getStyleConfig(styleConfig)}
        components={{
          ...defaultCustomComponents,
          ...customComponents,
        }}
        storeKey="table"
        {...restProps}
      >
        {children}
      </Griddle>
    );
  }
}
