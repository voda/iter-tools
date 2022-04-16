/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$interpose-seq.js#1643907550744
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry, cache } from '../../internal/iterable.js';

export function* __interposeSeq(source, seq) {
  const subseq_ = cache(seq);

  let first = true;
  for (const sourceValue of source) {
    if (!first) yield* subseq_;
    yield sourceValue;
    first = false;
  }
}

export const interposeSeq = /*#__PURE__*/ iterableCurry(__interposeSeq);
