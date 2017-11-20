# Amber Lib (js)
A wonderful place for all of our shareable components! :information_desk_person:
* **Shared components**: No more copy-pasting. Share your components with the world (of Amber Engine)!
* **Storybooks**: Easily see what's available for your project by checking out the `storybook`. Run `yarn start` and navigate to `http://localhost:6006`!

# API
* [Components](./workspaces/amber-components/README.md)

# Getting Started
Install `amber-lib-js` using `yarn`:
```
yarn add @amber-engine/amber-lib
```

There's some additional `webpack` configuration necessary noted in the [Webpack Configuration](https://github.com/AmberEngine/amber-lib-js#webpack-configuration) section.

Need a `Button` component that adheres to our brand standard?
```
import { components } from 'amber-lib-js';
const { Button } = components;
```
Sweet!


## Webpack Configuration
The `amber-lib-js` project should have all of its dependencies included in the project, _but_ the library is simply transpiled by `babel` rather than completely bundled by `webpack` (usually you'll be doing this in your project).

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

## Development
### Available Commands
| command  | notes |
|---|---|
|`yarn new` | Starts process to create a new package |
|`yarn clean` | Cleans build artifacts for all packages. |
|`yarn build` | Builds all packages. |
|`yarn ship` | Starts publish process noted in the [Deploying Changes](https://github.com/AmberEngine/amber-lib-js#deploying-changes) Section. |
|`yarn start` | Starts the library's [Storybook](https://storybook.js.org/) |

### Deploying Changes
After a change has been made and merged into `master`, you'll need to deploy your changes to `npm`.

### Connecting your NPM Account
Create an [`npm`](https://www.npmjs.com/) account and login on your machine by running `npm adduser`.

You'll also need to be added to the [Amber Engine `npm` organization](https://www.npmjs.com/org/amber-engine), which will need to be done by an existing member.

### Deploying to NPM
Build all packages by running `yarn build` followed up by `yarn ship`.

When running `yarn ship`, you'll be prompted with [Lerna](https://github.com/lerna/lerna)'s deployment helper.

![yarn ship](https://github.com/AmberEngine/amber-lib-js/blob/master/docs/ship.jpg?raw=true)

We should be following [semver](https://semver.org/) for all packages, which means that we should be making updates in the following format:

| Type | When |
|---|---|
| MAJOR | When you make a change that could break previous usage (no matter how small) |
| MINOR | When you add functionality that won't break previous usage of the package. |
| PATCH | When you make a bug fix that won't break previous usage of the package. |

## Adding a new package
The `amber-lib-js` project uses [Plop](https://github.com/amwmedia/plop) to make generating new packages easy. Just run `yarn plop` and you'll be prompted for your package's name + what kind of project it is and it will automatically be created and configured in the `workspaces` directory.
