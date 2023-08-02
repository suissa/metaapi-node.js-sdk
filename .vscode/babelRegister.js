require('@babel/register')({
  ignore: [/node_modules/],
  presets: [['@babel/preset-env', {targets: {node: '10'}}]],
  sourceMaps: 'inline',
  retainLines: true
});