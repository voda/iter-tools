/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$prepend.js#1643907550753
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable.js';

export function* __prepend(source, value) {
  yield value;
  yield* source;
}

export const prepend = /*#__PURE__*/ iterableCurry(__prepend);
