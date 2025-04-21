import { describe, expect, test } from 'vitest';

import { camelize } from '../src/camelize';

function withLocaleCaseFunctionsMocked(fn) {
  const throwWhenBeingCalled = () => {
    throw new Error('Should not be called');
  };

  const toLocaleUpperCase = Object.getOwnPropertyDescriptor(String.prototype, 'toLocaleUpperCase');
  const toLocaleLowerCase = Object.getOwnPropertyDescriptor(String.prototype, 'toLocaleLowerCase');

  Object.defineProperty(String.prototype, 'toLocaleUpperCase', {
    ...toLocaleUpperCase,
    value: throwWhenBeingCalled
  });
  Object.defineProperty(String.prototype, 'toLocaleLowerCase', {
    ...toLocaleLowerCase,
    value: throwWhenBeingCalled
  });

  try {
    fn();
  }
  finally {
    Object.defineProperty(String.prototype, 'toLocaleUpperCase', toLocaleUpperCase!);
    Object.defineProperty(String.prototype, 'toLocaleLowerCase', toLocaleLowerCase!);
  }
}

describe('Test camelize', () => {
  test('camelize', () => {
    expect(camelize('b2b_registration_request')).toBe('b2bRegistrationRequest');
    expect(camelize('b2b-registration-request')).toBe('b2bRegistrationRequest');
    expect(camelize('b2b_registration_b2b_request')).toBe('b2bRegistrationB2bRequest');
    expect(camelize('foo')).toBe('foo');
    expect(camelize('IDs')).toBe('ids');
    expect(camelize('FooIDs')).toBe('fooIds');
    expect(camelize('foo-bar')).toBe('fooBar');
    expect(camelize('foo-bar-baz')).toBe('fooBarBaz');
    expect(camelize('foo--bar')).toBe('fooBar');
    expect(camelize('--foo-bar')).toBe('fooBar');
    expect(camelize('--foo--bar')).toBe('fooBar');
    expect(camelize('FOO-BAR')).toBe('fooBar');
    expect(camelize('FOÈ-BAR')).toBe('foèBar');
    expect(camelize('-foo-bar-')).toBe('fooBar');
    expect(camelize('--foo--bar--')).toBe('fooBar');
    expect(camelize('foo-1')).toBe('foo1');
    expect(camelize('foo.bar')).toBe('fooBar');
    expect(camelize('foo..bar')).toBe('fooBar');
    expect(camelize('..foo..bar..')).toBe('fooBar');
    expect(camelize('foo_bar')).toBe('fooBar');
    expect(camelize('__foo__bar__')).toBe('fooBar');
    expect(camelize('foo bar')).toBe('fooBar');
    expect(camelize('  foo  bar  ')).toBe('fooBar');
    expect(camelize('-')).toBe('');
    expect(camelize(' - ')).toBe('');
    expect(camelize('fooBar')).toBe('fooBar');
    expect(camelize('fooBar-baz')).toBe('fooBarBaz');
    expect(camelize('foìBar-baz')).toBe('foìBarBaz');
    expect(camelize('fooBarBaz-bazzy')).toBe('fooBarBazBazzy');
    expect(camelize('FBBazzy')).toBe('fbBazzy');
    expect(camelize('F')).toBe('f');
    expect(camelize('FooBar')).toBe('fooBar');
    expect(camelize('Foo')).toBe('foo');
    expect(camelize('FOO')).toBe('foo');
    expect(camelize(['foo', 'bar']), 'fooBar');
    expect(camelize(['foo', '-bar']), 'fooBar');
    expect(camelize(['foo', '-bar', 'baz']), 'fooBarBaz');
    expect(camelize(['', '']), '');
    expect(camelize('--')).toBe('');
    expect(camelize('')).toBe('');
    expect(camelize('_')).toBe('');
    expect(camelize(' ')).toBe('');
    expect(camelize('.')).toBe('');
    expect(camelize('..')).toBe('');
    expect(camelize('--')).toBe('');
    expect(camelize('  ')).toBe('');
    expect(camelize('__')).toBe('');
    expect(camelize('--__--_--_')).toBe('');
    expect(camelize(['---_', '--', '', '-_- ']), '');
    expect(camelize('foo bar?')).toBe('fooBar?');
    expect(camelize('foo bar!')).toBe('fooBar!');
    expect(camelize('foo bar$')).toBe('fooBar$');
    expect(camelize('foo-bar#')).toBe('fooBar#');
    expect(camelize('XMLHttpRequest')).toBe('xmlHttpRequest');
    expect(camelize('AjaxXMLHttpRequest')).toBe('ajaxXmlHttpRequest');
    expect(camelize('Ajax-XMLHttpRequest')).toBe('ajaxXmlHttpRequest');
    expect(camelize([]), '');
    expect(camelize('mGridCol6@md')).toBe('mGridCol6@md');
    expect(camelize('A::a')).toBe('a::a');
    expect(camelize('Hello1World')).toBe('hello1World');
    expect(camelize('Hello11World')).toBe('hello11World');
    expect(camelize('hello1world')).toBe('hello1World');
    expect(camelize('Hello1World11foo')).toBe('hello1World11Foo');
    expect(camelize('Hello1')).toBe('hello1');
    expect(camelize('hello1')).toBe('hello1');
    expect(camelize('1Hello')).toBe('1Hello');
    expect(camelize('1hello')).toBe('1Hello');
    expect(camelize('h2w')).toBe('h2W');
    expect(camelize('розовый_пушистый-единороги')).toBe('розовыйПушистыйЕдинороги');
    expect(camelize('розовый_пушистый-единороги')).toBe('розовыйПушистыйЕдинороги');
    expect(camelize('РОЗОВЫЙ_ПУШИСТЫЙ-ЕДИНОРОГИ')).toBe('розовыйПушистыйЕдинороги');
    expect(camelize('桑德在这里。')).toBe('桑德在这里。');
    expect(camelize('桑德在这里。')).toBe('桑德在这里。');
    expect(camelize('桑德_在这里。')).toBe('桑德在这里。');
  });

  test('camelize with pascalCase option', () => {
    expect(camelize('b2b_registration_request', { pascalCase: true })).toBe('B2bRegistrationRequest');
    expect(camelize('foo', { pascalCase: true })).toBe('Foo');
    expect(camelize('foo-bar', { pascalCase: true })).toBe('FooBar');
    expect(camelize('foo-bar-baz', { pascalCase: true })).toBe('FooBarBaz');
    expect(camelize('foo--bar', { pascalCase: true })).toBe('FooBar');
    expect(camelize('--foo-bar', { pascalCase: true })).toBe('FooBar');
    expect(camelize('--foo--bar', { pascalCase: true })).toBe('FooBar');
    expect(camelize('FOO-BAR', { pascalCase: true })).toBe('FooBar');
    expect(camelize('FOÈ-BAR', { pascalCase: true })).toBe('FoèBar');
    expect(camelize('-foo-bar-', { pascalCase: true })).toBe('FooBar');
    expect(camelize('--foo--bar--', { pascalCase: true })).toBe('FooBar');
    expect(camelize('foo-1', { pascalCase: true })).toBe('Foo1');
    expect(camelize('foo.bar', { pascalCase: true })).toBe('FooBar');
    expect(camelize('foo..bar', { pascalCase: true })).toBe('FooBar');
    expect(camelize('..foo..bar..', { pascalCase: true })).toBe('FooBar');
    expect(camelize('foo_bar', { pascalCase: true })).toBe('FooBar');
    expect(camelize('__foo__bar__', { pascalCase: true })).toBe('FooBar');
    expect(camelize('__foo__bar__', { pascalCase: true })).toBe('FooBar');
    expect(camelize('foo bar', { pascalCase: true })).toBe('FooBar');
    expect(camelize('  foo  bar  ', { pascalCase: true })).toBe('FooBar');
    expect(camelize('-', { pascalCase: true })).toBe('');
    expect(camelize(' - ', { pascalCase: true })).toBe('');
    expect(camelize('fooBar', { pascalCase: true })).toBe('FooBar');
    expect(camelize('fooBar-baz', { pascalCase: true })).toBe('FooBarBaz');
    expect(camelize('foìBar-baz', { pascalCase: true })).toBe('FoìBarBaz');
    expect(camelize('fooBarBaz-bazzy', { pascalCase: true })).toBe('FooBarBazBazzy');
    expect(camelize('FBBazzy', { pascalCase: true })).toBe('FbBazzy');
    expect(camelize('F', { pascalCase: true })).toBe('F');
    expect(camelize('FooBar', { pascalCase: true })).toBe('FooBar');
    expect(camelize('Foo', { pascalCase: true })).toBe('Foo');
    expect(camelize('FOO', { pascalCase: true })).toBe('Foo');
    expect(camelize(['foo', 'bar'], { pascalCase: true })).toBe('FooBar');
    expect(camelize(['foo', '-bar'], { pascalCase: true })).toBe('FooBar');
    expect(camelize(['foo', '-bar', 'baz'], { pascalCase: true })).toBe('FooBarBaz');
    expect(camelize(['', ''], { pascalCase: true })).toBe('');
    expect(camelize('--', { pascalCase: true })).toBe('');
    expect(camelize('', { pascalCase: true })).toBe('');
    expect(camelize('--__--_--_', { pascalCase: true })).toBe('');
    expect(camelize(['---_', '--', '', '-_- '], { pascalCase: true })).toBe('');
    expect(camelize('foo bar?', { pascalCase: true })).toBe('FooBar?');
    expect(camelize('foo bar!', { pascalCase: true })).toBe('FooBar!');
    expect(camelize('foo bar$', { pascalCase: true })).toBe('FooBar$');
    expect(camelize('foo-bar#', { pascalCase: true })).toBe('FooBar#');
    expect(camelize('XMLHttpRequest', { pascalCase: true })).toBe('XmlHttpRequest');
    expect(camelize('AjaxXMLHttpRequest', { pascalCase: true })).toBe('AjaxXmlHttpRequest');
    expect(camelize('Ajax-XMLHttpRequest', { pascalCase: true })).toBe('AjaxXmlHttpRequest');
    expect(camelize([], { pascalCase: true })).toBe('');
    expect(camelize('mGridCol6@md', { pascalCase: true })).toBe('MGridCol6@md');
    expect(camelize('A::a', { pascalCase: true })).toBe('A::a');
    expect(camelize('Hello1World', { pascalCase: true })).toBe('Hello1World');
    expect(camelize('Hello11World', { pascalCase: true })).toBe('Hello11World');
    expect(camelize('hello1world', { pascalCase: true })).toBe('Hello1World');
    expect(camelize('hello1World', { pascalCase: true })).toBe('Hello1World');
    expect(camelize('hello1', { pascalCase: true })).toBe('Hello1');
    expect(camelize('Hello1', { pascalCase: true })).toBe('Hello1');
    expect(camelize('1hello', { pascalCase: true })).toBe('1Hello');
    expect(camelize('1Hello', { pascalCase: true })).toBe('1Hello');
    expect(camelize('h1W', { pascalCase: true })).toBe('H1W');
    expect(camelize('РозовыйПушистыйЕдинороги', { pascalCase: true })).toBe('РозовыйПушистыйЕдинороги');
    expect(camelize('розовый_пушистый-единороги', { pascalCase: true })).toBe('РозовыйПушистыйЕдинороги');
    expect(camelize('РОЗОВЫЙ_ПУШИСТЫЙ-ЕДИНОРОГИ', { pascalCase: true })).toBe('РозовыйПушистыйЕдинороги');
    expect(camelize('桑德在这里。', { pascalCase: true })).toBe('桑德在这里。');
    expect(camelize('桑德_在这里。', { pascalCase: true })).toBe('桑德在这里。');
    expect(camelize('a1b', { pascalCase: true })).toBe('A1B');
  });

  test('camelize with preserveConsecutiveUppercase option', () => {
    expect(camelize('foo-BAR', { preserveConsecutiveUppercase: true })).toBe('fooBAR');
    expect(camelize('Foo-BAR', { preserveConsecutiveUppercase: true })).toBe('fooBAR');
    expect(camelize('fooBAR', { preserveConsecutiveUppercase: true })).toBe('fooBAR');
    expect(camelize('fooBaR', { preserveConsecutiveUppercase: true })).toBe('fooBaR');
    expect(camelize('FOÈ-BAR', { preserveConsecutiveUppercase: true })).toBe('FOÈBAR');
    expect(camelize(['foo', 'BAR'], { preserveConsecutiveUppercase: true })).toBe('fooBAR');
    expect(camelize(['foo', '-BAR'], { preserveConsecutiveUppercase: true })).toBe('fooBAR');
    expect(camelize(['foo', '-BAR', 'baz'], { preserveConsecutiveUppercase: true })).toBe('fooBARBaz');
    expect(camelize(['', ''], { preserveConsecutiveUppercase: true })).toBe('');
    expect(camelize('--', { preserveConsecutiveUppercase: true })).toBe('');
    expect(camelize('', { preserveConsecutiveUppercase: true })).toBe('');
    expect(camelize('--__--_--_', { preserveConsecutiveUppercase: true })).toBe('');
    expect(camelize(['---_', '--', '', '-_- '], { preserveConsecutiveUppercase: true })).toBe('');
    expect(camelize('foo BAR?', { preserveConsecutiveUppercase: true })).toBe('fooBAR?');
    expect(camelize('foo BAR!', { preserveConsecutiveUppercase: true })).toBe('fooBAR!');
    expect(camelize('foo BAR$', { preserveConsecutiveUppercase: true })).toBe('fooBAR$');
    expect(camelize('foo-BAR#', { preserveConsecutiveUppercase: true })).toBe('fooBAR#');
    expect(camelize('XMLHttpRequest', { preserveConsecutiveUppercase: true })).toBe('XMLHttpRequest');
    expect(camelize('AjaxXMLHttpRequest', { preserveConsecutiveUppercase: true })).toBe('ajaxXMLHttpRequest');
    expect(camelize('Ajax-XMLHttpRequest', { preserveConsecutiveUppercase: true })).toBe('ajaxXMLHttpRequest');
    expect(camelize([], { preserveConsecutiveUppercase: true })).toBe('');
    expect(camelize('mGridCOl6@md', { preserveConsecutiveUppercase: true })).toBe('mGridCOl6@md');
    expect(camelize('A::a', { preserveConsecutiveUppercase: true })).toBe('a::a');
    expect(camelize('Hello1WORLD', { preserveConsecutiveUppercase: true })).toBe('hello1WORLD');
    expect(camelize('Hello11WORLD', { preserveConsecutiveUppercase: true })).toBe('hello11WORLD');
    expect(camelize('РозовыйПушистыйFOOдинорогиf', { preserveConsecutiveUppercase: true }))
      .toBe('розовыйПушистыйFOOдинорогиf');
    expect(camelize('桑德在这里。', { preserveConsecutiveUppercase: true })).toBe('桑德在这里。');
    expect(camelize('桑德_在这里。', { preserveConsecutiveUppercase: true })).toBe('桑德在这里。');
    expect(camelize('IDs', { preserveConsecutiveUppercase: true })).toBe('iDs');
    expect(camelize('FooIDs', { preserveConsecutiveUppercase: true })).toBe('fooIDs');
  });

  test('camelize with both pascalCase and preserveConsecutiveUppercase option', () => {
    expect(camelize('foo-BAR', { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('FooBAR');
    expect(camelize('fooBAR', { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('FooBAR');
    expect(camelize('fooBaR', { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('FooBaR');
    expect(camelize('fOÈ-BAR', { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('FOÈBAR');
    expect(camelize('--foo.BAR', { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('FooBAR');
    expect(camelize(['Foo', 'BAR'], { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('FooBAR');
    expect(camelize(['foo', '-BAR'], { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('FooBAR');
    expect(camelize(['foo', '-BAR', 'baz'], { pascalCase: true, preserveConsecutiveUppercase: true }))
      .toBe('FooBARBaz');
    expect(camelize(['', ''], { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('');
    expect(camelize('--', { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('');
    expect(camelize('', { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('');
    expect(camelize('--__--_--_', { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('');
    expect(camelize(['---_', '--', '', '-_- '], { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('');
    expect(camelize('foo BAR?', { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('FooBAR?');
    expect(camelize('foo BAR!', { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('FooBAR!');
    expect(camelize('Foo BAR$', { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('FooBAR$');
    expect(camelize('foo-BAR#', { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('FooBAR#');
    expect(camelize('xMLHttpRequest', { pascalCase: true, preserveConsecutiveUppercase: true }))
      .toBe('XMLHttpRequest');
    expect(camelize('ajaxXMLHttpRequest', { pascalCase: true, preserveConsecutiveUppercase: true }))
      .toBe('AjaxXMLHttpRequest');
    expect(camelize('Ajax-XMLHttpRequest', { pascalCase: true, preserveConsecutiveUppercase: true }))
      .toBe('AjaxXMLHttpRequest');
    expect(camelize([], { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('');
    expect(camelize('mGridCOl6@md', { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('MGridCOl6@md');
    expect(camelize('A::a', { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('A::a');
    expect(camelize('Hello1WORLD', { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('Hello1WORLD');
    expect(camelize('Hello11WORLD', { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('Hello11WORLD');
    expect(camelize('pозовыйПушистыйFOOдинорогиf', { pascalCase: true, preserveConsecutiveUppercase: true }))
      .toBe('PозовыйПушистыйFOOдинорогиf');
    expect(camelize('桑德在这里。', { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('桑德在这里。');
    expect(camelize('桑德_在这里。', { pascalCase: true, preserveConsecutiveUppercase: true })).toBe('桑德在这里。');
  });

  test('camelize with locale option', () => {
    expect(camelize('lorem-ipsum', { locale: 'tr-TR' })).toBe('loremİpsum');
    expect(camelize('lorem-ipsum', { locale: 'en-EN' })).toBe('loremIpsum');
    expect(camelize('lorem-ipsum', { locale: ['tr', 'TR', 'tr-TR'] })).toBe('loremİpsum');
    expect(camelize('lorem-ipsum', { locale: ['en-EN', 'en-GB'] })).toBe('loremIpsum');
    expect(camelize('ipsum-dolor', { pascalCase: true, locale: 'tr-TR' })).toBe('İpsumDolor');
    expect(camelize('ipsum-dolor', { pascalCase: true, locale: 'en-EN' })).toBe('IpsumDolor');
    expect(camelize('ipsum-dolor', { pascalCase: true, locale: ['tr', 'TR', 'tr-TR'] })).toBe('İpsumDolor');
    expect(camelize('ipsum-dolor', { pascalCase: true, locale: ['en-EN', 'en-GB'] })).toBe('IpsumDolor');
  });

  test('camelize with disabled locale', () => {
    withLocaleCaseFunctionsMocked(() => {
      expect(camelize('lorem-ipsum', { locale: false })).toBe('loremIpsum');
      expect(camelize('ipsum-dolor', { pascalCase: true, locale: false })).toBe('IpsumDolor');
      expect(camelize('ipsum-DOLOR', { pascalCase: true, locale: false, preserveConsecutiveUppercase: true }))
        .toBe('IpsumDOLOR');
    });
  });

  test('invalid input', () => {
    expect(() => {
      camelize(1 as any);
    }).toThrow(/Expected the input to be/);
  });
});
