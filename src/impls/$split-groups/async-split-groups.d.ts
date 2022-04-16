/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$split-groups.d.ts#1643907550759
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';

declare function asyncSplitGroups<T>(
  source: AsyncWrappable<T>,
): AsyncIterableIterator<[T, AsyncIterableIterator<T>]>;

declare function asyncSplitGroups<K, T>(
  key: (value: T, i: number) => K | Promise<K>,
): (source: AsyncWrappable<T>) => AsyncIterableIterator<[K, AsyncIterableIterator<T>]>;

declare function asyncSplitGroups<K, T>(
  key: (value: T, i: number) => K | Promise<K>,
  source: AsyncWrappable<T>,
): AsyncIterableIterator<[K, AsyncIterableIterator<T>]>;

export { asyncSplitGroups };
