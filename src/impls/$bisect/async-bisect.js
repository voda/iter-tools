/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$bisect.js#1643907550717
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import {
  _awaitAsyncGenerator as _awaitAsyncGenerator2,
  _wrapAsyncGenerator as _wrapAsyncGenerator2,
  _asyncIterator,
  _awaitAsyncGenerator,
  _wrapAsyncGenerator,
} from '../../internal/asyncish.js';

import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { AsyncBisector } from '../../internal/async-bisector.js';
import { __asyncToArray } from '../$to-array/async-to-array.js';
import { __asyncPeekerate } from '../$peekerate/async-peekerate.js';

export function asyncIndexStrategy(_x, _x2, _x3) {
  return _$indexStrategy.apply(this, arguments);
}

function _$indexStrategy() {
  _$indexStrategy = _wrapAsyncGenerator(function* (split, { at }, source) {
    const _source = at < 0 ? yield _awaitAsyncGenerator(__asyncToArray(source)) : source;
    const idx = at < 0 ? _source.length + at : at;
    const peekr = yield _awaitAsyncGenerator(__asyncPeekerate(_source));

    try {
      while (!peekr.done) {
        if (peekr.index === idx) yield split;
        yield peekr.value;
        yield _awaitAsyncGenerator(peekr.advance());
      }
    } finally {
      peekr.return();
    }
  });

  return _$indexStrategy.apply(this, arguments);
}

export function asyncConditionStrategy(_x4, _x5, _x6) {
  return _$conditionStrategy.apply(this, arguments);
}

function _$conditionStrategy() {
  _$conditionStrategy = _wrapAsyncGenerator2(function* (split, { at: predicate }, source) {
    let i = 0;
    let splat = false;
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
              : yield _awaitAsyncGenerator2(_step2)).done);
        _iteratorAbruptCompletion = false
      ) {
        const value = _step.value;
        if (!splat && (yield _awaitAsyncGenerator2(predicate(value, i++)))) {
          yield split;
          splat = true;
        }
        yield value;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _awaitAsyncGenerator2(_iterator.return());
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });

  return _$conditionStrategy.apply(this, arguments);
}

export function __asyncBisect(source, at) {
  const strategy = typeof at === 'number' ? asyncIndexStrategy : asyncConditionStrategy;
  return new AsyncBisector(source, strategy, { at });
}

export const asyncBisect = /*#__PURE__*/ asyncIterableCurry(__asyncBisect, {
  forceSync: true,
});
