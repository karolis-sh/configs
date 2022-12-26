module.exports = {
  extends: [
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-formatting/recommended',
  ],
  env: {
    'jest/globals': true,
  },
  rules: {
    'jest/consistent-test-it': ['error', { fn: 'it' }],
  },
};
