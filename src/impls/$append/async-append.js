/**
 * @generated-from ./$append.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable.js';

export async function* __asyncAppend(source, value) {
  yield* source;
  yield value;
}

export const asyncAppend = /*#__PURE__*/ asyncIterableCurry(__asyncAppend);