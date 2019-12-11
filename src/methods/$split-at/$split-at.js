import { $async, $await, $iteratorSymbol } from '../../../generate/async.macro';

import { CircularBuffer } from '../../internal/circular-buffer';
import { $iterableCurry } from '../../internal/$iterable';
import { IterableIterator } from '../../internal/iterable-iterator';
import { $PartsIterator, split } from '../../internal/$spliterator';

$async;
export function* $IndexSpliterator(source, idx) {
  const sourceIterator = source[$iteratorSymbol]();
  const fromEnd = idx < 0;
  const offset = Math.abs(idx);
  const buffer = fromEnd ? new CircularBuffer(offset) : null;
  let currentPos = 0;
  let yielded = 0;
  let sourceDone = false;

  try {
    let item;
    let value;
    /* eslint-disable no-unmodified-loop-condition */
    while ((fromEnd || currentPos < idx) && !(item = $await(sourceIterator.next())).done) {
      /* eslint-enable no-unmodified-loop-condition */
      currentPos++;
      ({ value } = item);

      if (fromEnd) {
        value = buffer.push(value);
      }

      if (fromEnd && currentPos <= offset) {
        continue;
      } else {
        yield value;
        yielded++;
      }
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
      while (!(item = $await(sourceIterator.next())).done) {
        yield item.value;
      }
    }
    sourceDone = true;
  } finally {
    if (!sourceDone) {
      sourceIterator.return && sourceIterator.return();
    }
  }
}

// This unfortunately could not be expressed as a generator function
// because you can't throw an error safely inside a finally block,
// which is the only way to manage return behavior in a generator function.
export class $SplitAt extends IterableIterator {
  constructor(source, idx) {
    super();
    this.source = source;
    this.idx = idx;
    this.partsIterator = null;
    this.firstPart = null;
    this.secondPart = null;
    this.currentIdx = 0;
  }

  @$async
  setupFirst() {
    this.partsIterator =
      this.partsIterator || new $PartsIterator($await($IndexSpliterator(this.source, this.idx)));
    this.firstPart = this.firstPart || $await(this.partsIterator.next()).value;
  }

  next() {
    const self = this;
    switch (this.currentIdx++) {
      case 0:
        return {
          value: $async(function*() {
            $await(self.setupFirst());

            yield* self.firstPart;
          })(),
          done: false,
        };

      case 1:
        return {
          value: $async(function*() {
            $await(self.setupFirst());
            self.secondPart = $await(self.partsIterator.next()).value;

            yield* self.secondPart;
          })(),
          done: false,
        };

      default:
        return { value: undefined, done: true };
    }
  }

  return() {
    if (this.currentIdx === 1) {
      throw new Error('You must take both parts from splitAt or neither.');
    }
    return { value: undefined, done: true };
  }
}

export function* $splitAt(source, idx) {
  yield* new $SplitAt(source, idx);
}

export default $iterableCurry($splitAt, {
  forceSync: true,
});
