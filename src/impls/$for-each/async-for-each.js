/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$for-each.js#1643907550737
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { _asyncIterator } from '../../internal/asyncish.js';

import { asyncIterableCurry } from '../../internal/async-iterable.js';

export async function __asyncForEach(iterable, callback) {
  let c = 0;
  let _iteratorAbruptCompletion = false;
  let _didIteratorError = false;
  let _iterator;
  let _iteratorError;

  try {
    _iterator = _asyncIterator(iterable);
    for (
      let _step, _step2;
      (_step2 = _iterator.next()),
        (_iteratorAbruptCompletion = !(_step =
          !(_step2 instanceof Promise) && !(_step2.value instanceof Promise)
            ? _step2
            : await _step2).done);
      _iteratorAbruptCompletion = false
    ) {
      const value = _step.value;
      await callback(value, c++);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (_iteratorAbruptCompletion && _iterator.return != null) {
        await _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

export const asyncForEach = /*#__PURE__*/ asyncIterableCurry(__asyncForEach, {
  reduces: true,
});
