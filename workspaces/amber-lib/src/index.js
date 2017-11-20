import { components, utils } from '@amber-engine/amber-components';
import Form from 'unformed';
import FormFields from 'unformed-fields';

import { Icon } from '@amber-engine/amber-content';

export default {
  components: {
    ...components,
    Icon,
    FormComponents: {
      ...Form,
      Fields: {
        ...Form.Fields,
        ...FormFields,
      },
    },
  },
  utils,
};
