/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$window.test.ts#1643907550785
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncWindow } from 'iter-tools-es';
import { asyncWrap, asyncUnwrapDeep } from '../../../test/async-helpers.js';

describe('asyncWindow', () => {
  describe('when source is empty', () => {
    it('yields no windows', async () => {
      expect(await asyncUnwrapDeep(asyncWindow(3, null))).toEqual([]);
      expect(await asyncUnwrapDeep(asyncWindow(3, undefined))).toEqual([]);
      expect(await asyncUnwrapDeep(asyncWindow(3, asyncWrap([])))).toEqual([]);
    });
  });

  describe('when size(source) < size', () => {
    it('yields no windows', async () => {
      expect(await asyncUnwrapDeep(asyncWindow(3, asyncWrap([1, 2])))).toEqual([]);
    });
  });

  describe('when size(source) === size', () => {
    it('yields one full window', async () => {
      expect(await asyncUnwrapDeep(asyncWindow(3, asyncWrap([1, 2, 3])))).toEqual([[1, 2, 3]]);
    });
  });

  describe('when size(source) > size', () => {
    it('yields partial windows, then size(source)-size full windows', async () => {
      expect(await asyncUnwrapDeep(asyncWindow(2, asyncWrap([1, 2, 3])))).toEqual([
        [1, 2],
        [2, 3],
      ]);
    });
  });

  describe('when size is invalid', () => {
    it('throws a validation error', async () => {
      expect(() => asyncWindow('' as any, asyncWrap([]))).toThrowErrorMatchingSnapshot();
    });
  });
});
