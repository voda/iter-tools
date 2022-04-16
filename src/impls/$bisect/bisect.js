/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$bisect.js#1643907550717
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable.js';
import { Bisector } from '../../internal/bisector.js';
import { __toArray } from '../$to-array/to-array.js';
import { __peekerate } from '../$peekerate/peekerate.js';

export function* indexStrategy(split, { at }, source) {
  const _source = at < 0 ? __toArray(source) : source;
  const idx = at < 0 ? _source.length + at : at;
  const peekr = __peekerate(_source);

  try {
    while (!peekr.done) {
      if (peekr.index === idx) yield split;
      yield peekr.value;
      peekr.advance();
    }
  } finally {
    peekr.return();
  }
}

export function* conditionStrategy(split, { at: predicate }, source) {
  let i = 0;
  let splat = false;
  for (const value of source) {
    if (!splat && predicate(value, i++)) {
      yield split;
      splat = true;
    }
    yield value;
  }
}

export function __bisect(source, at) {
  const strategy = typeof at === 'number' ? indexStrategy : conditionStrategy;
  return new Bisector(source, strategy, { at });
}

export const bisect = /*#__PURE__*/ iterableCurry(__bisect, {
  forceSync: true,
});
