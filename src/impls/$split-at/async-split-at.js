/**
 * @generated-from ./$split-at.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { CircularBuffer } from '../../internal/circular-buffer.js';
import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { AsyncBisector } from '../../internal/async-bisector.js';
import { __wrap } from '../$wrap/wrap.js';
import { __asyncPeekerate } from '../$peekerate/async-peekerate.js';

export async function* asyncIndexSplitStrategy(split, { idx }, source) {
  const sourcePeekr = await __asyncPeekerate(source);

  try {
    const fromEnd = idx < 0;
    const offset = Math.abs(idx);
    const buffer = fromEnd ? new CircularBuffer(offset) : null;
    let currentPos = 0;
    let yielded = 0;
    let value;
    /* eslint-disable-next-line no-unmodified-loop-condition */
    while ((fromEnd || currentPos < idx) && !sourcePeekr.done) {
      currentPos++;
      ({ value } = sourcePeekr);

      if (fromEnd) {
        value = buffer.push(value);
      }

      if (!fromEnd || currentPos > offset) {
        yield value;
        yielded++;
      }

      await sourcePeekr.advance();
    }

    if (fromEnd) {
      let i = yielded;
      while (buffer.size && i++ < offset) {
        yield buffer.shift();
      }
    }

    yield split;

    if (fromEnd) {
      yield* buffer;
    } else {
      while (!sourcePeekr.done) {
        yield sourcePeekr.value;
        await sourcePeekr.advance();
      }
    }
  } finally {
    sourcePeekr.return();
  }
}

export function __asyncSplitAt(source, idx) {
  return new AsyncBisector(source, asyncIndexSplitStrategy, { idx });
}

export const asyncSplitAt = /*#__PURE__*/ asyncIterableCurry(
  function $splitAt(source, idx) {
    return __wrap(__asyncSplitAt(source, idx));
  },
  {
    forceSync: true,
  },
);