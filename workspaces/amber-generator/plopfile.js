module.exports = (plop) => {
  plop.setGenerator('library', {
    description: 'Add a new library to amber-lib-js',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'the name of your library',
    }],
    actions: [{
      type: 'addMany',
      templateFiles: 'templates/library/**',
      destination: '../{{name}}/',
      base: 'templates/library'
    }, {
      type: 'add',
      templateFile: 'templates/library/.gitignore',
      path: '../{{name}}/.gitignore'
    }],
  });
};
