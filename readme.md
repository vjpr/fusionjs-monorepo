# Unofficial Example Fusionjs Monorepo

> An example of how the fusionjs codebase could be as a monorepo.

## Getting Started

```
npm i -g pnpm
pnpm m link --ignore-scripts
```

## How it works?

You have 3 repos:

- github.com/fusionjs/fusionjs-public-packages.git
- github.com/fusionjs/fusionjs-monorepo.git
- (private) github.com/uber/fusionjs-monorepo.git

**github.com/fusionjs/fusionjs-monorepo.git**

- packages
  - public -> subtree of github.com/fusionjs/fusionjs-public-packages.git

**github.com/uber/fusionjs-monorepo.git**

- packages
  - public -> subtree of github.com/fusionjs/fusionjs-public-packages.git
  - private -> All your internal Uber plugins/packages

**github.com/fusionjs/fusionjs-public-packages.git**

This contains all the packages in `packages/public`.

## How to setup your monorepo subtrees?

Use https://github.com/ingydotnet/git-subrepo

## Publishing

You can use `lerna`.

## Test

```
pnpm m run test
pnpm m run test --scope X
```

---

## pnpm compatibility

Had to patch `create-universal-package` because of an issue with pnpm and `args`.

See `packages/public/create-universal-package/packages/create-universal-package/bin/index.js:9`

All packages link to `create-universal-package` in this repo now too.

`fusion-react-async` wasn't linking to it because it was fixed to version `create-universal-package@3.4.4`, so `pnpm m link` wouldn't link to it. I bumped the version.
