const globals = require('globals')

module.exports = {
  extends: ['standard', 'plugin:@typescript-eslint/recommended', 'prettier'],
  root: true,
  globals: {
    ...globals.node,
  },
  ignorePatterns: ['.eslintrc.js'],
}
