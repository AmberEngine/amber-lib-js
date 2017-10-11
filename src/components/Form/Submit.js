import React from 'react';

import { onClickSubmitEnhancer } from './Enhancers';

import Button from '../Button';

export default onClickSubmitEnhancer((props) => {
  const { children, ...restProps } = props;
  return (
    <Button {...restProps}>
      {children}
    </Button>
  );
});
