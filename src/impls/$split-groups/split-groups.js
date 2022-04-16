/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$split-groups.js#1643907550759
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable.js';
import { __spliterateGrouped } from '../$spliterate-grouped/spliterate-grouped.js';
import { __peekerate } from '../$peekerate/peekerate.js';

const initialKey = Symbol('initial group key');

function* groupingSpliterator(split, { getKey }, source) {
  const peekr = __peekerate(source);
  let key = initialKey;
  let idx = 0;

  while (!peekr.done) {
    const lastKey = key;

    key = getKey(peekr.value, idx++);

    if (lastKey !== key) {
      yield split;
      yield key;
    }

    yield peekr.value;

    peekr.advance();
  }
}

export function __splitGroups(source, getKey = (value) => value) {
  return __spliterateGrouped(source, groupingSpliterator, { getKey });
}

export const splitGroups = /*#__PURE__*/ iterableCurry(__splitGroups, {
  minArgs: 0,
  maxArgs: 1,
});
