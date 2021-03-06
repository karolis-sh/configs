# `@k.sh/eslint-config-typescript`

[![npm version][package-version-badge]][package-version]
[![License: MIT](https://img.shields.io/badge/license-mit-yellow.svg)](https://opensource.org/licenses/MIT)

> An ESLint config with best practices enabled for TypeScript projects

## Installation

`yarn add -D @k.sh/eslint-config-typescript @k.sh/eslint-config`

## Setup

1. Update ESLint config

```sh
cat <<EOT > .eslintrc.json
{
  "extends": "@k.sh",
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "extends": "@k.sh/eslint-config-typescript"
    }
  ]
}
EOT
```

[package-version-badge]: https://badge.fury.io/js/@k.sh%2Feslint-config-typescript.svg
[package-version]: https://www.npmjs.com/package/@k.sh/eslint-config-typescript
