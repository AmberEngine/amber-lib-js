# Amber Lib (js)
A wonderful place for all of our shareable components! :information_desk_person:
* **Shared components**: No more copy-pasting. Share your components with the world (of Amber Engine)!
* **Storybooks**: Easily see what's available for your project by checking out the `storybook`. Run `yarn start` and navigate to `http://localhost:6006`!

# API
* [Components](./docs/components.md)

# Getting Started
Install `amber-lib-js` using `yarn`:
```
yarn add git+ssh://git@github.com/AmberEngine/amber-lib-js.git
```

There's some additional `webpack` configuration necessary noted in the [Webpack Configuration](https://github.com/AmberEngine/amber-lib-js#webpack-configuration) section.

Need a `Button` component that adheres to our brand standard?
```
import { components } from 'amber-lib-js';
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
