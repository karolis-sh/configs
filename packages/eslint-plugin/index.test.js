const path = require('path');

const { ESLint } = require('eslint');

const { configs } = require('.');

const NODE_MODULES_DIR = path.resolve(
  path.dirname(require.resolve('eslint/package.json')),
  '..',
);

Object.entries(configs).forEach(([name, config]) => {
  it(`should load ${name} configuration`, async () => {
    const eslint = new ESLint({ useEslintrc: false, baseConfig: config });
    const result = await eslint.calculateConfigForFile('index.js');

    if (result.parser?.startsWith(NODE_MODULES_DIR)) {
      result.parser = result.parser.replace(NODE_MODULES_DIR, '<node_modules>');
    }

    expect(result).toMatchSnapshot();
  });
});
