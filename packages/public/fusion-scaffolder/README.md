[![Build status](https://badge.buildkite.com/563f51722957765c351dcfc3980a0dc0e96a674cc3b6afcd41.svg?branch=master)](https://buildkite.com/uberopensource/fusion-scaffolder)

# fusion-scaffolder

Scaffolds new projects from templates.

## Installation

Requires node 8.0.0 or above.

```
yarn add fusion-scaffolder
```

# Usage

As an API:

```js
import scaffold from 'fusion-scaffolder';

scaffold({
  path: 'path/to/template',
  project: 'project-name'
}).then(...).catch(...);
```

As a CLI:

```
Usage: fusion-scaffold <path-to-template> <project-name>

Options:

  -h, --help     Output usage information
  -v, --version  Output the version number
```

# Template

The template from which a project is scaffolded MUST have a `content/` folder and an `index.js` file at the root. The `content/` folder will hold the template files that will be used in a newly scaffolded project. The `index.js` file will be called prior to scaffolding in order to gather required context/values to be passed to files that are compiled via nunjucks. Any `.njk` file in the `content/` folder will be compiled with nunjucks, using values obtained via the scaffold CLI as well as the implementation of `index.js`, and the `.njk` extension will be removed upon scaffolding.
