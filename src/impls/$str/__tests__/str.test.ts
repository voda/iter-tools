/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$str.test.ts#1643907550771
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { str } from 'iter-tools-es';
import { wrap } from '../../../test/helpers.js';

describe('str', () => {
  it('joins an iterable of strings into a single string', () => {
    expect(str(wrap(['1', '2', '3']))).toEqual('123');
  });

  it('coerces non-strings into strings', () => {
    expect(str(wrap([1, 2, 3]))).toEqual('123');
  });
});
