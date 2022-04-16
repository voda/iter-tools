/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$drop.test.ts#1643907550726
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { drop } from 'iter-tools-es';
import { wrap, unwrap } from '../../../test/helpers.js';

describe('drop', () => {
  describe('when source is empty', () => {
    it('yields no values', () => {
      expect(unwrap(drop(0, null))).toEqual([]);
      expect(unwrap(drop(0, undefined))).toEqual([]);
      expect(unwrap(drop(0, wrap([])))).toEqual([]);
    });
  });

  describe('when n is smaller than size(source)', () => {
    it('drops the first n values and yields the rest', () => {
      expect(unwrap(drop(1, wrap([1, 2, 3])))).toEqual([2, 3]);
    });
  });

  describe('when n is larger than size(source)', () => {
    it('yields no values', () => {
      expect(unwrap(drop(4, wrap([1, 2, 3])))).toEqual([]);
    });
  });
});
