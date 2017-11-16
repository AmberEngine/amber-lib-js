import { components, utils } from '@amber-engine/amber-components';
import Form from 'unformed';
import FormFields from 'unformed-fields';

import { components as ContentComponents } from '@amber-engine/amber-content';

export default {
  components: {
    ...components,
    ...ContentComponents,
    FormComponents: {
      ...Form,
      Fields: {
        ...Form.Fields,
        ...FormFields,
      }
    },
  },
  utils,
};
