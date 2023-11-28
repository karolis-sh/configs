# `@k.sh/typescript-config`

[![npm version][package-version-badge]][package-version]
[![License: MIT](https://img.shields.io/badge/license-mit-yellow.svg)](https://opensource.org/licenses/MIT)

> A `tsconfig.json` preset with best practices enabled

## Installation

`npm i -D @k.sh/typescript-config`

## Setup

1. Update `tsconfig.json`

```sh
cat << EOT > tsconfig.json
{
  "extends": "@k.sh/typescript-config/config.json"
}
EOT
```

## References

- [Mike's "bare bones" TS setup](https://github.com/mike-north/professional-ts/blob/master/notes/04-mikes-ts-setup.md)

[package-version-badge]: https://badge.fury.io/js/@k.sh%2Ftypescript-config.svg
[package-version]: https://www.npmjs.com/package/@k.sh/typescript-config
