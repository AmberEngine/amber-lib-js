import {
  components as SharedComponents,
  utils as SharedUtils,
} from '@amber-engine/amber-components';
import Form from 'unformed';
import FormFields from 'unformed-fields';
import { Icon } from '@amber-engine/amber-content';

const {
  FormSuccessSection,
  FormErrorSection,
  FormSubmit,
  ...OtherSharedComponents
} = SharedComponents;

const { utils: FormUtils, ...FormComponents } = Form;

export const components = {
  ...OtherSharedComponents,
  Icon,
  FormComponents: {
    ...FormComponents,
    SuccessSection: FormSuccessSection,
    ErrorSection: FormErrorSection,
    Submit: FormSubmit,
    Fields: {
      ...Form.Fields,
      ...FormFields,
    },
  },
};

export const utils = {
  ...FormUtils,
  ...SharedUtils,
};

import * as self from './index';
export default self;
