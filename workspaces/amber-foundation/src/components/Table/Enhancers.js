import { selectors, utils } from 'griddle-react';
const { connect } = utils;
import { compose, branch, mapProps, onlyUpdateForKeys } from 'recompose';

export const pureEnhanceWithRowData = branch(
  ({ rowData }) => !rowData,
  compose(
    connect((state, { griddleKey }) => {
      return {
        rowData: state.get('data')
          .find(r => r.get('griddleKey') === griddleKey),
      };
    }),
    onlyUpdateForKeys(['rowData']),
    mapProps(props => {
      const { rowData, ...restProps } = props;
      return {
        ...restProps,
        rowData: rowData.toJSON(),
      };
    }),
  ),
);

export const enhanceWithRowData = compose(
  connect((state, props) => {
    return {
      rowData: selectors.rowDataSelector(state, props),
    };
  }),
);
