/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$split-groups.js#1643907550759
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { _awaitAsyncGenerator, _wrapAsyncGenerator } from '../../internal/asyncish.js';

import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { __asyncSpliterateGrouped } from '../$spliterate-grouped/async-spliterate-grouped.js';
import { __asyncPeekerate } from '../$peekerate/async-peekerate.js';

const initialKey = Symbol('initial group key');

function asyncGroupingSpliterator(_x, _x2, _x3) {
  return _$groupingSpliterator.apply(this, arguments);
}

function _$groupingSpliterator() {
  _$groupingSpliterator = _wrapAsyncGenerator(function* (split, { getKey }, source) {
    const peekr = yield _awaitAsyncGenerator(__asyncPeekerate(source));
    let key = initialKey;
    let idx = 0;

    while (!peekr.done) {
      const lastKey = key;

      key = yield _awaitAsyncGenerator(getKey(peekr.value, idx++));

      if (lastKey !== key) {
        yield split;
        yield key;
      }

      yield peekr.value;

      yield _awaitAsyncGenerator(peekr.advance());
    }
  });

  return _$groupingSpliterator.apply(this, arguments);
}

export function __asyncSplitGroups(source, getKey = (value) => value) {
  return __asyncSpliterateGrouped(source, asyncGroupingSpliterator, { getKey });
}

export const asyncSplitGroups = /*#__PURE__*/ asyncIterableCurry(__asyncSplitGroups, {
  minArgs: 0,
  maxArgs: 1,
});
