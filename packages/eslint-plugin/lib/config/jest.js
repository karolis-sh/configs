module.exports = {
  extends: ['plugin:jest/all'],
  ruels: {
    'jest/consistent-test-it': ['error', { fn: 'it' }],
  },
};
