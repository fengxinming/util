import unescape from '../src/unescape';

export default [{
  '[decodeURIComponent]'() {
    decodeURIComponent('hello%20world');
  },
  '[unescape]'() {
    unescape('hello%20world');
  }
}, {
  '[decodeURIComponent]'() {
    decodeURIComponent('%E4%B8%AD%E6%96%87');
  },
  '[unescape]'() {
    unescape('%E4%B8%AD%E6%96%87');
  }
}];
