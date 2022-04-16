/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$is-empty.test.ts#1643907550747
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIsEmpty } from 'iter-tools-es';
import { asyncWrap } from '../../../test/async-helpers.js';

describe('asyncIsEmpty', () => {
  describe('when iterable is empty', () => {
    it('returns true', async () => {
      expect(await asyncIsEmpty(null)).toBe(true);
      expect(await asyncIsEmpty(undefined)).toBe(true);
      expect(await asyncIsEmpty(asyncWrap([]))).toBe(true);
    });
  });

  describe('when iterable has values', () => {
    it('returns false', async () => {
      expect(await asyncIsEmpty(asyncWrap([1]))).toBe(false);
      expect(await asyncIsEmpty(asyncWrap([1, 2]))).toBe(false);
    });
  });
});
