import { components, utils } from 'amber-components';
import Form from 'unformed';

import { components as ContentComponents } from 'amber-content';

export default {
  components: {
    ...components,
    ...ContentComponents,
    Form,
  },
  utils,
};
