module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'module',
  },
  rules: {
    'no-undef': ['off'],
    'no-irregular-whitespace': ['off'],
    'prefer-template': ['off'],
    'comma-dangle': ['off'],
    'import/no-dynamic-require': ['off'],
    'max-len': ['off'],
    'nonblock-statement-body-position': ['off'],
    'no-new': ['off'],
    'no-return-await': ['off'],
    'spaced-comment': ['off'],
    curly: ['off'],
    semi: [0, 'always'],
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    Promise: true,
    sails: true,
    _: true,
  },
}
