/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$drop.js#1643907550726
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable.js';

export function* __drop(iterable, n) {
  let i = 0;
  for (const value of iterable) {
    if (i++ >= n) yield value;
  }
}

export const drop = /*#__PURE__*/ iterableCurry(__drop);
