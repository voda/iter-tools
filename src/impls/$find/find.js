/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$find.js#1643907550732
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable.js';
import { __findOr } from '../$find-or/find-or.js';

export function __find(iterable, predicate) {
  return __findOr(iterable, undefined, predicate);
}

export const find = /*#__PURE__*/ iterableCurry(__find, {
  reduces: true,
});
