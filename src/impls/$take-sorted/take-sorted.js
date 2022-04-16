/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$take-sorted.js#1643907550774
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable.js';
import { defaultCompareOrder } from '../../internal/compare.js';
import { Heap } from './internal/heap.js';

export function* __takeSorted(source, n = Infinity, compare = defaultCompareOrder) {
  const heap = new Heap(compare);

  for (const value of source) {
    heap.push(value);
    if (heap.size > n) {
      heap.pop();
    }
  }

  while (heap.size) {
    yield heap.pop();
  }
}

export const takeSorted = /*#__PURE__*/ iterableCurry(__takeSorted, {
  minArgs: 0,
  maxArgs: 2,
  validateArgs(args) {
    if (typeof args[1] === 'function') {
      const temp = args[2];
      args[2] = args[1];
      args[1] = temp;
    }
  },
});
