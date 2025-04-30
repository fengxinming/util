import replaceAll from '../src/index';

// 测试 max
const str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
const replacement = 'monkey';

export default {
  '【String.prototype.replace】': function () {
    str.replace(/dog/g, replacement);
  },

  '【String.prototype.replaceAll】': function () {
    str.replaceAll('dog', replacement);
  },

  '【replaceAll】': function () {
    replaceAll(str, 'dog', replacement);
  }
};
