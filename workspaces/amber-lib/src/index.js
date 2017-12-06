import {
  components as SharedComponents,
  utils as SharedUtils,
} from '@amber-engine/amber-components';
import Form from 'unformed';
import FormFields from 'unformed-fields';
import { Icon, resources as ContentResources } from '@amber-engine/amber-content';
import { components as AnalyticsComponents, analytics } from '@amber-engine/amber-analytics';

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
  AnalyticsComponents,
};

export const utils = {
  ...FormUtils,
  ...SharedUtils,
  analytics,
};

export const resources = {
  ...ContentResources,
};

import * as self from './index';
export default self;
