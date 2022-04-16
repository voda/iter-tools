/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$slice.js#1643907550757
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import {
  _awaitAsyncGenerator as _awaitAsyncGenerator4,
  _wrapAsyncGenerator as _wrapAsyncGenerator2,
  _awaitAsyncGenerator as _awaitAsyncGenerator3,
  _asyncIterator as _asyncIterator4,
  _asyncGeneratorDelegate as _asyncGeneratorDelegate2,
  _awaitAsyncGenerator as _awaitAsyncGenerator2,
  _asyncIterator as _asyncIterator3,
  _asyncGeneratorDelegate,
  _asyncIterator as _asyncIterator2,
  _awaitAsyncGenerator,
  _wrapAsyncGenerator,
  _asyncIterator,
} from '../../internal/asyncish.js';

import { CircularBuffer } from '../../internal/circular-buffer.js';
import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { makeValidateArgs } from './internal/validate-args.js';

export function __asyncSliceFromStart(_x) {
  return _$__sliceFromStart.apply(this, arguments);
}

function _$__sliceFromStart() {
  _$__sliceFromStart = _wrapAsyncGenerator(function* (source, start = 0, end = Infinity, step = 1) {
    let currentPos = 0;
    let nextValidPos = start;
    const bufferSize = Math.abs(end);
    let buffer;
    let counter = 0;

    if (end < 0) {
      buffer = new CircularBuffer(bufferSize);
    }

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
        let value = _step.value;
        if (buffer) {
          value = buffer.push(value);
          counter++;
          if (counter <= bufferSize) {
            continue;
          }
        }

        if (currentPos >= end && end >= 0) {
          break;
        }

        if (nextValidPos === currentPos) {
          yield value;
          nextValidPos += step;
        }
        currentPos++;
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

  return _$__sliceFromStart.apply(this, arguments);
}

async function asyncBufferedSlice(source, start, end, step) {
  const bufferSize = Math.abs(start);
  const buffer = new CircularBuffer(bufferSize);
  let counter = 0;

  let _iteratorAbruptCompletion2 = false;
  let _didIteratorError2 = false;
  let _iterator2;
  let _iteratorError2;

  try {
    _iterator2 = _asyncIterator2(source);
    for (
      let _step3, _step4;
      (_step4 = _iterator2.next()),
        (_iteratorAbruptCompletion2 = !(_step3 =
          !(_step4 instanceof Promise) && !(_step4.value instanceof Promise)
            ? _step4
            : await _step4).done);
      _iteratorAbruptCompletion2 = false
    ) {
      const value = _step3.value;
      buffer.push(value);
      counter++;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (_iteratorAbruptCompletion2 && _iterator2.return != null) {
        await _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  let newEnd;
  if (isFinite(end) && end > 0) {
    newEnd = end - (counter - buffer.size);
    if (newEnd < 0) return [];
  } else {
    newEnd = end;
  }
  return __asyncSliceFromStart(buffer, 0, newEnd, step);
}

export function __asyncSlice(_x2) {
  return _$__slice.apply(this, arguments);
}

function _$__slice() {
  _$__slice = _wrapAsyncGenerator2(function* (source, start = 0, end = Infinity, step = 1) {
    if (start >= 0) {
      yield* _asyncGeneratorDelegate(
        _asyncIterator3(__asyncSliceFromStart(source, start, end, step)),
        _awaitAsyncGenerator2,
      );
    } else {
      yield* _asyncGeneratorDelegate2(
        _asyncIterator4(yield _awaitAsyncGenerator4(asyncBufferedSlice(source, start, end, step))),
        _awaitAsyncGenerator3,
      );
    }
  });

  return _$__slice.apply(this, arguments);
}

export const asyncSlice = /*#__PURE__*/ asyncIterableCurry(__asyncSlice, {
  validateArgs: /*#__PURE__*/ makeValidateArgs('asyncSlice'),
  growRight: true,
  minArgs: 0,
  maxArgs: 3,
});
