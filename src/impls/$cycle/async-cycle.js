/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$cycle.js#1643907550723
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { __asyncCycleTimes } from '../$cycle-times/async-cycle-times.js';

export function __asyncCycle(source) {
  return __asyncCycleTimes(source, Infinity);
}

export const asyncCycle = /*#__PURE__*/ asyncIterableCurry(__asyncCycle);
