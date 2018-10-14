/** @format */

var babelCore = require('@babel/core');
var fs = require('fs');

const source = fs.readFileSync('src/index.js', 'utf8');

fs.writeFileSync(
  __dirname + '/lib/index.js',
  babelCore.transform(source, {
    babelrc: false,
    plugins: ['babel-plugin-inferno', '@babel/plugin-syntax-jsx'],
    presets: ['@babel/preset-env', '@babel/preset-flow']
  }).code,
  'utf8'
);
fs.writeFileSync(
  __dirname + '/lib/index.min.js',
  babelCore.transform(source, {
    plugins: ['babel-plugin-inferno', '@babel/plugin-syntax-jsx'],
    presets: ['@babel/preset-env', '@babel/preset-flow', 'minify']
  }).code,
  'utf8'
);
