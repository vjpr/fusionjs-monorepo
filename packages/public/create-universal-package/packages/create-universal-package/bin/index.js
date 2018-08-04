#!/usr/bin/env node

const args = require('args');
args
  .command('build', 'Build your package', ['b'])
  .command('build-tests', 'Build your tests')
  .command('clean', 'Clean build artifacts', ['c']);

process.argv[1] = process.argv[1].replace('index.js', 'cup')
args.parse(process.argv);
