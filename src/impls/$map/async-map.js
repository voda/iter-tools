/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$map.js#1643907550751
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import {
  _awaitAsyncGenerator,
  _wrapAsyncGenerator,
  _asyncIterator,
} from '../../internal/asyncish.js';

import { asyncIterableCurry } from '../../internal/async-iterable.js';

export function __asyncMap(_x, _x2) {
  return _$__map.apply(this, arguments);
}

function _$__map() {
  _$__map = _wrapAsyncGenerator(function* (source, func) {
    let c = 0;
    let _iteratorAbruptCompletion = false;
    let _didIteratorError = false;
    let _iterator;
    let _iteratorError;

    try {
      _iterator = _asyncIterator(source);
      for (
        let _step, _step2;
        (_step2 = _iterator.next()),
          (_iteratorAbruptCompletion = !(_step =
            !(_step2 instanceof Promise) && !(_step2.value instanceof Promise)
              ? _step2
              : yield _awaitAsyncGenerator(_step2)).done);
        _iteratorAbruptCompletion = false
      ) {
        const value = _step.value;
        yield yield _awaitAsyncGenerator(func(value, c++));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _awaitAsyncGenerator(_iterator.return());
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });

  return _$__map.apply(this, arguments);
}

export const asyncMap = /*#__PURE__*/ asyncIterableCurry(__asyncMap);
