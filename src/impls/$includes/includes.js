/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$includes.js#1643907550742
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable.js';
import { __findOr } from '../$find-or/find-or.js';

const none = Symbol('none');

export function __includes(iterable, value, same = Object.is) {
  return __findOr(iterable, none, (v) => same(value, v)) !== none;
}

export const includes = /*#__PURE__*/ iterableCurry(__includes, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true,
  validateArgs(args) {
    if (true && typeof args[0] === 'string') {
      console.warn(`For string inputs use includesSeq instead of includes`);
    }
  },
});
