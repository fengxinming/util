import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

import { Properties } from '../src/Properties';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'test.properties');
// const filePath2 = join(__dirname, 'test2.properties');

describe('测试资源文件解析', () => {
  const props = new Properties();
  props.parse(readFileSync(filePath, 'utf8'));

  const props2 = new Properties();
  const kvStr = `# comment
key=value
# comment2
key2=value2
`;
  props2.parse(kvStr);

  it('读取数据', () => {
    expect(props.getProperty('jdbc.mysql.driver')).toBe('com.mysql.jdbc.Driver');
    expect(props.getProperty('jdbc.mysql.driver', 'name')).toBe('com.mysql.jdbc.Driver');
    expect(props.getProperty('unknownKey')).toBe(undefined);
    expect(props.getProperty('unknownKey', 'key')).toBe('key');
    expect(props.getProperty('jdbc.mysql .username')).toBe('test123456789');
    expect(props.getNumber('int')).toBe(1);
    expect(props.getNumber('int2')).toBe(NaN);
    expect(props.getNumber('int2', 2)).toBe(2);
    expect(props.getNumber('float')).toBe(3.1415926);
    expect(props.getBoolean('false')).toBe(false);
    expect(props.getBoolean('false2')).toBe(false);
    expect(props.getBoolean('bool')).toBe(true);
    expect(props.getBoolean('true2', false)).toBe(false);

    let i = props.size;
    props.forEach(() => {
      i--;
    });
    expect(i).toBe(0);

    const clone = props.clone();
    expect(clone.size).toBe(props.size);
    clone.forEach((value, key) => {
      expect(value).toBe(props.get(key));
    });

    for (const [key, value] of clone) {
      expect(value).toBe(props.get(key));
    }
  });

  it('检测集合', () => {
    expect(props.has('jdbc.mysql=maxActive')).toBe(true);
    expect(props.has('账 号')).toBe(false);

    expect(props.isEmpty()).toBe(false);
    expect(`${props}`).toBe('[object Properties]');
  });

  it('操作集合', () => {
    props.setProperty('newKey', 'newValue');

    expect(props.getProperty('newKey')).toBe('newValue');

    expect(props.replace('newKey', 'newValue2')).toBe(true);
    expect(props.replace('newKey2', 'newValue2')).toBe(false);

    expect(props.remove('newKey', 'newValue2')).toBe(true);
    expect(props.remove('jdbc.mysql .username')).toBe(true);
    expect(props.getProperty('jdbc.mysql .username')).toBe(undefined);

    expect(props.remove('jdbc.mysql.username')).toBe(false);
    expect(props.remove(null as any)).toBe(false);
    expect(props.remove(undefined as any)).toBe(false);
    expect(props.remove('jdbc.mysql.driver', '123')).toBe(false);
    expect(props.remove('jdbc .mysql.driver', '123')).toBe(false);
    expect(props.remove('newKey3', 'newValue3')).toBe(false);

    props.clear();
    expect(props.size).toBe(0);
  });

  it('测试字符串化', () => {
    expect(props2.stringify()).toBe(kvStr);
  });
});
