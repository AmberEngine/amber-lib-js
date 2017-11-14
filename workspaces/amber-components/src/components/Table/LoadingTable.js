import React from 'react';
import loadingGif from '@amber-engine/amber-content/lib/img/AmberCirclesAnimated.gif';

import stylesheet from './LoadingTable.scss';

export default function LoadingTable(props) {
  const {
    loading,
    TableHeading,
    TableBody,
    style,
    className,
  } = props;
  const tableBodyContent = loading ? (
    <tbody>
      <tr>
        <td colSpan="100">
          <div className={stylesheet.loading}>
            <img src={loadingGif} alt="loading" />
          </div>
        </td>
      </tr>
    </tbody>
  ) : (
    TableBody && <TableBody />
  );

  return (
    <table style={style} className={className}>
      { TableHeading && <TableHeading /> }
      {tableBodyContent}
    </table>
  );
}
