import join from '../../src/url/join';

it('测试 join 方法', () => {

  expect(join('http://www.baidu.com/', '/api', 'test')).toBe('http://www.baidu.com/api/test');
  expect(join('http://www.baidu.com', 'api', 'test')).toBe('http://www.baidu.com/api/test');
  expect(join('http://www.baidu.com', null, 'test')).toBe('http://www.baidu.com/test');
  expect(join('http://www.baidu.com', undefined)).toBe('http://www.baidu.com');
  expect(join(null, undefined, 'test')).toBe('/test');
  expect(join(null, 'test', undefined)).toBe('/test');
  expect(join(null)).toBe(null);

});
