/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$reverse.js#1643907550754
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
import { __asyncToArray } from '../$to-array/async-to-array.js';

export function __asyncReverse(_x) {
  return _$__reverse.apply(this, arguments);
}

function _$__reverse() {
  _$__reverse = _wrapAsyncGenerator(function* (source) {
    yield* _asyncGeneratorDelegate(
      _asyncIterator((yield _awaitAsyncGenerator2(__asyncToArray(source))).reverse()),
      _awaitAsyncGenerator,
    );
  });

  return _$__reverse.apply(this, arguments);
}

export const asyncReverse = /*#__PURE__*/ asyncIterableCurry(__asyncReverse);
