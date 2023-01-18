const { ESLint } = require('eslint');

const { configs } = require('.');

Object.entries(configs).forEach(([name, config]) => {
  it(`should load ${name} configuration`, async () => {
    const eslint = new ESLint({ useEslintrc: false, baseConfig: config });
    const result = await eslint.calculateConfigForFile('index.js');
    expect(result).toMatchSnapshot();
  });
});
