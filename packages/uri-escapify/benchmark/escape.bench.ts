import escape from '../src/escape';

export default [{
  '[encodeURIComponent]'() {
    encodeURIComponent('hello world');
  },
  '[escape]'() {
    escape('hello world');
  }
}, {
  '[encodeURIComponent]'() {
    encodeURIComponent('中文@示例');
  },
  '[escape]'() {
    escape('中文@示例');
  }
}];
