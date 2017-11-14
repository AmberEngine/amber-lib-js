# Amber Components (js)
A wonderful place for all of our shareable components! :information_desk_person:

# Getting Started
Install `amber-components` using `yarn`:
```
yarn add @amber-engine/amber-components
```

There's some additional `webpack` configuration necessary noted in the [Webpack Configuration](https://github.com/AmberEngine/amber-lib-js#webpack-configuration) section.

Need a `Button` component that adheres to our brand standard?
```
import { components } from '@amber-engine/amber-components';
const { Button } = components;
```
Sweet!


## Webpack Configuration
The `amber-lib-js` project should have all of its dependencies included in the project, _but_ the library is simply transpiled by `babel` rather than completely bundlec by `webpack` (usually you'll be doing this in your project).

Make sure you have a way to load the following:

| type  | notes |
|---|---|
|`scss` | For loading styles referenced in shared components |
|`svg` | For loading icons! |

Rather than including a specific path to resolve content included in `amber-lib-js`, you'll need to include these files via a regex in the Webpack loader.

### Example (for SVG):
```
{
  test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg/],
  loader: require.resolve('url-loader'),
  exclude: [
    /icons/,
  ],
},
{
  test: /\.svg$/,
  include: [
    /icons/,
  ],
  use: [
    { loader: 'babel-loader' },
    {
      loader: 'react-svg-loader',
      options: { jsx: true },
    },
  ],
},
```

To see how things are being used in a real project, check out the Apollo project!

## Components

### Button
A standard, styled button.

**Properties**

| name  | type | notes |
|---|---|---|
|`onClick` | function |For loading styles referenced in shared components |
|`type` | string | For loading styles referenced in shared components.  Can be `['login', 'export', 'import', 'importNew', 'logout']` |
|`className` | string **optional** | The class to apply to the button element. |

Example:
```
<Button
  onClick={this.executeThing}
  type="import"
  className={stylesheet.extraBigText}
>
  Import!
</Button>
```

### Dropdown

### Form

### Icon

### IconButton

### Modal

### Pagination

### RoundRectangle

### SquareSelect

### Table
