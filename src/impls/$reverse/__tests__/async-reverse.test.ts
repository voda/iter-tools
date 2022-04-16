/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$reverse.test.ts#1643907550754
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncReverse } from 'iter-tools-es';
import { asyncUnwrap, asyncWrap } from '../../../test/async-helpers.js';

describe('asyncReverse', () => {
  describe('when source is empty', () => {
    it('yields no values', async () => {
      expect(await asyncUnwrap(asyncReverse(null))).toEqual([]);
      expect(await asyncUnwrap(asyncReverse(undefined))).toEqual([]);
      expect(await asyncUnwrap(asyncReverse(asyncWrap([])))).toEqual([]);
    });
  });

  describe('when source has values', () => {
    it('yields values in reverse order', async () => {
      expect(await asyncUnwrap(asyncReverse(asyncWrap([1, 2, 3])))).toEqual([3, 2, 1]);
    });
  });
});
