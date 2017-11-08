import React from 'react';
import classNames from 'classnames';
import PlusCircle from '../PlusCircle';
import stylesheet from './TableWrapper.scss';

export default function TableWrapper({ title, name, onClickAdd, children }) {
  const addContent = !!onClickAdd && (
    <PlusCircle
      className={classNames('pull-right', stylesheet.button)}
      onClick={onClickAdd}
    />
  );

  return (
    <div>
      <div className={stylesheet.wrapper}>
        <h2 className={stylesheet.title}>
          {title}
          {name && (
            <span className={stylesheet.coralText}>{` ${name}`}</span>
          )}
        </h2>
        {addContent}
      </div>
      {children}
    </div>
  );
}
