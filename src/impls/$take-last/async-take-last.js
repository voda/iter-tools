/**
 * @generated-from ./$take-last.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { __asyncTakeLastOr } from '../$take-last-or/async-take-last-or.js';

export function __asyncTakeLast(iterable) {
  return __asyncTakeLastOr(iterable, undefined);
}

export const asyncTakeLast = /*#__PURE__*/ asyncIterableCurry(__asyncTakeLast, {
  reduces: true,
});