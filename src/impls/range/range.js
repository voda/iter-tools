import { wrapWithResultIterable } from '../../internal/iterable.js';
import { isObject, isDef } from '../../internal/shapes.js';
import { isInteger, isIntegerOrInfinite } from '../../internal/number.js';

export function* __range(start = 0, end = Infinity, step = 1) {
  for (let i = start; step > 0 ? i < end : i > end; i += step) {
    yield i;
  }
}

export const range = /*#__PURE__*/ wrapWithResultIterable(__range, {
  growRight: true,
  validateArgs(args) {
    let [optsOrEndOrStart, end = Infinity, step] = args;
    let start;

    if (isObject(optsOrEndOrStart)) {
      ({ start, end, step } = optsOrEndOrStart);
    } else {
      if (args.length > 1) {
        start = optsOrEndOrStart;
      } else {
        end = optsOrEndOrStart;
      }
    }

    if (isDef(start) && !isInteger(start)) {
      throw new TypeError('The specified start was not an integer');
    }

    if (isDef(end) && !isIntegerOrInfinite(end)) {
      throw new TypeError('The specified end was not an integer or infinite');
    }

    if (isDef(step) && !isInteger(step, true)) {
      throw new TypeError('The specified step was not a non-zero integer');
    }

    args[0] = start;
    args[1] = end;
    args[2] = step;
  },
});