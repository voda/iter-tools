/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$drop-while.test.ts#1643907550725
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncDropWhile } from 'iter-tools-es';
import { asyncWrap, asyncUnwrap } from '../../../test/async-helpers.js';

describe('asyncDropWhile', () => {
  describe('when source is empty', () => {
    it('yields no values', async () => {
      expect(await asyncUnwrap(asyncDropWhile((value: any) => value, null))).toEqual([]);
      expect(await asyncUnwrap(asyncDropWhile((value: any) => value, undefined))).toEqual([]);
      expect(await asyncUnwrap(asyncDropWhile((value: any) => value, asyncWrap([])))).toEqual([]);
    });
  });

  describe('when source has values', () => {
    describe('when no values match predicate', () => {
      it('yields values from source', async () => {
        const iter = asyncDropWhile((i) => i !== i, asyncWrap([1, 2, 3, 4, 5, 6]));
        expect(await asyncUnwrap(iter)).toEqual([1, 2, 3, 4, 5, 6]);
      });
    });

    describe('when all values match predicate', () => {
      it('yields no values', async () => {
        const iter = asyncDropWhile((i) => i === i, asyncWrap([1, 2, 3, 4, 5, 6]));
        expect(await asyncUnwrap(iter)).toEqual([]);
      });
    });

    describe('when a value matches predicate', () => {
      it('yields the matching value and subsequent values', async () => {
        const iter = asyncDropWhile((i) => i !== 4, asyncWrap([1, 2, 3, 4, 5, 6]));
        expect(await asyncUnwrap(iter)).toEqual([4, 5, 6]);
      });
    });
  });

  it('may take an async predicate', async () => {
    const iter = asyncDropWhile(async (i) => i !== 4, asyncWrap([1, 2, 3, 4, 5, 6]));
    expect(await asyncUnwrap(iter)).toEqual([4, 5, 6]);
  });
});
