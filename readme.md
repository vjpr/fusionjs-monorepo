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
