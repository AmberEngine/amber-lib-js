module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: true
  },
  webpack: {
    rules: {
      'sass-css': {
        modules: true,
        localIdentName:  '[hash:base64:5]'
      },
    }
  }
}
