/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$some.test.ts#1643907550758
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncSome } from 'iter-tools-es';
import { asyncWrap } from '../../../test/async-helpers.js';

describe('asyncSome', () => {
  describe('when iterable is empty', () => {
    it('returns false', async () => {
      expect(await asyncSome(() => true, null)).toEqual(false);
      expect(await asyncSome(() => true, undefined)).toEqual(false);
      expect(await asyncSome(() => true, asyncWrap([]))).toEqual(false);
    });
  });

  describe('when no values match predicate', () => {
    it('returns false', async () => {
      expect(await asyncSome((val) => val !== val, [1, 2, 3])).toBe(false);
    });
  });

  describe('when some values match predicate', () => {
    it('returns true', async () => {
      expect(await asyncSome((val) => val > 2, [1, 2, 3])).toBe(true);
    });
  });

  describe('when all values match predicate', () => {
    it('returns true', async () => {
      expect(await asyncSome((val) => val > 0, [1, 2, 3])).toBe(true);
    });
  });

  it('can be passed an async predicate', async () => {
    expect(await asyncSome(async (n) => n % 2 === 0, [1, 2, 3, 4, 5, 6])).toBe(true);
  });
});
