/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$window-ahead.test.ts#1643907550782
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncWindowAhead } from 'iter-tools-es';
import { asyncWrap, asyncUnwrapDeep } from '../../../test/async-helpers.js';

describe('asyncWindowAhead', () => {
  describe('when source is empty', () => {
    it('yields no windows', async () => {
      expect(await asyncUnwrapDeep(asyncWindowAhead({ filler: 0 }, 3, null))).toEqual([]);
      expect(await asyncUnwrapDeep(asyncWindowAhead({ filler: 0 }, 3, undefined))).toEqual([]);
      expect(await asyncUnwrapDeep(asyncWindowAhead({ filler: 0 }, 3, asyncWrap([])))).toEqual([]);
    });
  });

  describe('when size(source) < size', () => {
    it('yields only partial windows', async () => {
      expect(await asyncUnwrapDeep(asyncWindowAhead({ filler: 0 }, 3, asyncWrap([1, 2])))).toEqual([
        [1, 2, 0],
        [2, 0, 0],
      ]);
    });
  });

  describe('when size(source) === size', () => {
    it('yields one full window, then partial windows', async () => {
      expect(
        await asyncUnwrapDeep(asyncWindowAhead({ filler: 0 }, 3, asyncWrap([1, 2, 3]))),
      ).toEqual([
        [1, 2, 3],
        [2, 3, 0],
        [3, 0, 0],
      ]);
    });
  });

  describe('when size(source) > size', () => {
    it('yields size(source)-size full windows, then partial windows', async () => {
      expect(
        await asyncUnwrapDeep(asyncWindowAhead({ filler: 0 }, 2, asyncWrap([1, 2, 3]))),
      ).toEqual([
        [1, 2],
        [2, 3],
        [3, 0],
      ]);
    });
  });

  describe('when useFiller is false', () => {
    it('yields shorter windows instead of windows with filler', async () => {
      expect(
        await asyncUnwrapDeep(asyncWindowAhead({ useFiller: false }, 3, asyncWrap([1, 2, 3]))),
      ).toEqual([[1, 2, 3], [2, 3], [3]]);
    });
  });

  it('has a default filler of undefined', async () => {
    expect(await asyncUnwrapDeep(asyncWindowAhead(2, asyncWrap([1])))).toEqual([[1, undefined]]);
  });

  describe('when arguments are invalid', () => {
    it('throws', async () => {
      expect(() =>
        asyncWindowAhead('foo' as any, asyncWrap([1, 2, 3])),
      ).toThrowErrorMatchingSnapshot();
    });
  });
});
