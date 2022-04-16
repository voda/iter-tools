/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$join-with-seq.d.ts#1643907550748
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { Wrappable as SyncWrappable } from '../../types/iterable';
import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';

declare function asyncJoinWithSeq<W, T>(
  seq: SyncWrappable<W>,
  source: AsyncWrappable<AsyncWrappable<T>>,
): AsyncIterableIterator<T | W>;

declare function asyncJoinWithSeq<W>(
  seq: SyncWrappable<W>,
): <T>(source: AsyncWrappable<AsyncWrappable<T>>) => AsyncIterableIterator<T | W>;

export { asyncJoinWithSeq };
