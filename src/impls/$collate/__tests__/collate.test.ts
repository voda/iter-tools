/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$collate.test.ts#1643907550719
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { collate } from 'iter-tools-es';
import { wrap, unwrap } from '../../../test/helpers.js';

describe('collate', () => {
  it('output is sorted if passed a comparator', () => {
    const iter = collate((a, b) => a - b, wrap([1, 8, 9]), wrap([4, 6, 7]), wrap([2, 3, 5]));
    expect(unwrap(iter)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('works with input iterables of different lengths', () => {
    const iter = collate((a, b) => a - b, wrap([]), wrap([2, 3]), wrap([1]));
    expect(unwrap(iter)).toEqual([1, 2, 3]);
  });
});
