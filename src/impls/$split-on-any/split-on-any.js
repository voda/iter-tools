/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$split-on-any.js#1643907550761
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable.js';
import { __splitWhen } from '../$split-when/split-when.js';
import { __includes } from '../$includes/includes.js';

export function __splitOnAny(source, separators, same = Object.is) {
  return __splitWhen(source, (value) => __includes(separators, value, (a, b) => same(b, a)));
}

export const splitOnAny = /*#__PURE__*/ iterableCurry(__splitOnAny, {
  minArgs: 1,
  maxArgs: 2,
  validateArgs(args) {
    if (true && typeof args[0] === 'string') {
      console.warn(`For string inputs use splitOnAnySeq instead of splitOnAny`);
    }
  },
});
