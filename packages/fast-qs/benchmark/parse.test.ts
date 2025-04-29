import { parse } from 'node:querystring';

import decode from '../../uri-escapify/src/unescape';
import parseQuery from '../src/parse';

const testData1 = 'frappucino=muffin&goat=scone&pond=moose&foo=bar&foo=baz';
const testData2 = 'q=%E4%B8%AD%E5%9B%BD&foo=bar&foo=baz&braces=%7B%7D';

const opts = { start: 0 };
const opts2 = { start: 0, decodeURIComponent: decode };

// 测试 parseQuery
export default [{
  '【node:querystring.parse】'() {
    parse(testData1);
  },

  '【fast-qs.parse】'() {
    parseQuery(testData1, opts);
  }
},
{
  '【node:querystring.parse】'() {
    parse(testData2);
  },

  '【fast-qs.parse】'() {
    parseQuery(testData2, opts);
  },

  '【fast-qs.parse with uri-escapify】'() {
    parseQuery(testData2, opts2);
  }
}];
