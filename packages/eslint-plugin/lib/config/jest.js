module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  rules: {
    'jest/consistent-test-it': ['error', { fn: 'it' }],
  },
};
