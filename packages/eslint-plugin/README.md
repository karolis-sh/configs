# `@k.sh/eslint-plugin`

[![npm version][package-version-badge]][package-version]
[![License: MIT](https://img.shields.io/badge/license-mit-yellow.svg)](https://opensource.org/licenses/MIT)

> An ESLint config with best practices enabled for JavaScript projects

## Installation

`npm i -D @k.sh/eslint-plugin eslint`

## Setup

1. Choose core config (`es5` | `esnext` | `typescript`):

```sh
cat << EOT > .eslintrc.json
{
  "extends": ["plugin:@k.sh/esnext"]
}
EOT
```

2. (**Optional**) Add any augmentations you're using (`jest`, `node`, `react`):

```json
{
  "extends": ["plugin:@k.sh/esnext", "plugin:@k.sh/node", "plugin:@k.sh/jest"]
}
```

3. (**Optional**) Finish off with prettier:

```json
{
  "extends": [
    "plugin:@k.sh/esnext",
    "plugin:@k.sh/node",
    "plugin:@k.sh/jest",
    "plugin:@k.sh/prettier"
  ]
}
```

## References

- [`@shopify/eslint-plugin`](https://github.com/Shopify/web-configs)

[package-version-badge]: https://badge.fury.io/js/@k.sh%2Feslint-plugin.svg
[package-version]: https://www.npmjs.com/package/@k.sh/eslint-plugin
