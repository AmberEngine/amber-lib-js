import { components, utils } from '@amber-engine/amber-components';
import Form from 'unformed';

import { components as ContentComponents } from '@amber-engine/amber-content';

export default {
  components: {
    ...components,
    ...ContentComponents,
    Form,
  },
  utils,
};
