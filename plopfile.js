module.exports = (plop) => {
  plop.setGenerator('basic-library', {
    description: 'Add a basic library to amber-lib-js',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'the name of your library',
    }],
    actions: [{
      type: 'addMany',
      templateFiles: 'templates/library/**',
      destination: 'workspaces/{{name}}/',
      base: 'templates/library'
    }, {
      type: 'add',
      templateFile: 'templates/library/.gitignore',
      path: 'workspaces/{{name}}/.gitignore'
    }],
  });
  plop.setGenerator('component-library', {
    description: 'Add a component library to amber-lib-js with stories',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'the name of your library',
    }],
    actions: [{
      type: 'addMany',
      templateFiles: 'templates/component-lib/**',
      destination: 'workspaces/{{name}}/',
      base: 'templates/component-lib'
    }, {
      type: 'add',
      templateFile: 'templates/component-lib/.gitignore',
      path: 'workspaces/{{name}}/.gitignore'
    }],
  });
};
