module.exports = {
  arrowParens: 'always',
  singleQuote: true,
  trailingComma: 'all',
  // https://github.com/un-ts/prettier/issues/249
  overrides: [
    {
      files: ['.env', '.env.*'],
      options: {
        parser: 'sh',
      },
    },
  ],
};
