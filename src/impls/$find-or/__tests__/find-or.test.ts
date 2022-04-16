/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$find-or.test.ts#1643907550731
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { findOr } from 'iter-tools-es';
import { wrap } from '../../../test/helpers.js';

describe('findOr', () => {
  describe('when iterable is empty', () => {
    it('returns notFoundValue', () => {
      expect(findOr(0, (value: any) => value, null)).toBe(0);
      expect(findOr(0, (value: any) => value, undefined)).toBe(0);
      expect(findOr(0, (value: any) => value, wrap([]))).toBe(0);
    });
  });

  describe('when iterable does not contain the desired value', () => {
    it('returns notFoundValue', () => {
      expect(findOr(0, (_) => false, wrap([1, 2, 3, 4, 5, 6]))).toBe(0);
    });
  });

  describe('when iterable contains the desired value', () => {
    it('returns the value', () => {
      expect(findOr(0, (value) => value === 5, wrap([1, 2, 3, 4, 5, 6]))).toBe(5);
    });
  });
});
