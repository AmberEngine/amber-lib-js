import React from 'react';

export default function TableLayout({ Table, Pagination, className, style }) {
  return (
    <div>
      <div className={className} style={style}>
        <Table />
      </div>
      <br />
      <Pagination />
    </div>
  );
}
