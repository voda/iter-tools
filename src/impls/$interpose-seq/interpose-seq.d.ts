/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$interpose-seq.d.ts#1643907550744
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { Wrappable, IterableIterator } from '../../types/iterable';

declare function interposeSeq<V>(
  seq: Wrappable<V>,
): <T>(source: Wrappable<T>) => IterableIterator<T | V>;

declare function interposeSeq<V, T>(
  seq: Wrappable<V>,
  source: Wrappable<T>,
): IterableIterator<T | V>;

export { interposeSeq };
