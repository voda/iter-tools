/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$zip.test.ts#1643907550789
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncZip, asyncToArray } from 'iter-tools-es';
import { asyncWrap } from '../../../test/async-helpers.js';

describe('asyncZip', () => {
  it('zips', async () => {
    const iter = asyncZip(asyncWrap([1, 2, 3]), asyncWrap([4, 5, 6]), asyncWrap([7, 8, 9]));
    expect(await asyncToArray(iter)).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]);
  });

  it('zips stopping early', async () => {
    const iter = asyncZip(asyncWrap([1, 2, 3]), asyncWrap([4, 5, 6]), asyncWrap([7, 8]));
    expect(await asyncToArray(iter)).toEqual([
      [1, 4, 7],
      [2, 5, 8],
    ]);
  });
});
