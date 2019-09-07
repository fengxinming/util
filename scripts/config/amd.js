'use strict';

const { resolve, releaseDir } = require('../util');

function configure(input, output) {
  return {
    isProd: true,
    inputOptions: {
      input
    },
    outputOptions: {
      file: output,
      format: 'amd',
      legacy: false,
      esModule: false
    }
  };
}

module.exports = [
  configure(resolve('src/index.js'), releaseDir(`amd.js`))
];
