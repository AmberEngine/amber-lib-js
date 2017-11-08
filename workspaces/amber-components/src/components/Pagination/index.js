import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Icon } from 'amber-content';

import stylesheet from './Pagination.scss';

class Pagination extends PureComponent {
  onSetPage(page) {
    const { maxPages, setPage } = this.props;
    if (page < 1 || page > maxPages) return;
    if (setPage) {
      setPage(page);
    }
  }

  /*
    Prepare array of pages we want to display in the pagination component
    with ellipses replacing missing pages.
    Returns an array filled with numbers representing pages
    and `false` values representing ellipses.
  */
  prepareLayout() {
    const { maxPages, currentPage } = this.props;
    let layout = [];

    // NOTE: If pages total is 5 or less display all:
    if (maxPages <= 10) {
      for (let i = 1; i <= maxPages; i++) {
        layout.push(i);
      }
    }

    // NOTE: Ellipses in the second to last position
    if (maxPages > 10 && currentPage < 6) {
      layout = [1, 2, 3, 4, 5, 6, false, maxPages];
    }

    // NOTE: Two ellipses in second and second to last positions
    if (maxPages > 10 && currentPage >= 6 && currentPage < maxPages) {
      layout = [
        1,
        false,
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
        false,
        maxPages,
      ];
    }

    // NOTE: Ellipses in the second position
    if (maxPages > 10 && currentPage >= maxPages - 4) {
      layout = [1, false, maxPages - 5, maxPages - 4, maxPages - 3,
        maxPages - 2, maxPages - 1, maxPages];
    }

    return layout;
  }

  mappingLayout (arr) {
    const { currentPage } = this.props;

    return arr.map((num, idx) => {
      if (num === false) {
        return (
          <div
            className={classNames(stylesheet.box, stylesheet.ellipsis)}
            key={`${idx}`}
          >
            ...
          </div>
        );
      }
      return (
        <div
          key={idx}
          className={classNames(
            stylesheet.box,
            (num === currentPage) && stylesheet.active,
          )}
          onClick={() => this.onSetPage(num)}
          role="button"
          tabIndex="0"
        >
          {num}
        </div>
      );
    });
  }

  render() {
    const { currentPage, maxPages } = this.props;

    return (
      <div className={classNames(stylesheet.pagination)}>
        <div
          className={classNames(
            stylesheet.box,
            stylesheet.chevron,
            (currentPage === 1) && stylesheet.chevronInactive,
          )}
          onClick={() => this.onSetPage(currentPage - 1)}
          role="button"
          tabIndex="0"
        >
          <Icon icon="left-arrow" />
        </div>
        {this.mappingLayout(this.prepareLayout())}
        <div
          className={classNames(
            stylesheet.box,
            stylesheet.chevron,
            (currentPage === maxPages - 1) && stylesheet.chevronInactive,
          )}
          onClick={() => this.onSetPage(currentPage + 1)}
          role="button"
          tabIndex="0"
        >
          <Icon icon="right-arrow" />
        </div>
      </div>
    );
  }
}

export default Pagination;
