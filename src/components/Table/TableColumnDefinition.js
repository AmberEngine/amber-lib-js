import React from 'react';
import { ColumnDefinition } from 'griddle-react';
import classNames from 'classnames';

import { sort } from '../../utils/sort';
import SortIcon from './SortIcon';

import stylesheet from './Table.scss';

function defaultSort(data, column, sortAscending = true) {
  const sortedData = data.sort((original, newRecord) => {
    return sort(original.get(column), newRecord.get(column));
  });
  return sortAscending ? sortedData : sortedData.reverse();
}

const DefaultTableHeadingCellContent = ({ title, icon, cellProperties }) => {
  const displayIcon = cellProperties.sortable === false
    ? null
    : icon || <SortIcon icon="up-arrow" preview />;

  return (
    <span
      className={classNames({
        [stylesheet.selectedHeader]: !!icon,
      })}
    >
      {title}
      {displayIcon}
    </span>
  );
};

export default class TableColumnDefinition extends ColumnDefinition {
  static defaultProps = {
    customHeadingComponent: DefaultTableHeadingCellContent,
    sortMethod: defaultSort,
  }
}
