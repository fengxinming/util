import isUndefined from '../isUndefined';
import isNil from '../isNil';
import isObject from '../isObject';
import forIn from '../_internal/_forIn';
import checkDom, { firstNode } from '../_internal/_dom/_checkDom';
import expandoStore from '../_internal/_dom/_expandoStore';

/**
 * 缓存数据
 * @param {Node|NodeList} dom
 * @param {String} key
 * @param {*} value
 */
export default function (dom, key, value) {
  if (isObject(key)) { // setter
    checkDom(dom, (element) => {
      let data = expandoStore(element, 'data');
      if (!data) {
        expandoStore(dom, 'data', data = {});
      }
      forIn(key, (n, k) => {
        data[k] = n;
      });
    });
    return dom;
  } else if (isNil(key)) { // get all
    dom = firstNode(dom);
    return dom && expandoStore(dom, 'data');
  } else if (isUndefined(value)) { // getter
    let data = expandoStore(dom, 'data');
    return data && data[key];
  } else {
    checkDom(dom, (element) => {
      let data = expandoStore(element, 'data');
      if (!data) {
        expandoStore(element, 'data', data = {});
      }
      data[key] = value;
    });
    return dom;
  }
}
