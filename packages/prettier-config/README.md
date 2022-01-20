# `@k.sh/prettier-config`

[![npm version][package-version-badge]][package-version]
[![License: MIT](https://img.shields.io/badge/license-mit-yellow.svg)](https://opensource.org/licenses/MIT)

> A `tsconfig.json` preset with best practices enabled

## Installation

`yarn add -D @k.sh/prettier-config prettier`

## Setup

1. Create config file

```sh
echo "module.exports = require('@k.sh/prettier-config');" > .prettierrc.js
```

2. Create a `.prettierignore`

```
*
!*/
!*.json
!*.md
!*.yml
!*.js

# npm files
node_modules
package.json
```

[package-version-badge]: https://badge.fury.io/js/@k.sh%2Fprettier-config.svg
[package-version]: https://www.npmjs.com/package/@k.sh/prettier-config
