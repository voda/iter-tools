/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$append.js#1643907550715
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import {
  _awaitAsyncGenerator as _awaitAsyncGenerator2,
  _wrapAsyncGenerator,
  _awaitAsyncGenerator,
  _asyncIterator,
  _asyncGeneratorDelegate,
} from '../../internal/asyncish.js';

import { asyncIterableCurry } from '../../internal/async-iterable.js';

export function __asyncAppend(_x, _x2) {
  return _$__append.apply(this, arguments);
}

function _$__append() {
  _$__append = _wrapAsyncGenerator(function* (source, value) {
    yield* _asyncGeneratorDelegate(_asyncIterator(source), _awaitAsyncGenerator);
    yield value;
  });

  return _$__append.apply(this, arguments);
}

export const asyncAppend = /*#__PURE__*/ asyncIterableCurry(__asyncAppend);
