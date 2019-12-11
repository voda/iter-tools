/**
 * @generated-from ./$group-by.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncGroupBy } from '../../..';
import { asyncUnwrapDeep as asyncUw } from '../../../__tests__/async-helpers';
describe('asyncGroupBy', () => {
  it('returns source values grouped by key function', async () => {
    const iter = asyncGroupBy(item => item.toLowerCase(), 'AaaBbaACccCD');
    let next = await iter.next();
    expect(next.value[0]).toBe('a');
    next = await iter.next();
    expect(next.value[0]).toBe('b');
    next = await iter.next();
    expect(next.value[0]).toBe('a');
    next = await iter.next();
    expect(next.value[0]).toBe('c');
    next = await iter.next();
    expect(next.value[0]).toBe('d');
    next = await iter.next();
    expect(next.done).toBe(true);
  });
  it('main cursor (curried)', async () => {
    const iter = asyncGroupBy(_ => _)('AAABBAACCCCD');
    let next = await iter.next();
    expect(next.value[0]).toBe('A');
    next = await iter.next();
    expect(next.value[0]).toBe('B');
    next = await iter.next();
    expect(next.value[0]).toBe('A');
    next = await iter.next();
    expect(next.value[0]).toBe('C');
    next = await iter.next();
    expect(next.value[0]).toBe('D');
    next = await iter.next();
    expect(next.done).toBe(true);
  });
  it('returns source values grouped by key function', async () => {
    const iter = asyncGroupBy(item => item.toLowerCase(), 'AaaBbaACccCD');
    expect(await asyncUw(iter)).toEqual([
      ['a', ['A', 'a', 'a']],
      ['b', ['B', 'b']],
      ['a', ['a', 'A']],
      ['c', ['C', 'c', 'c', 'C']],
      ['d', ['D']],
    ]);
  });
  it('returns source values grouped by identity', async () => {
    const iter = asyncGroupBy(_ => _)('AAABBAACCCCD');
    expect(await asyncUw(iter)).toEqual([
      ['A', ['A', 'A', 'A']],
      ['B', ['B', 'B']],
      ['A', ['A', 'A']],
      ['C', ['C', 'C', 'C', 'C']],
      ['D', ['D']],
    ]);
  });
  it('empty source returns empty iterable', async () => {
    expect(await asyncUw(asyncGroupBy(_ => _, null))).toEqual([]);
    expect(await asyncUw(asyncGroupBy(_ => _)(null))).toEqual([]);
    expect(await asyncUw(asyncGroupBy(_ => _, undefined))).toEqual([]);
    expect(await asyncUw(asyncGroupBy(_ => _)(undefined))).toEqual([]);
  });
  it('uses key function returning a promise', async () => {
    const iter = asyncGroupBy(async item => item.toLowerCase(), 'AaaBbaACccCD');
    let next = await iter.next();
    expect(next.value[0]).toBe('a');
    next = await iter.next();
    expect(next.value[0]).toBe('b');
    next = await iter.next();
    expect(next.value[0]).toBe('a');
    next = await iter.next();
    expect(next.value[0]).toBe('c');
    next = await iter.next();
    expect(next.value[0]).toBe('d');
    next = await iter.next();
    expect(next.done).toBe(true);
  });
  it('with key function', async () => {
    const iter = asyncGroupBy(async item => item.toLowerCase(), 'AaaBbaACccCD');
    expect(await asyncUw(iter)).toEqual([
      ['a', ['A', 'a', 'a']],
      ['b', ['B', 'b']],
      ['a', ['a', 'A']],
      ['c', ['C', 'c', 'c', 'C']],
      ['d', ['D']],
    ]);
  });
});
